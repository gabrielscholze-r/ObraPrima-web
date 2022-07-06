import React, { useEffect, useState } from 'react';
import './index.css'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import API from '../../config/API';
import { useNavigate } from 'react-router-dom';

function RegisterProfessional() {
    const swal = withReactContent(Swal)
    const [Nome, setNome] = useState("")
    const [Email, setEmail] = useState("")
    const [CPF, setCPF] = useState("")
    const [description, setDescription] = useState("")
    const [Phone, setPhone] = useState("")
    const [Senha, setSenha] = useState("")
    const [ramo, setRamo] = useState(0)
    let history = useNavigate()

    async function registerProfessional(){
        if(Nome == "" || Email == "" || CPF == "" || Phone == "" || Phone == null || Senha == "" || description==""){
           swal.fire({ icon: 'error', title: 'Ops...', text: 'Preencha todos os campos!' })
        }else{
            await API.post('professional', {
                name: Nome,
                email: Email,
                cpf: CPF,
                description: description,
                phone: Phone,
                branch: ramo,
                rating: 0,
                password: Senha
            }).catch(e => console.log(e))
            swal.fire({ icon: 'success', title: 'Parabéns!', text: 'Cadastro criado! Entre com seu email e senha.' })
            history('/Login')
        }
    }


    useEffect(() => {
        var cpfNew = CPF
        cpfNew = cpfNew.replace(/\D/g, '')
        setCPF(cpfNew)
    }
        , [CPF])
    return (
        <div className="RegisterCostumer">
            <h2 className="ramo_servico mt-1">NOME</h2>
            <input type="text" placeholder='Nome' className="name-register px-2 rounded-xl py-2 my-2" onChange={e => setNome(e.target.value)} value={Nome} />
            <h2 className="ramo_servico mt-1">EMAIL</h2>
            <input type="text" placeholder='Email' className="name-register px-2 rounded-xl py-2 my-2" onChange={e => setEmail(e.target.value)} value={Email} />
            <h2 className="ramo_servico mt-1">CPF</h2>
            <input type="text" placeholder='CPF' className="name-register px-2 rounded-xl py-2 my-2" maxlength="11" onChange={e => setCPF(e.target.value)} value={CPF} />
            <h2 className="ramo_servico mt-1">DESCRIÇÃO</h2>
            <textarea className='desciption rounded-xl p-1 my-2' name="description" rows="4" cols="50" placeholder='DESCRIÇÃO' maxLength="180" value={description} onChange={e => setDescription(e.target.value)}/>
            <h2 className="ramo_servico mt-1">TELEFONE</h2>
            <input type="number" placeholder='Telefone' className="name-register px-2 rounded-xl py-2 my-2" maxlength="11" onChange={e => setPhone(e.target.value)} value={Phone} />
            <h2 className="ramo_servico mt-1">SENHA</h2>
            <input type="password" placeholder='Senha' className="name-register px-2 rounded-xl py-2 my-2" maxlength="11" onChange={e => setSenha(e.target.value)} value={Senha} />
            <br/>
            <h2 className="ramo_servico mt-1">RAMO DE SERVIÇO</h2>
            <select className="branch-selector p-2 rounded-xl my-2" value={ramo} onChange={e => {setRamo(e.target.value)}}>
                <option value="0">ELETRICISTA</option>
                <option value="1">PEDREIRO</option>
                <option value="2">MARCENEIRO</option>
                <option value="3">ENCANADOR</option>
            </select>
            <br/>
            <button className="px-5 py-2 register-button-active rounded-xl mt-1" onClick={() => registerProfessional()}>CADASTRAR</button>

        </div>
    );
}

export default RegisterProfessional;