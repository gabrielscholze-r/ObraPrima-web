import { color } from '@mui/system';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import obraPrima from '../../assets/obra_prima.png';
import RegisterComponent from '../../components/RegisterComponent';
import AuthProvider from '../../config/AuthContext';
import RegisterProvider from '../../config/ContextRegister';
import './index.css'

function Register() {
    const [id, setID] = useContext(AuthProvider)
    let history = useNavigate()
    if (id != "" && id != undefined) {
        history('/Home')

    }
    const [RegisterType, setType] = useContext(RegisterProvider)
    return (
        <div className="Register" style={(RegisterType == 0) ? { height: "100vh" } : { height: "100%" }}>
            <header className="login-header">
                <img src={obraPrima} alt="obraprima_logo" className="obra_prima_logo-header w-20 ml-2" />
                <button className="mr-2 home-button px-5 py-2 rounded-xl" onClick={() => { history('/') }}>VOLTAR</button>
            </header>
            <div className="register-container mx-auto rounded-xl py-3 px-2">
                <h1 className="register-title mb-4">CADASTRAR-SE</h1>
                <div className="flex mx-auto">
                    <h1 className="px-5 register-type-text max-h-max" style={(RegisterType == 0) ? { border: "2px solid #0c29d0", color: "#0c29d0" } : { border: "2px solid white", color: "black" }}
                        onClick={() => setType(0)}>CLIENTE</h1>
                    <h1 className="px-5 register-type-text max-h-max" style={(RegisterType == 1) ? { border: "2px solid #0c29d0", color: "#0c29d0" } : { border: "2px solid white", color: "black" }}
                        onClick={() => setType(1)}>PROFISSIONAL</h1>
                </div>
                <RegisterComponent />
            </div>
        </div>
    );
}

export default Register;