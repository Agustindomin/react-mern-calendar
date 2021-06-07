import Swal from "sweetalert2";

import { types } from "../types/types";
import { fetchConToken } from "../helpers/fetch";
import { prepareEvents } from "../helpers/prepareEvents";



export const startAddNew = ( event ) => {
    return async( dispatch, getState ) => {

        const { uid, name } = getState().auth;
        
        try {

            // Grabamos el evento en la BD
            const resp = await fetchConToken( 'events', event , 'POST');
            const body = await resp.json();
            
            if ( body.ok ) { // el evento se ha grabado correctamente en la BD
                // Añadimos los campos que faltan
                event.id = body.evento.id;
                event.user = {
                    _id: uid,
                    name: name
                };

                // Disparamos el evento eventAddNew para grabarlo en el store
                dispatch( eventAddNew( event ) );
            }

        } catch (error) {
            console.log(error);
        }
        
    }
}

const eventAddNew = ( event ) => ({
     type: types.eventAddNew,
     payload: event
});

export const eventSetActive = ( event ) => ({
    type: types.eventSetActive,
    payload: event
});

export const eventClearActiveEvent = () => ({ type: types.eventClearActiveEvent });

export const eventStartUpdate = ( event ) => {
    return async( dispatch, getState ) => {

        // const { uid, name } = getState().auth;
        
        try {

            // Actualizamos el evento en la BD
            const resp = await fetchConToken( `events/${ event.id }`, event , 'PUT');
            const body = await resp.json();
            
            if ( body.ok ) { // el evento se ha grabado correctamente en la BD
                // Disparamos el evento eventAddNew para grabarlo en el store
                dispatch( eventUpdated( event ) );
            }
            else {
                // Error al intentar actualizar
                Swal.fire('Error', body.msg, 'error');
            }

        } catch (error) {
            console.log(error);
        }
        
    }
}

const eventUpdated = ( event ) => ({
    type: types.eventUpdated,
    payload: event
});

export const eventStartDeleted = () => {
    return async( dispatch, getState ) => {

        const { activeEvent } = getState().calendar;
        // console.log( activeEvent );
        
        try {

            // Actualizamos el evento en la BD
            const resp = await fetchConToken( `events/${ activeEvent.id }`, {} , 'DELETE');
            const body = await resp.json();
            
            if ( body.ok ) { // el evento se ha grabado correctamente en la BD
                // Disparamos el evento eventAddNew para grabarlo en el store
                dispatch( eventDeleted() );
            }
            else {
                // Error al intentar actualizar
                Swal.fire('Error', body.msg, 'error');
            }

        } catch (error) {
            console.log(error);
        }

    }
}

const eventDeleted = () => ({ type: types.eventDeleted });

export const eventStartLoading = () => {
    return async(dispatch) => {

        try {

            // Recuperamos todos los eventos de la BD
            const resp = await fetchConToken( 'events' );
            const body = await resp.json();

            const events = prepareEvents( body.eventos );
            console.log(events);

            // Disparamos el evento eventsLoaded para grabarlos en el store
            dispatch( eventsLoaded( events ) );

        } catch (error) {
            console.log(error);
        }
       


    }
}

const eventsLoaded = ( events ) => ({
    type: types.eventsLoaded,
    payload: events
});

export const eventLogout = () => ({ type: types.eventLogout });