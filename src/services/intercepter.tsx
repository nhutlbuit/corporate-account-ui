import axios from 'axios';
import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Interceptors: React.FC = (): JSX.Element => {

    axios.interceptors.request.use(req => {
        console.log('request');
            return req;
        }, error => {
            return Promise.reject(error);
        }
    );

    axios.interceptors.response.use(response => {
            console.log('response');
            return response;
        },
        error => {
            console.log('response');
            return Promise.reject(error);
        }
    );

    return(
        <>
            {<Spinner animation='border' variant='success' />}
        </>
    );

};


export default Interceptors;
