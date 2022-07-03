import React, { useContext } from 'react';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import SplashScreen from '../../pages/SplashScreen';
import {Routes, Route, useNavigate} from 'react-router-dom';
import AuthProvider from '../AuthContext';

function UnAuth() {
    const [id, setID] = useContext(AuthProvider)
    let history = useNavigate()
    if(id!="" && id!=undefined){
        history('/Home')

    }
    return (
        <Routes>
            <Route path="/" element={<SplashScreen/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Register" element={<Register/>}/>
        </Routes>
    );
}

export default UnAuth;