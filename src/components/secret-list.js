import React from 'react';
import auth from '../hoc/auth';

const SecretList = props=>{
    return(
        <div>
            <h2 className="align-center"> Secret List</h2>
            <ul>
                <li>Do not</li>
                <li>Tell</li>
                <li>Anyone</li>
                <li>I am </li>
                <li>here</li>
            </ul>
        </div>
    )

}


export default auth(SecretList);
