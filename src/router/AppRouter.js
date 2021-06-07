import React, { useEffect } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { startChecking } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';


export const AppRouter = () => {

        {/* 
            TAREA: definir las siguientes RUTAS

            // exact /login - componente LoginScreen
            // exact / - componente CalendarScrenn
        */}

    // Definimos el dispatch
    const dispatch = useDispatch();

    // Leemos el checking del store
    const { checking, uid } = useSelector(state => state.auth);

    // Usamos useEffect para comprobar el checking
    useEffect(() => {
        
        dispatch( startChecking() );

    }, [dispatch]);

    // Mostramos mensaje hasta que se haga el checking
    if ( checking ) {
         return (<h5>Espere...</h5>);
    }

    return (
        <Router>
            <div>
                <Switch>

                    <PublicRoute
                        exact
                        path="/login"
                        component={ LoginScreen }
                        isLoggedIn={ !!uid } // Convertimos la cadena uid en valor booleano
                    />
                
                    <PrivateRoute
                        exact
                        path="/"
                        component={ CalendarScreen }
                        isLoggedIn={ !!uid } // Convertimos la cadena uid en valor booleano
                    />

                    <Redirect to="/" />
                
                </Switch>
            </div>
        </Router>
    )
}
