import React from 'react';
import { useDispatch } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';

export const AddNewFab = () => {

    // Hook de react-redux para poder hacer el dispatch
    const dispatch = useDispatch();

    // Manejadores eventos
    const handleClickNew = () => {
        // Hacemos el dispatch de la acción uiOpenModal
        dispatch( uiOpenModal() );
    }

    return (
        <button
            className="btn btn-primary fab"
            onClick={ handleClickNew }
        >
            <i className="fas fa-plus"></i>
        </button>
    )
}
