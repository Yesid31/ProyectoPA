import { Api } from './Api.js'
import 'dotenv/config'


let servidor =new Api() //Creando Un Objeto De La Clase Api

//Levantamos el servidor
servidor.levantarServidor()
