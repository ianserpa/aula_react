import React, { useState, useEffect } from 'react';
import './style.css';
import api from '../services/api';

function Usuario() {
    const [usuarios, setUsuarios] = useState([]);

    async function handleDeleteUsuario(id) {
        try {
            await api.delete(`usuario/${id}`, {});
            setUsuarios(usuarios.filter(usuario => usuario.id !== id));
        } catch (error) {
            alert('Erro ao deletar usuário');
        }
    }

    useEffect(() => {
        api.get('usuario',{}).then(response => {
            setUsuarios(response.data);
        });
    }, []);

    return (
        <div className="container">
            <h1>Usuários</h1>
            <p>Total de Usuários: {usuarios.length}</p>
                <ul>
                    {usuarios.map(usuario => (
                        <li>
                            <p>Usuario: {usuario.id}</p>
                            <p>Nome: {usuario.nome}</p>
                            <p>Telefone: {usuario.telefone}</p>
                            <p>E-mail: {usuario.email}</p>
                            <button type="button" onClick={() => handleDeleteUsuario(usuario.id)}>Excluir</button>
                        </li>
                        ))
                    }
                </ul>
        </div>
    );
}

export default Usuario;