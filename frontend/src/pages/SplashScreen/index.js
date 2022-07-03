import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import obraPrima from '../../assets/obra_prima.png';
import AuthProvider from '../../config/AuthContext';
import './index.css'

function SplashScreen() {
  const [id, setID] = useContext(AuthProvider)
    let history = useNavigate()
    if(id!="" && id!=undefined){
        history('/Home')

    }
  return (
    <div className="splashscreen">

      <img src={obraPrima} alt="obraprima_logo" className="obra_prima_logo w-72 m-auto my-5" />
      <div className="aux-div">

      
      <div className="splashPage mx-auto my-4 p-12 rounded-xl px-20">
        <h1 className="description mb-5">Encontre ou  ofereça os melhores serviços!</h1>
        <button className="login-button px-8 py-2 text-4xl rounded-xl mx-5" onClick={() => {history('/Login')}}>
          <p className="login-text">
            Entrar
          </p>

        </button>
        <button className="register-button px-8 py-2 text-4xl rounded-xl" onClick={() => {history('/Register')}}>
          <p className="login-text">
            Registrar
          </p>

        </button>
      </div>
      </div>

    </div>
  );
}

export default SplashScreen;