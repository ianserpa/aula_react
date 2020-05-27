import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Cadastro from './../meuprojeto/src/paginas/Cadastro/index';
import Login from './paginas/Login';
import Perfil from './paginas/Perfil';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route patch="/" exact={true} component={Login}/>
                <Route patch="/cadastrar" exact={true} component={Cadastro}/>
                <Route patch="/perfil" exact={true} component={Perfil}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;