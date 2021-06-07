import React from 'react';
import { useDispatch } from 'react-redux';
import validator from 'validator';
import Swal from 'sweetalert2';

import { useForm } from '../../hooks/useForm';
import { startLogin, startRegister } from '../../actions/auth';
import './login.css';


export const LoginScreen = () => {

    // Hook de react-redux para poder hacer el dispatch
    const dispatch = useDispatch ();

    // Custom hook useForm para el login
    const [ formLoginValues, handleLoginInputChange ] = useForm({
        lEmail: 'agustindomin@gmail.com',
        lPassword: '123456'
    });

    // Custom hook useForm para el registro
    const [ formRegisterValues, handleRegisterInputChange ] = useForm({
        rName: 'agustín Domin',
        rEmail: 'agustindo@gmail.com',
        rPassword1: '123456',
        rPassword2: '123456'
    });

    // Desestructuramos los campos
    const { lEmail, lPassword } = formLoginValues;
    const { rName, rEmail, rPassword1, rPassword2 } = formRegisterValues;

    // Manejadores submit
    const handleLogin = ( e ) => {
        e.preventDefault();

        // Validamos lEmail
        if ( !validator.isEmail(lEmail) ) {
            return Swal.fire({
                title: 'Email error',
                text: 'El email introducido no es válido',
                icon: 'error',
                showCloseButton: true,
            });
        }

        // Validamos lPassword
        if ( !validator.isLength( lPassword, 6 ) ) {
            return Swal.fire({
                title: 'Password error',
                text: 'El password ha de tener 6 caracteres como minimo',
                icon: 'error',
                showCloseButton: true,
            });
        }

        // Disparamos la accion
        dispatch( startLogin( lEmail, lPassword ) );

    }

    const handleRegister = ( e ) => {
        e.preventDefault();

        // Validamos rName
        if ( validator.isEmpty(rName) ) {
            return Swal.fire({
                title: 'Name error',
                text: 'El name es obligatorio',
                icon: 'error',
                showCloseButton: true,
            });
        }

        // Validamos rEmail
        if ( !validator.isEmail(rEmail) ) {
            return Swal.fire({
                title: 'Email error',
                text: 'El email introducido no es válido',
                icon: 'error',
                showCloseButton: true,
            });
        }

        // Validamos rPassword1
        if ( !validator.isLength( rPassword1, 6 ) ) {
            return Swal.fire({
                title: 'Password error',
                text: 'El password ha de tener 6 caracteres como minimo',
                icon: 'error',
                showCloseButton: true,
            });
        }
        // Validamos qeu las password coinciden
        if ( rPassword1 !== rPassword2 ) {
            return Swal.fire({
                title: 'Passwords error',
                text: 'Las contraseñas no coinciden',
                icon: 'error',
                showCloseButton: true,
            });
        }

        // Disparamos la accion
        dispatch( startRegister( rEmail, rPassword1, rName ) );

    }

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={ handleLogin }>
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="lEmail"
                                value={ lEmail }
                                onChange={ handleLoginInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="lPassword"
                                value={ lPassword }
                                onChange={ handleLoginInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={ handleRegister }>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name="rName"
                                value={ rName }
                                onChange={ handleRegisterInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                name="rEmail"
                                value={ rEmail }
                                onChange={ handleRegisterInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña" 
                                name="rPassword1"
                                value={ rPassword1 }
                                onChange={ handleRegisterInputChange }
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña" 
                                name="rPassword2"
                                value={ rPassword2 }
                                onChange={ handleRegisterInputChange }
                            />
                        </div>

                        <div className="form-group">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}