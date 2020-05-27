import React, {useState} from "react";
import './style.css';
import func from './../../imagens/func.png';
import api from '../services/api';
import {Link} from 'react-router-dom';
import {BsPersonPlusFill, BsBoxArrowInRight} from "react-icons/bs";
import {FaCar} from "react-icons/fa";
import {AiOutlinePoweroff} from "react-icons/ai";

function Cadastro(){

    const [nome, setNome] = useState('');
    const [empresa, setEmpresa] = useState('');

    async function handleCadastro(e){
        e.preventDefault(); //inicializar no estado inicial

        const data={
            nome,
            empresa
        };

    try {
        const response = await api.post('funcionario',data);
        alert('Funcionario cadastrado com sucesso!');
    }catch(error){
        alert('Erro no cadastro');
    }

    }

    return(
        <div className="cadastro-containerFunc">
            <h1>Cadastro de Funcionários</h1>
            <img src={func}/><br/><br/>
            <form onSubmit={handleCadastro}>
                <input type="text" required placeholder="Nome do Funcionário" 
                    value={nome} onChange={e => setNome(e.target.value)} 
                /><br/><br/>
                <input type="text" required placeholder="Empresa do Funcionário" 
                    value={empresa} onChange={e => setEmpresa(e.target.value)} 
                /><br/><br/>
            <button className="botao" type="submit"><BsBoxArrowInRight size={17}/>Cadastrar</button>
            <br/><br/>
            <Link to="/cadastrar"><button type="button"><BsPersonPlusFill size={20}/>  Cadastro de Clientes</button></Link>
            <br/><br/>
            <Link to="/cadastrar-veic"><button type="button"><FaCar size={18}/>  Cadastro de Veículos</button></Link>

            <br/><br/><br/>
            <Link to="/"><button className="botao" type="button"><AiOutlinePoweroff size={17}/>  Sair do sistema</button></Link>
            </form>
        </div>
    );
}

export default Cadastro;