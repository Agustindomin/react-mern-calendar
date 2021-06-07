const baseUrl = process.env.REACT_APP_API_URL;



const fetchSinToken = ( endpoint, data, method = 'GET' ) => {

    // Definimos la Url Api a usar
    const url = `${ baseUrl }/${ endpoint }`;

    // Si el método es GET, directamente devolvemos la petición
    if ( method === 'GET' ) { // peticion GET
        return fetch( url );
    }
    else { // Resto de peticiones: POST, PUT, DELETE
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data )
        });
    }

}

const fetchConToken = ( endpoint, data, method = 'GET' ) => {

    // Definimos la Url Api a usar
    const url = `${ baseUrl }/${ endpoint }`;

    // Recuperamos el token del localStorage
    const token = localStorage.getItem('token') || '';

    // Si el método es GET, directamente devolvemos la petición
    if ( method === 'GET' ) { // peticion GET
        return fetch( url, {
            method,
            headers: {
                'x-token': token
            },
            body: JSON.stringify( data )
        } );
    }
    else { // Resto de peticiones: POST, PUT, DELETE
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'x-token': token
            },
            body: JSON.stringify( data )
        });
    }

}


export {
    fetchSinToken,
    fetchConToken,
}