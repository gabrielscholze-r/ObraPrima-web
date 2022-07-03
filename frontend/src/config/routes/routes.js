import React, { useContext } from 'react';
import AuthProvider from '../AuthContext';
import Auth from './auth';
import UnAuth from './unauth';


function Routes() {
    const [id, setID] = useContext(AuthProvider)
    return (
        <>
         {
            (id!="" && id!=undefined) ? (<Auth/>) : (<UnAuth/>)
         }   
        </>
    );
}

export default Routes;