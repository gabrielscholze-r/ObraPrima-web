import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthProvider from '../../config/AuthContext';

function Homepage() {
    const [id, setID] = useContext(AuthProvider)
    let history = useNavigate()
    if (id == "" || id == undefined) {
        history('/')
    }
    return (
        <div>
            Home
        </div>
    );
}

export default Homepage;