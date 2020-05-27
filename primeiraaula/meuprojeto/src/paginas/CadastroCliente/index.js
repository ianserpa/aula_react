import React, {useState} from "react";
import './style.css';
import cadastrar from './../../imagens/cadastrar.png';
import api from '../services/api';
import {Link} from 'react-router-dom';
import {FaBriefcase} from "react-icons/fa";
import {BsBoxArrowInRight} from "react-icons/bs";
import {FaCar} from "react-icons/fa";
import {AiOutlinePoweroff} from "react-icons/ai";

function Cadastro(){

    const [nome, setNome] = useState('');
    const [cnpj, setCnpj] = useState('');

    async function handleCadastro(e){
        e.preventDefault(); //inicializar no estado inicial

        const data={
            nome,
            cnpj
        };

    try {
        const response = await api.post('cliente',data);
        alert('Cliente cadastrado com sucesso!');
    }catch(error){
        alert('Erro no cadastro');
    }

    }

    return(
        <div className="cadastro-container">
            <h1>Cadastro de Clientes</h1>
            <img src={cadastrar}/><br/><br/>
            <form onSubmit={handleCadastro}>
                <input type="text" required placeholder="Nome do Cliente" 
                    value={nome} onChange={e => setNome(e.target.value)} 
                /><br/><br/>
                <input type="number" required placeholder="CNPJ do Cliente" 
                    value={cnpj} onChange={e => setCnpj(e.target.value)} 
                /><br/><br/>
            <button className="botao" type="submit"><BsBoxArrowInRight size={17}/>Cadastrar</button>
            <br/><br/>
            <Link to="/cadastrar-func"><button type="button"><FaBriefcase size={18}/>  Cadastro de Funcionários</button></Link>
            <br/><br/>
            <Link to="/cadastrar-veic"><button type="button"><FaCar size={18}/>  Cadastro de Veículos</button></Link>
            </form>
            <br/><br/>
            <Link to="/"><button className="botao" type="button"><AiOutlinePoweroff size={17}/>  Sair do sistema</button></Link>
        </div>
    );
}

export default Cadastro;