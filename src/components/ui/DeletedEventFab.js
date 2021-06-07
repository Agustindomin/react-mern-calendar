import React from 'react';
import { useDispatch } from 'react-redux';
import { eventStartDeleted } from '../../actions/events';

export const DeletedEventFab = () => {

    // Hook de react-redux para poder hacer el dispatch
    const dispatch = useDispatch ();

    // Manejadores eventos
    const handleDelete = () => {
        // Hacemos el dispatch de la acción eventDeleted
        dispatch( eventStartDeleted() );
    }

    return (
        <button
            className="btn btn-danger fab-danger"
            onClick={ handleDelete }
        >
            <i className="fas fa-trush"></i>
            <span> Borrar evento</span>
        </button>
    )
}
