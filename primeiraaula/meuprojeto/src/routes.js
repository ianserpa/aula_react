import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Cadastro from './paginas/Cadastro';
import CadastroCliente from './paginas/CadastroCliente';
import Login from './paginas/Login';
import Perfil from './paginas/Perfil';
import Teste from './paginas/Teste';
import ListaPerfil from './paginas/ListaPerfil';
import Funcionario from './paginas/CadastroFuncionario';
import Veiculo from './paginas/CadastroVeiculo';
import Usuarios from './paginas/Usuarios';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/cadastro" exact={true} component={Cadastro}/>
                <Route path="/perfil" exact={true} component={Perfil}/>
                <Route path="/teste" exact={true} component={Teste}/>
                <Route path="/listaperfil" exact={true} component={ListaPerfil}/>
                <Route path="/cadastrar" exact={true} component={CadastroCliente}/>
                <Route path="/cadastrar-func" exact={true} component={Funcionario}/>
                <Route path="/cadastrar-veic" exact={true} component={Veiculo}/>
                <Route path="/usuarios" exact={true} component={Usuarios}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;