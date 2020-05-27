import './style.css';
import React, {useState} from "react";
import cadastro from './../../imagens/cadastro.png';
import api from '../services/api';
import {Link} from 'react-router-dom';
import {BsPersonPlusFill, BsBoxArrowInRight} from "react-icons/bs";
import {FaBriefcase, FaCar} from "react-icons/fa";
import {AiOutlinePoweroff} from "react-icons/ai";

function Cadastro(){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function handleCadastro(e){
        e.preventDefault(); //inicializar no estado inicial

        const data={
            nome,
            email,
            senha
        };

    try {
        const response = await api.post('usuario',data);
        alert('Usuário criado com sucesso!');
    }catch(error){
        alert('Erro no cadastro');
        }
    }

    return(
        <div className="cadastro-container">
            <h1>Cadastro de Usuários</h1>
            <img src={cadastro}/><br/><br/>
            <form onSubmit={handleCadastro}>
                <input type="text" placeholder="Nome do usuário" 
                    value={nome} required onChange={e => setNome(e.target.value)} 
                /><br/><br/>
                <input type="text" placeholder="E-mail do usuário" 
                    value={email} required onChange={e => setEmail(e.target.value)} 
                /><br/><br/>
                <input type="password" placeholder="Senha do usuário" 
                    value={senha} required onChange={e => setSenha(e.target.value)} 
                /><br/><br/>
            <button className="botao" type="submit"><BsBoxArrowInRight size={17}/>Cadastrar</button>

            <br/><br/>
            <Link to="/cadastrar"><button type="button"><BsPersonPlusFill size={17}/>  Cadastro de Cliente</button></Link>
            <br/><br/>
            <Link to="/cadastrar-func"><button type="button"><FaBriefcase size={16}/>  Cadastro de Funcionários</button></Link>
            <br/><br/>
            <Link to="/cadastrar-veic"><button type="button"><FaCar size={16}/>  Cadastro de Veículos</button></Link>
            </form>
            <br/><br/>
            <Link to="/"><button className="botao" type="button"><AiOutlinePoweroff size={15}/>  Sair do Sistema</button></Link>
        </div>
    );
}

export default Cadastro;