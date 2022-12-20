import React from 'react';
import './ErrorModal.css'
const ErrorModal=props=>{
    return <div className='errorcard'>
        <header>
            {props.title}
        </header>
        <footer>
        <p>{props.message}</p>
        <button onClick={props.onOkay}>Okay</button>
        </footer>
    </div>
}
export default ErrorModal;