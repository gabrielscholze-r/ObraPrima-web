import React, { useContext, useState } from 'react';
import './index.css'
import obraPrima from '../../assets/obra_prima.png';
import AuthProvider from '../../config/AuthContext';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import API from '../../config/API'


function Login() {
  const swal = withReactContent(Swal)
  const [email, setEmail] = useState("")
  const [password, setSenha] = useState("")
  const [id, setID] = useContext(AuthProvider)
  let history = useNavigate()
  if (id != "" && id != undefined) {
    history('/Home')
  }
  async function login() {
    if (email=="" || password == ""){
      swal.fire({icon: 'error',title: 'Ops...',text: 'Forneça email e senha!!'})
    }
    else{
      console.log(email)
      console.log(password)
      var isAuthenticated = await API.post('costumer/auth',{
        email, 
        password
      })
      console.log(isAuthenticated.data.result)
      if(isAuthenticated.data.result){
        swal.fire({icon:'success',title: 'LOGOU!',text: 'Você está autenticado!!'})
        setID(email)
        history('/Home')
      }else{
        swal.fire({icon: 'error',title: 'Ops...',text: 'Email ou senha incorretos!!'})
      }
    }
  }


  return (
    <div className="Login">
      <header className="login-header">
        <img src={obraPrima} alt="obraprima_logo" className="obra_prima_logo-header w-20 ml-2" />
        <button className="mr-2 home-button px-5 py-2 rounded-xl" onClick={() => { history('/') }}>VOLTAR</button>
      </header>
      <div className="login-container p-8 rounded-xl mx-auto">
        <h1 className="login-title">ENTRAR</h1>
        <input type="text" className="login-username-input rounded-xl px-2 py-1 my-5 mx-auto mt-10" placeholder='&#xf0e0; Email' onChange={e => { setEmail(e.target.value) }} value={email} />
        <input type="password" className="login-username-input rounded-xl px-2 py-1 my-5 mx-auto" placeholder='&#61475; Senha' onChange={e => { setSenha(e.target.value) }} value={password} />
        <button className="log-in-button mx-auto rounded-xl py-2 mt-10" onClick={() => { login() }}>ENTRAR</button>
        <p className="my-4 go_register_text">
          NÃO POSSUI CONTA? <button className="go-register-button" onClick={() => { history('/Register') }}>REGISTRE AQUI!</button>
        </p>
      </div>
    </div>
  );
}

export default Login;