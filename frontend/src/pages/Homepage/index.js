import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthProvider from '../../config/AuthContext';
import obra_prima from '../../assets/obra_prima.png'
import './index.css'

function Homepage() {
    const [id, setID] = useContext(AuthProvider)
    let history = useNavigate()
    // if (id == "" || id == undefined) {
    //     history('/')
    // }
    return (
        <div className="Homepage">
            <header className="homepage-button">
                <img src={obra_prima} alt="obra_prima_logo" className="obra_prima_logo-header w-20 ml-2"/>
                <button className="logoff-button mx-2 px-8 py-2 rounded-xl ">SAIR</button>
            </header>
        </div>
    );
}

export default Homepage;