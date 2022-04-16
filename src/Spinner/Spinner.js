import React, { Fragment } from 'react'
import spinner from './spinner.gif'


const Spinner = () => {
    return (
        <Fragment>
            <img src={spinner}
            alt='Loading...' 
            style={{ 
                backgroundColor: 'transparent',
                width: '300px', 
                margin: 'auto',
                marginTop: '60px',  
                display: 'block'}}/>
        </Fragment>
    )
}

export default Spinner