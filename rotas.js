const express = require("express");

const routes = express.Router();

let = lista [
    {
    "id": 1,
    "descricao": "Camiseta",
    "preco": 29.99,
    "cores": ["preto", "branco", "cinza"]
    },
    {
    "id": 2,
    "descricao": "Calça Jeans",
    "preco": 79.99,
    "cores": ["azul claro", "azul escuro"]
    },
    {
    "id": 3,
    "descricao": "Tênis Esportivo",
    "preco": 149.99,
    "cores": ["preto", "branco", "cinza", "azul"]
    },
    {
    "id": 4,
    "descricao": "Jaqueta de Couro",
    "preco": 99.99,
    "cores": ["preto", "marrom"]
    }]

routes.get("/",(req,res)=>{
    res.status(200).json(lista)
});

routes.get("/:id",(req,res)=>{
    res.status(200).json(lista[req.params.id-1])
});

routes.post("/",(req,res)=>{
    res.status(200).json("Adicionando um novo item: ")
})

routes.put("/:id",(req,res)=>{
    res.status(200).json("Atualizar os dados do conjunto correspondentes ao ID informado: "[req.params.id])
})

routes.delete("/:id",(req,res)=>{
    lista.splice(req.params.id-1,1);
    res.status(200).redirect("/")
})

module.exports = routes;
