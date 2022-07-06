import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import API from '../../config/API';
import './index.css'
import { useNavigate } from 'react-router-dom';



function RegisterCostumer() {
    const swal = withReactContent(Swal)
    const [Nome, setNome] = useState("")
    const [Email, setEmail] = useState("")
    const [CPF, setCPF] = useState("")
    const [Phone, setPhone] = useState("")
    const [Senha, setSenha] = useState("")
    let history = useNavigate()

    useEffect(() => {
        var cpfNew = CPF
        cpfNew = cpfNew.replace(/\D/g, '')
        setCPF(cpfNew)
    }
        , [CPF])

    async function register() {
        if (Nome == "" || Email == "" || CPF == "" || Phone == "" || Phone == null || Senha == "") {
            swal.fire({ icon: 'error', title: 'Ops...', text: 'Preencha todos os campos!' })
        } else {
            await API.post('costumer', {
                name: Nome,
                email: Email,
                cpf: CPF,
                phone: Phone,
                password: Senha
            }).catch(e => console.log(e))
            swal.fire({ icon: 'success', title: 'Parabéns!', text: 'Cadastro criado! Entre com seu email e senha.' })
            history('/Login')
        }
    }
    return (
        <div className="RegisterCostumer">
            <h2 className="ramo_servico mt-2">NOME</h2>
            <input type="text" placeholder='Nome' className="name-register px-2 rounded-xl py-2 my-2" onChange={e => setNome(e.target.value)} value={Nome} />
            <h2 className="ramo_servico mt-1">EMAIL</h2>
            <input type="text" placeholder='Email' className="name-register px-2 rounded-xl py-2 my-2" onChange={e => setEmail(e.target.value)} value={Email} />
            <h2 className="ramo_servico mt-1">CPF</h2>
            <input type="text" placeholder='CPF' className="name-register px-2 rounded-xl py-2 my-2" maxLength="11" onChange={e => setCPF(e.target.value)} value={CPF} />
            <h2 className="ramo_servico mt-1">TELEFONE</h2>
            <input type="number" placeholder='Telefone' className="name-register px-2 rounded-xl py-2 my-2" maxLength="11" onChange={e => setPhone(e.target.value)} value={Phone} />
            <h2 className="ramo_servico mt-1">SENHA</h2>
            <input type="password" placeholder='Senha' className="name-register px-2 rounded-xl py-2 my-2" maxLength="11" onChange={e => setSenha(e.target.value)} value={Senha} />
            <br />
            <button className="px-5 py-2 register-button-active rounded-xl mt-1" onClick={() => { register() }}>CADASTRAR</button>

        </div>
    );
}

export default RegisterCostumer;