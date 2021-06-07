import Swal from "sweetalert2";
import { fetchSinToken, fetchConToken } from "../helpers/fetch"
import { types } from "../types/types";
import { eventLogout } from "./events";



export const startLogin = ( email, password ) => {

    return async ( dispatch ) => {

        const resp = await fetchSinToken( 'auth', { email, password }, 'POST' );
        // Como fetch devuelve una promesa, lo recuperamos con await también
        const body = await resp.json();

        // Comprobamos que el campo body.ok de la respuesta sea true y grabamos el token en el localStorage
        if ( body.ok ) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            // Grabamos los datos del login de usuario en el store, haciendo el dispatch de la accion login
            dispatch( login({
                uid: body.uid,
                name: body.name
            }) );

        }
        else { // mostramos un error
            Swal.fire('Error', body.msg, 'error');
        }

    }

}

export const startRegister = ( email, password, name ) => {

    return async ( dispatch ) => {

        const resp = await fetchSinToken( 'auth/new', { email, password, name }, 'POST' );
        // Como fetch devuelve una promesa, lo recuperamos con await también
        const body = await resp.json();

        // Comprobamos que el campo body.ok de la respuesta sea true y grabamos el token en el localStorage
        if ( body.ok ) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            // Grabamos los datos del login de usuario en el store, haciendo el dispatch de la accion login
            dispatch( login({
                uid: body.uid,
                name: body.name
            }) );

        }
        else { // mostramos un error
            Swal.fire('Error', body.msg, 'error');
        }

    }

}

export const startChecking = () => {
    return async(dispatch) => {

        const resp = await fetchConToken( 'auth/renew' );
        // Como fetch devuelve una promesa, lo recuperamos con await también
        const body = await resp.json();

        // Comprobamos que el campo body.ok de la respuesta sea true y grabamos el token en el localStorage
        if ( body.ok ) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            // Grabamos los datos del login de usuario en el store, haciendo el dispatch de la accion login
            dispatch( login({
                uid: body.uid,
                name: body.name
            }) );

        }
        else { // mostramos un error
            // Disparamos la accion para finalizar el checking
            dispatch( checkingFinish() );
        }


    }
}

export const checkingFinish = () => ({ type: types.authCheckingFinish });

export const startLogout = () => {
    return ( dispatch ) => {

        // Borramos el localStorage
        localStorage.clear();

        // Ejecutamos el borrado de datos del store del calendar
        dispatch( eventLogout() );

        // Ejecutamos el borrado de datos del store del auth
        dispatch( logout() );

    }
}

export const logout = () => ({ type: types.authLogout });

const login = ( user ) => ({
    type: types.authLogin,
    payload: user
});