import express from "express";
import { rutasAPI } from './routes/rutasHoteles.js'
import { establecerConexionBD } from "./database/conexion.js";

export class Api {

    constructor() {
        this.app = express()
        this.conectarBD()
        this.procesarPeticiones()

    }

    //1. Levantar  El Servidor 
    levantarServidor() {
        this.app.listen(3000, function () {
            console.log("Servidor operando");
        });

    }

    //2. Atender Las Peticiones Y Responde
    procesarPeticiones() {
        this.app.use(express.json())
       this.app.use("/",rutasAPI)
      

    }

    //3.Se Conecta A La Base De Datos
    conectarBD(){
        establecerConexionBD()
    }
}