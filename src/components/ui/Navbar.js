import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { eventLogout } from '../../actions/events';

export const Navbar = () => {


    // TAREA: poner el nombre del usuario logueado
    // Leemos el store para recuperar el nombre del usuario logueado
    const { name } = useSelector(state => state.auth)

    // Definimos el dispatch
    const dispatch = useDispatch();

    // Manejador del logout
    const handleLogout = () => {

        dispatch( startLogout() );

    }

    return (
        <div className="navbar navbar-dark bg-dark mb-4">
            <span className="navbar-brand">
                { name }
            </span>
            
            <button
                className="btn btn-outline-danger"
                onClick={ handleLogout }
            >
                <i className="fas fa-sign-out-alt"></i>
                <span> Salir</span>
            </button>

        </div>
    )
}
