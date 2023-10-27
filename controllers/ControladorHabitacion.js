import { ServicioHabitacion } from "../services/ServicioHabitacion.js"
export class ControladorHabitacion{
    constructor() {}

   async bucarTodas(request,response){
        try {
            let servicioHabitacion=new ServicioHabitacion()
 
        response.status(200).json({
          "estado":true,
          "mensaje": "Exito Buscando Las Habitaciones",
          "datos":await servicioHabitacion.buscarTodas()
        })
        }
        catch(error){
            response.status(400).json({
                "estado":false,
                "mensaje": "Fallamos Buscando las habitaciones",
                "datos":null })

        }
    }
    async buscarPorId(request,response){
        try {
            let servicioHabitacion=new ServicioHabitacion()
         
        //Hay que recibir datos(si)
        let id=request.params.id    
        //2.Con  el id que me mando el cliente busco la habitacion en BD
        //3.respuesta
        response.status(200).json({
            "estado":true,
            "mensaje": "Exito Buscando La habitacion",
            "datos":await servicioHabitacion.buscarPorId(id)
          })

        }
        catch(error){
            response.status(400).json({
                "estado":false,
                "mensaje": "Fallamos Buscando las habitaciones" +error,
                "datos":null })

        
            
        }
    }
    async modificar(request,response){
        try {
            let servicioHabitacion=new ServicioHabitacion()
            //1.hay que recibir datos (si)
            let id=request.params.id
            let datosModificar=request.body
           const result= await servicioHabitacion.modificar(id,datos) //Estos
            //2.modificar en DB
            //3.enviar respuesta
            response.status(200).json({
                "estado":true,
                "mensaje": "Exito Buscando La habitacion",
                "datos":await result.json()
              })
            

        }
        catch(error){
            
            response.status(400).json({
                "estado":false,
                "mensaje": "Fallamos modificando las habitaciones" +error,
                "datos":null })
            
        }
    }
    async registrar(request,response){
        try {
            let servicioHabitacion=new ServicioHabitacion()
            //1.hay que recibir datos (si)
            let datosRegistrar=request.body
          
            await servicioHabitacion.registrar(datosRegistrar)

            //2.guardelos en la Db
            // await servicioHabitacion.registrar(datos)
            response.status(200).json({
                "estado":true,
                "mensaje": "Exito registrando la habitacion",
                
                "datos":datosRegistrar.precioNoche,
                "diferencia":"diferencia en dia calculada"
              })
             

        }
        catch(error){
            response.status(400).json({
                "estado":false,
                "mensaje": "Fallamos registrando la habitacion" +error,
                "datos":null })
            
        }
    }
   async eliminar(request,response){
        try {
            let servicioHabitacion=new ServicioHabitacion()
         //1 hay que recibir datos (Si)
         let id=request.params.id
         await servicioHabitacion.eliminar(id)
         //3.responda
         response.status(200).json({
            "estado":true,
            "mensaje": "Exito borrando  la habitacion",
            "datos":null
          })
        }
        catch(error){
            response.status(400).json({
                "estado":false,
                "mensaje": "Fallamos borrando la habitacion" +error,
                "datos":null })
        }
    }
} 