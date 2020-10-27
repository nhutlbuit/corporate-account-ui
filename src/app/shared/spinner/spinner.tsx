
import React from 'react';
import './spinner.scss';

function Spinner() {

    return (
        <>
            <div className='spinner'>
                {'Loading  '}
                <div className='bounce1'></div>
                <div className='bounce2'></div>
                <div className='bounce3'></div>
            </div>

        </>
    );
}

export default Spinner;
