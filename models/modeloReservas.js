import mongoose from "mongoose";

const Schema=mongoose.Schema

const Reserva=new Schema({

    nombre:{
        type:String,
        require:true
    },
    apellido:{
        type:String,
        require:true
    },
    telefono:{
        type:Number,
        require:true},
    fechainicioreserva:{
        type:Date,
        require:true
    },
    fechafinalreserva:{
        type:Date,
        require:true
    },
    numerodepersonas:{
        type:Number,
        require:true
    }
})

export const modeloReserva=mongoose.model('resevas',Reserva)