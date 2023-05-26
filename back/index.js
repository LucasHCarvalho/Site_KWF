const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://lucas:B6y8HFqmBxcaT976@cluster0.fpjirw6.mongodb.net/?retryWrites=true&w=majority";

const app = express();
app.use(bodyParser.urlencoded({'extended': false}));
app.use(bodyParser.json());
app.use(cors());

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const db = client.db('Corrida_KWF');

async function InputPiloto(nome, numero, posicao, categoria){
    const pilotos = db.collection("pilotos");
    const piloto = {nome: nome, numero: numero, posicao: posicao, categoria: categoria};
    await pilotos.insertOne(piloto);
}

async function SelectPilotos(res){
    const pilotos = db.collection("pilotos").find();
    let listaPilotos = [];
    for await (let piloto of pilotos){
        listaPilotos.push(piloto);
    }
    
    console.log("Listado");
    res.json(listaPilotos);
}

async function UpdatePiloto(id, nome ,numero, posicao, categoria){
    const pilotos = db.collection("pilotos");
    const filtro = { "_id" : new ObjectId(id)};
    const update = { "$set": { nome: nome, numero: numero, posicao: posicao, categoria: categoria }};
    await pilotos.updateOne(filtro, update);
}

async function DropPiloto(id){
    const pilotos = db.collection("pilotos");
    pilotos.findOneAndDelete({"_id" : new ObjectId(id)})
}

app.post('/pilotos', (req, res) => {
    const {nome, numero, posicao, categoria} = req.body;
    InputPiloto(nome, numero, posicao, categoria);
})

app.get('/pilotos', (req, res) => {
    SelectPilotos(res);
})

app.put('/pilotos', (req, res) => {
    const {id, nome, numero, posicao, categoria} = req.body;
    UpdatePiloto(id, nome, numero, posicao, categoria);
});

app.delete('/pilotos', (req, res) => {
    const {id} = req.body;
    DropPiloto(id);
})

app.listen(3000, () => {
    console.log("Servidor online na porta 3000");
})