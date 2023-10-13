export class ControladorHabitacion{
    constructor() {}

    bucarTodas(request,response){
        try {
        //1.Hay que recibir datos
        //2.Intentare Conectarme a BD
        //3.Envio La Respuesta 
        response.status(200).json({
          "estado":true,
          "mensaje": "Exito Buscando Las Habitaciones",
          "datos":"ACA VAN LOS DATOS DE LA DB" 
        })
        }
        catch(error){
            response.status(400).json({
                "estado":false,
                "mensaje": "Fallamos Buscando las habitaciones",
                "datos":null })

        }
    }
    buscarPorId(request,response){
        try {
         
        //Hay que recibir datos(si)
        let id=request.params.id    
        //2.Con  el id que me mando el cliente busco la habitacion en BD
        //3.respuesta
        response.status(200).json({
            "estado":true,
            "mensaje": "Exito Buscando La habitacion",
            "datos":"ACA VAN LOS DATOS DE LA DB" 
          })

        }
        catch(error){
            response.status(400).json({
                "estado":false,
                "mensaje": "Fallamos Buscando las habitaciones" +error,
                "datos":null })

        
            
        }
    }
    modificar(request,response){
        try {
            //1.hay que recibir datos (si)
            let id=request.params.id
            let datosModificar=request.body
            //2.modificar en DB
            //3.enviar respuesta
            response.status(200).json({
                "estado":true,
                "mensaje": "Exito Buscando La habitacion",
                "datos":null
              })
            

        }
        catch(error){
            
            response.status(400).json({
                "estado":false,
                "mensaje": "Fallamos modificando las habitaciones" +error,
                "datos":null })
            
        }
    }
    registrar(request,response){
        try {
            //1.hay que recibir datos (si)
            let datosRegistrar=request.body
            //2.guardelos en la Db
            //3.Responda
            response.status(200).json({
                "estado":true,
                "mensaje": "Exito registrando la habitacion",
                "datos":null
              })

        }
        catch(error){
            response.status(400).json({
                "estado":false,
                "mensaje": "Fallamos registrando la habitacion" +error,
                "datos":null })
            
        }
    }
    eliminar(request,response){
        try {
         //1 hay que recibir datos (Si)
         let id=request.params.id
         //eliminarlo de la DB
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