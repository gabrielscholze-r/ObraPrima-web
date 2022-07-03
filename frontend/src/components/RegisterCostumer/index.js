import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './index.css'


function RegisterCostumer() {
    const swal = withReactContent(Swal)
    const [Nome, setNome] = useState("")
    const [Email, setEmail] = useState("")
    const [CPF, setCPF] = useState("")
    const [Phone, setPhone] = useState(null)
    const [Senha, setSenha] = useState("")
    useEffect(() => {
        var cpfNew = CPF
        cpfNew = cpfNew.replace(/\D/g, '')
        setCPF(cpfNew)
    }
        , [CPF])

    function register(){
        if(Nome=="" || Email == "" || CPF == "" || Phone == "" || Phone == null || Senha == ""){
            swal.fire({icon: 'error',title: 'Ops...',text: 'Preencha todos os campos!'})
        }
    }
    return (
        <div className="RegisterCostumer">
            <input type="text" placeholder='Nome' className="name-register px-2 rounded-xl py-2 my-2 mt-5" onChange={e => setNome(e.target.value)} value={Nome} />
            <input type="text" placeholder='Email' className="name-register px-2 rounded-xl py-2 my-2" onChange={e => setEmail(e.target.value)} value={Email} />
            <input type="text" placeholder='CPF' className="name-register px-2 rounded-xl py-2 my-2" maxlength="11" onChange={e => setCPF(e.target.value)} value={CPF} />
            <input type="number" placeholder='Telefone' className="name-register px-2 rounded-xl py-2 my-2" maxlength="11" onChange={e => setPhone(e.target.value)} value={Phone} />
            <input type="text" placeholder='Senha' className="name-register px-2 rounded-xl py-2 my-2" maxlength="11" onChange={e => setSenha(e.target.value)} value={Senha} />
            <br/>
            <button className="px-5 py-2 register-button-active rounded-xl mt-1" onClick={()=>{register()}}>CADASTRAR</button>

        </div>
    );
}

export default RegisterCostumer;