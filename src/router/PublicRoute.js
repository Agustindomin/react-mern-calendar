import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

export const PublicRoute = ({
    isLoggedIn,
    component: Component, // Lo renombramos a Mayusculas porque es un Componente a renderizar
    ...rest
}) => {
    return (
        <Route { ...rest } // Ponemos el resto de parametros del Route; path, exact, etc
            component={ ( props ) => (// Lo llamamos en plan callback y le pasamos las props: history, etc

                ( isLoggedIn ) // vemos si está autenticado
                    ? <Redirect to="/" /> // lo redirigimos a la página principal
                    : <Component { ...props } /> // retornamos el componente 
                    
            )}
        />
    )
}

// Ponemos los PropsTypes
PublicRoute.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}