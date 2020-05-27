import React, {useState} from "react";
import './style.css';
import veiculos from './../../imagens/veiculos.png';
import api from '../services/api';
import {Link} from 'react-router-dom';
import {BsPersonPlusFill, BsBoxArrowInRight} from "react-icons/bs";
import {FaBriefcase} from "react-icons/fa";
import {AiOutlinePoweroff} from "react-icons/ai";

function Cadastro(){

    const [placa, setPlaca] = useState('');
    const [modelo, setModelo] = useState('');
    const [modelo_comp, setModeloComp] = useState('');

    async function handleCadastro(e){
        e.preventDefault(); //inicializar no estado inicial

        const data={
            placa,
            modelo,
            modelo_comp
        };

    try {
        const response = await api.post('veiculos',data);
        alert('Veículo cadastrado com sucesso!');
    }catch(error){
        alert('Erro no cadastro');
    }

    }

    return(
        <div className="cadastro-containerVeic">
            <h1>Cadastro de Veículos</h1>
            <img src={veiculos}/><br/><br/>
            <form onSubmit={handleCadastro}>
                <input type="text" required placeholder="Placa do Veículo" 
                    value={placa} onChange={e => setPlaca(e.target.value)} 
                /><br/><br/>
                <input type="text" required placeholder="Modelo do Veículo" 
                    value={modelo} onChange={e => setModelo(e.target.value)} 
                /><br/><br/>
                <input type="text" required placeholder="Modelo Complementar" 
                    value={modelo_comp} onChange={e => setModeloComp(e.target.value)} 
                /><br/><br/>
            <button className="botao" type="submit"><BsBoxArrowInRight size={17}/>Cadastrar</button>
            <br/><br/>
            <Link to="/cadastrar"><button type="button"><BsPersonPlusFill size={20}/>  Cadastro de Clientes</button></Link>
            <br/><br/>
            <Link to="/cadastrar-func"><button type="button"><FaBriefcase size={18}/>  Cadastro de Funcionários</button></Link>
            <br/><br/><br/>
            <Link to="/"><button className="botao" type="button"><AiOutlinePoweroff size={17}/>  Sair do sistema</button></Link>
            </form>
        </div>
    );
}

export default Cadastro;