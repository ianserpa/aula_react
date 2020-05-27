const express = require('express');
const routes = express.Router();
const connection = require('./database/connection');
const crypto = require('crypto'); //08-05

routes.post('/usuario/', async (request, response) =>{
    const {nome, email, senha} = request.body;
    const id = crypto.randomBytes(4).toString('HEX');
    await connection('usuario').insert({
        id,
        nome,
        email,
        senha
    })
        return response.send("Usuario "+nome+" cadastrado.");
    });

    routes.get('/usuario/', async (request, response) => {
        const usuarios = await connection('usuario').select('*');
        return response.json(usuarios);
    });
    
    routes.delete('/usuario/:id', async (request, response) => {
        const {id} = request.params;
    
        await connection('usuario').where('id', id).delete();
    
        return response.status(204).send();
    });    

routes.post('/cliente/', async (request, response) =>{
        // receber os parametros da requisição
        const {nome, cnpj} = request.body;
        const id = crypto.randomBytes(4).toString('HEX'); //08-05
        //inserir os dados no banco de dados
        await connection('cliente').insert({
            id,
            nome,
            cnpj
        })
            return response.send("Cliente >"+nome+"< cadastrado.");
});

routes.post('/funcionario/', async (request, response) =>{
    // receber os parametros da requisição
    const {nome, empresa} = request.body; //12-05
    const id = crypto.randomBytes(4).toString('HEX'); //12-05
    await connection('funcionario').insert({
        id,
        nome,
        empresa
    })
        return response.send("Funcionario >"+nome+"< cadastrado.");
});

routes.post('/veiculos/', async (request, response) =>{
    // receber os parametros da requisição
    const {placa, modelo, modelo_comp} = request.body;  
    //inserir os dados no banco de dados
    await connection('veiculos').insert({
        placa,
        modelo,
        modelo_comp
    })
        return response.send("Veiculo com placa >"+placa+"< cadastrado.");
    });

    routes.get('/usuario/', async (request, response) =>{
        const usuarios = await connection('usuario').select('*');
        return response.json(usuarios);       
    });

module.exports = routes;