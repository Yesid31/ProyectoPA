import { ServicioReserva } from "../services/ServicioReserva.js"
export class ControladorReservas{
    constructor() {}

    async bucarReservas(request,response){
        try {
            let servicioReserva=new ServicioReserva()
            
                //1.Hay que recibir datos
                //2.Intentare Conectarme a BD
                //3.Envio La Respuesta 
                response.status(200).json({
                  "estado":true,
                  "mensaje": "Exito Buscando Las Reservas",
                  "datos":await servicioReserva.bucarReservas() 
                })
                }
                catch(error){
                    response.status(400).json({
                        "estado":false,
                        "mensaje": "Fallamos Buscando las reservas" +error,
                        "datos":null })
        
                }
        }

        async    ReservasPorId(request,response){
        try {
            let servicioReserva=new ServicioReserva()
            //Hay que recibir datos(si)
        let id=request.params.id    
        //2.Con  el id que me mando el cliente busco la habitacion en BD
        //3.respuesta
        response.status(200).json({
            "estado":true,
            "mensaje": "Exito Buscando La Reserva",
            "datos":await servicioReserva.ReservasPorId(id)
          })
        }
        catch(error){
            response.status(400).json({
                "estado":false,
                "mensaje": "Fallamos Buscando las reservas" +error,
                "datos":null })

        }
    }
    async  modificar(request,response){
        try {
            let servicioReserva=new ServicioReserva()
              //1.hay que recibir datos (si)
              let id=request.params.id
              let datosModificar=request.body
              const result= await servicioReserva.modificar(id,datos)
              //2.modificar en DB
              //3.enviar respuesta
              response.status(200).json({
                  "estado":true,
                  "mensaje": "Exito Buscando La Reserva",
                  "datos":await result.json()
                })

        }
        catch(error){
            response.status(400).json({
                "estado":false,
                "mensaje": "Fallamos modificando las reservas" +error,
                "datos":null })
            
        }
    }
    async registrar(request,response){
        try {
            let servicioReserva=new ServicioReserva()
              //1.hay que recibir datos (si)
              let datosRegistrar=request.body
              //2.guardelos en la Db
              //3.Responda
              await servicioReserva.registrar(datos)
              response.status(200).json({
                  "estado":true,
                  "mensaje": "Exito registrando la reserva",
                  "datos":"aca van los datos",
                  "diferencia":"diferencia en dia calculada"
                })

        }
        catch(error){
            response.status(400).json({
                "estado":false,
                "mensaje": "Fallamos registrando la reserva" +error,
                "datos":null })
            
        }
    }
    async eliminar(request,response){
        try {
            let servicioReserva=new ServicioReserva()
             //1 hay que recibir datos (Si)
         let id=request.params.id
         await servicioReserva.eliminar(id)
         //eliminarlo de la DB
         //3.responda
         response.status(200).json({
            "estado":true,
            "mensaje": "Exito borrando  la reserva",
            "datos":null
          })

        }
        catch(error){
            response.status(400).json({
                "estado":false,
                "mensaje": "Fallamos borrando la reserva" +error,
                "datos":null })
            
        }
    }

    

}
