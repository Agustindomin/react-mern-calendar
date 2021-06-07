import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';

import Swal from 'sweetalert2';

import { uiCloseModal } from '../../actions/ui';
import { eventClearActiveEvent, eventStartUpdate, startAddNew } from '../../actions/events';




// Estilos del Modal
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};

// Enlazamos el Modal con el id="root" del index.html
Modal.setAppElement('#root');

// Valores iniciales de DatePicker
const now = moment().minute(0).second(0).add(1,'hours');
const nowPlus1 = now.clone().add(1, 'hours');

// Definimos lo estructura inicial de un evento
const initEvent = {
    title: '',
    notes: '',
    start: now.toDate(),
    end: nowPlus1.toDate()
} 



export const CalendarModal = () => {

    // Para recuperar los datos del state usamos el hook useSelector
    const { modalOpen } = useSelector ( state => state.ui );
    const { activeEvent } = useSelector ( state => state.calendar );

    // Hook de react-redux para poder hacer el dispatch
    const dispatch = useDispatch();

    // StartDate y EndDate del datePicker
    // const [ setDateStart ] = useState( now.toDate() );
    // const [ setDateEnd ] = useState( nowPlus1.toDate() );
    const [ titleValid, setTitleValid ] = useState(true);

    // Estado del formulario
    const [formValues, setFormValues] = useState( initEvent ); // initEvent: Evento vacío inicial

    // valores de formulario
    const { title, notes, start, end } = formValues;

    // useEffect pendiente de los cambios en  activeEvent
    useEffect(() => {
        
        // Comprobamos que exista el activeEvent y entonces le pasamos sus datos al formulario
        if ( activeEvent ) {
            setFormValues( activeEvent );
        }
        else {
            setFormValues( initEvent );
        }
        
    }, [activeEvent, setFormValues]);

    // Manejador de cambios en campos del formulario
    const handleInputChange = ({ target }) => {

        setFormValues({
            ...formValues,
            [target.name]: target.value
        });

    };

    // Manejador eventos del Modal
    const closeModal = () => {
        // console.log('Closing...');
        dispatch( uiCloseModal() );
        // limpiamos el activeEvent
        dispatch( eventClearActiveEvent() );
        // limpiamos el formulario de datos
        setFormValues( initEvent );
        
    }

    // Manejadores eventos DatePicker
    const handleStartDateChange = (e) => {
        // setDateStart(e);
        setFormValues({
            ...formValues,
            start: e
        });
    }
    const handleEndDateChange = (e) => {
        // setDateEnd(e);
        setFormValues({
            ...formValues,
            end: e
        });
    }

    // Manejador evento onSubmit del formulario
    const handleSubmitForm = (e) => {

        e.preventDefault();

        // Validaciones

        const momentStart = moment( start );
        const momentEnd = moment( end );

        // Horas
        if ( momentStart.isSameOrAfter( momentEnd ) ) {
            // Mostramos mensaje al usuario con Swal
            return Swal.fire('Error', 'La fecha fin ha de ser mayor a la fecha de inicio', 'error');
        }

        // Titulo
        if ( title.trim().length < 2 ) {
            return setTitleValid( false );
        }

        // TODO: Grabar los datos en la BBDD
        // Si llegamos aquí enviamos el formulario
        // Si activeEvent es null ===> esun nuevo evento, si tiene valor es una actualizacion de un evento
        if ( activeEvent )  { // Actualizamos el evento
            dispatch( eventStartUpdate( formValues ) );
        }
        else { // Creamos un nuevo evento
            dispatch( startAddNew( formValues ) );
        }

        setTitleValid(true);

        closeModal();

    }



    return (
        <Modal
          isOpen={ modalOpen }
        //   onAfterOpen={afterOpenModal}
          onRequestClose={ closeModal }
          style={ customStyles }
          closeTimeoutMS={ 200 }
          className="modal"
          overlayClassName="modal-fondo"
        >
            <h1> { (activeEvent) ? 'Editar evento' : 'Nuevo evento' } </h1>
            <hr />
            <form
                className="container"
                onSubmit={ handleSubmitForm }
            >

                <div className="form-group">
                    <label>Fecha y hora inicio</label>
                    <DateTimePicker
                        name="start"
                        onChange={ handleStartDateChange }
                        value={ start }
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label>Fecha y hora fin</label>
                    <DateTimePicker
                        name="end"
                        onChange={ handleEndDateChange }
                        value={ end }
                        minDate={ start }
                        className="form-control"
                    />
                </div>

                <hr />
                <div className="form-group">
                    <label>Titulo y notas</label>
                    <input 
                        type="text" 
                        className={ `form-control ${ !titleValid && 'is-invalid' }` }
                        placeholder="Título del evento"
                        name="title"
                        value={ title }
                        autoComplete="off"
                        onChange={ handleInputChange }
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group">
                    <textarea 
                        type="text" 
                        className="form-control"
                        placeholder="Notas"
                        rows="3"
                        name="notes"
                        value={ notes }
                        onChange={ handleInputChange }
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>

        </Modal>
    )
};
