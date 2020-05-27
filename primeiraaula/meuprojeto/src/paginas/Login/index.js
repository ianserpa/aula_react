import React, { useState } from 'react';
import './style.css';
import login from './../../imagens/login.png';
import {Link, useHistory} from 'react-router-dom';
import {BsPeopleCircle, BsBoxArrowInRight} from "react-icons/bs";

document.title = 'Projeto do ianzera'

function Login(){       //função deve ser com msm nome do componente
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    function handleLogin(e){
        e.preventDefault();

        console.log(email);
        console.log(password);

        localStorage.setItem('email', email);

        history.push('/perfil');
    }


    return(
        <div className="login-container">
            <form className="form" onSubmit={handleLogin}>
                <h1>Login no Sistema</h1>
                <img src={login}/><br/><br/>
                <input type="email" value={email} 
                    onChange={ e => setEmail(e.target.value) }
                    placeholder="Digite o e-mail"/>
                <br/><br/>
                <input type="password" value={password} 
                    onChange={ e => setPassword(e.target.value) }
                    placeholder="Digite a senha"/>
                <br/><br/>
                <button className="botao" type="submit"><BsBoxArrowInRight size={17}/>  Logar</button>
                
                <br/><br/><br/>
                <Link to="/cadastro"><button type="button"><BsPeopleCircle size={18}/>  Cadastre-se</button></Link>
            </form>
        </div>

    );
}

export default Login;      //exportar para "utilizar"