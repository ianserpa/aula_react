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
            <h3>Total de Usuários cadastrados: {usuarios.length}</h3>
                
                    {usuarios.map(usuario => (
                        <li>
                            <p>idUsuario: {usuario.id}</p>
                            <p>Nome: {usuario.nome}</p>
                            <p>E-mail: {usuario.email}</p>
                            <button type="button" onClick={() => handleDeleteUsuario(usuario.id)}>Excluir</button>
                        </li>
                        ))
                    }
                
        </div>
    );
}

export default Usuario;