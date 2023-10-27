import {modeloReserva} from '../models/modeloReservas.js'
 export class ServicioReserva{

    constructor(){}
    
   async bucarReservas(){
    let reservas = await modeloReserva.find()
        return reservas
   }
   async ReservasPorId(id){
    let reserva =await modeloReserva.findById(id)
    return reserva
   }
   async modificar(id,datos){
    return await modeloReserva.findByIdAndUpdate(id,datos)
   }
   async registrar(datos){
    let reservaNueva = modeloReserva(datos)
        return await  reservaNueva.save()
    
   }
   async  eliminar(id){
    return await modeloReserva.findByIdAndDelete(id)
   }
    
}