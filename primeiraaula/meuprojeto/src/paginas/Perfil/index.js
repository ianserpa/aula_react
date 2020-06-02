import React from 'react';
import './style.css';
import avatar from './../../imagens/avatar.png';
import {Link, useHistory} from 'react-router-dom';
import {BsPeopleCircle} from "react-icons/bs";
import {AiOutlinePoweroff} from "react-icons/ai";

function Perfil(){
    const history = useHistory();
    function clearCache(){    
        localStorage.clear();
        history.push('/');
    }

    return(
        <div className="perfil-container">
            <form className="form">
                <h1>PERFIL</h1>
                <img src={avatar}/><br/><br/>
                <input type="text" placeholder={localStorage.getItem('email')} readOnly/><br/><br/>
                
                <Link to="/cadastro"><button type="button"><BsPeopleCircle size={18}/>  Acessar tela de Cadastros</button></Link>
                <Link to="/usuarios"><button type="button"><BsPeopleCircle size={18}/>  Usuários cadastrados</button></Link>
            </form>
            <br/>
            <button type="submit" onClick={clearCache}><AiOutlinePoweroff size={14}/>  Logout</button>
        </div>
    );
}

export default Perfil;