const express = require("express");

const routes = express.Router();

let lista = [
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
    res.status(200).json(lista) // MOSTRA A LISTA INTEIRA
});

routes.get("/:id",(req,res)=>{
    res.status(200).json(lista[req.params.id-1]) // MOSTRA OS ITEMS ID DA LISTA
});

routes.post("/",(req,res)=>{
    lista.push(req.body)
    res.status(200).redirect("/") // VAI PARA O INICIO DA PAGINA PARA MOSTRAR QUE ADICIONOU NOVO ITEM
})

routes.put("/:id",(req,res)=>{
    console.log(req.body)
    lista[req.params.id-1] = req.body
    res.status(200).redirect("/")
})

routes.delete("/:id",(req,res)=>{
    lista.splice(req.params.id-1,1);
    res.status(200).redirect("/") // Redirecionar para mostrar que tomou DELETE
})

module.exports = routes;
    