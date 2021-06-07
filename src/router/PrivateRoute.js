import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({
    isLoggedIn,
    component: Component, // Lo renombramos a Mayusculas porque es un Componente a renderizar
    ...rest
}) => {

    // // Grabamos la última página visitada en el localStorage
    // localStorage.setItem('lastPath', rest.location.pathname);

    return (
        <Route { ...rest } // Ponemos el resto de parametros del Route; path, exact, etc
            component={ ( props ) => (// Lo llamamos en plan callback y le pasamos las props: history, etc

                ( isLoggedIn ) // vemos si está autenticado
                    ? <Component { ...props } /> // retornamos el componente
                    : <Redirect to="/login" /> // lo redirigimos al login

            )}
        />
    )
}

// Ponemos los PropsTypes
PrivateRoute.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}