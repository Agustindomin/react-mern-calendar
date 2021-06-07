import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Calendar, momentLocalizer }from 'react-big-calendar';
import moment from 'moment'; // paquete para manejar fechas, tiempos, etc


import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages-es'; // Mensajes en español del Calendar
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { uiOpenModal } from '../../actions/ui';
import { eventClearActiveEvent, eventSetActive, eventStartLoading } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';

// Estilos del Calendar
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Ponemos configuracion de moment en español
import 'moment/locale/es'; // obtenemos el idioma español
import { DeletedEventFab } from '../ui/DeletedEventFab';



moment.locale('es'); // Lo ponemos en español

// Setup the localizer by providing the moment (or globalize) Object to the correct localizer.
const localizer = momentLocalizer(moment) // or globalizeLocalizer

// Definimos los eventos para el Calendar
// const events = [{
//     title: 'Cumpleaños del jefe',
//     start: moment().toDate(),
//     end: moment().add(2, 'hours').toDate(),
//     bgcolor: '#fafafa',
//     notes: 'Comprar la tarta',
//     user: {
//         id: '123',
//         name: 'Agustín'
//     }
// }]


export const CalendarScreen = () => {



    // Hook de react-redux para poder hacer el dispatch
    const dispatch = useDispatch();   
    
    // TAREA: Leer los eventos almacenados en el store
    const { events, activeEvent } = useSelector( state => state.calendar );

    // Leemos el uid del usuario logueado
    const { uid }  = useSelector( state => state.auth );

    // useState para recuperar la View de donde estábamos si existe y si no el ponemos Vista mes
    const [lastView, setLastView] = useState( localStorage.getItem('lastView') || 'month' );

    // Cargamos eventos guardado en la BD si los hay
    useEffect(() => {
        
        dispatch( eventStartLoading() );

    }, [ dispatch ]);

    // Gestion de eventos del Calendar
    const onDoubleClick = (e) => {
        // console.log(e);
        // Hacemos el dispatch de la acción uiOpenModal
        dispatch( uiOpenModal() ); // Abrimos el modal
    }
    const onSelectEvent = (e) => {
        // console.log(e);
        dispatch( eventSetActive(e) ); // Lo ponemos activo
    }
    const onViewChange = (e) => {
        //Actualizamos la view
        setLastView(e);
        // grabamos la última vista en el localStorage
        localStorage.setItem('lastView', e);
    }

    const onSelectSlot = (e) => {
        // console.log(e);

        // TODO: abrir el modal para agrgar un evento nuevo

        // Ponemos activeEvent null
        dispatch( eventClearActiveEvent() );
    }

    // Aplicamos estilos personalizados en los eventos del calendar
    const eventStyleGetter = ( event, start, end, isSelected ) => {
        // console.log( event, start, end, isSelected );

        const style = {
            backgroundColor: ( uid === event.user._id ) ? '#367CF7' : '#465660',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }

        return { style };

    };

    return (
        <div className="calendar-screen">

            <Navbar />

            <Calendar
                localizer={localizer}
                events={ events }
                startAccessor="start"
                endAccessor="end"
                messages={ messages } // mensaje en español
                eventPropGetter={ eventStyleGetter } // estilos personalizados
                onDoubleClickEvent={ onDoubleClick } // evento
                onSelectEvent={ onSelectEvent } // evento
                onView={ onViewChange } // evento
                onSelectSlot={ onSelectSlot }
                selectable={ true }
                view={ lastView } // Vista por defecto
                components={ // Podemos personalizar todos los elementos del calendar y mandarle por referencia nuestros componentes
                    {
                        event: CalendarEvent
                    }

                }
            />

                { 
                    (activeEvent) && <DeletedEventFab />
                }
                
                <AddNewFab />

            <CalendarModal />
    
        </div> 
    )
}
