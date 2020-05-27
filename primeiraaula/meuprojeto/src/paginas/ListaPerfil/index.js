import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import {FaTrash,FaUserEdit} from 'react-icons/fa';

function ListaPerfil(){
    const history = useHistory();
    return(
        <div className="perfil-container">
           <li>
                <ul>Nome: Wesley Gebber</ul>
                
                <button type="submit"><FaUserEdit size={11}/> Editar</button>
                <button type="submit"><FaTrash size={11}/> Excluir</button>
           </li>
           <br/>
           <li>
                <ul>Nome: Cassandra Bels</ul>
                
                <button type="submit"><FaUserEdit size={11}/> Editar</button>
                <button type="submit"><FaTrash size={11}/> Excluir</button>
           </li>
           <br/>
           <li>
                <ul>Nome: Edmond Ruber</ul>
                
                <button type="submit"><FaUserEdit size={11}/> Editar</button>
                <button type="submit"><FaTrash size={11}/> Excluir</button>
           </li>
           <br/>
           <li>
                <ul>Nome: Alter Keston</ul>
                
                <button type="submit"><FaUserEdit size={11}/> Editar</button>
                <button type="submit"><FaTrash size={11}/> Excluir</button>
           </li>
        </div>
    );

}

export default ListaPerfil;