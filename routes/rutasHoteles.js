//espacio para definir las rutas 
//o endpoints especificos de SU API
import express from "express";
import { ControladorHabitacion } from "../controllers/ControladorHabitacion.js";
import { ControladorReservas } from "../controllers/ControladorReservas.js";

let controladorHabitacion=new ControladorHabitacion
let controladorReservas=new ControladorReservas
export let rutasAPI=express.Router()

//ACA PONE SUS ENDPOINTS 
rutasAPI

    .post("/api/habitaciones",controladorHabitacion.registrar)

    .get("/api/habitaciones",controladorHabitacion.bucarTodas)

    .get("/api/habitacion/:id",controladorHabitacion.buscarPorId)

    .put("/api/habitaciones/:id",controladorHabitacion.modificar)

    .delete("/api/habitaciones/:id",controladorHabitacion.eliminar)

    .post("/api/reservas",controladorReservas.registrar)

    .get("/api/reservas",controladorReservas.bucarReservas)

    .get("/api/reserva/:id",controladorReservas.ReservasPorId)

    .put("/api/reservas/:id",controladorReservas.modificar)

    .delete("/api/reserva/:id",controladorReservas.eliminar)

