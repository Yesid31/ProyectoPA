//espacio para definir las rutas 
//o endpoints especificos de SU API
import express from "express";

export let rutasAPI=express.Router()

//ACA PONE SUS ENDPOINTS 
rutasAPI.post("/api/habitaciones", function (req, res) {
    res.send("estoy guardando una habitacion");
})
rutasAPI.get("/api/habitaciones", function (req, res) {
    res.send("estoy buscando todas las habitaciones");
})
rutasAPI.get("/api/habitacion", function (req, res) {
    res.send("estoy buscando una habitacion");
})
rutasAPI.put("/api/habitaciones", function (req, res) {
    res.send("estoy modificando una habitacion");
})
rutasAPI.delete("/api/habitaciones", function (req, res) {
    res.send("estoy eliminando una habitacion");
})
rutasAPI.post("/api/reservas", function (req, res) {
    res.send("estoy guardando una reserva");
})
rutasAPI.get("/api/reservas", function (req, res) {
    res.send("estoy buscando todas las reservas");
})
rutasAPI.get("/api/reserva", function (req, res) {
    res.send("estoy buscando una reserva");
})
rutasAPI.put("/api/reservas", function (req, res) {
    res.send("estoy modificando una reserva");
})
rutasAPI.delete("/api/reserva", function (req, res) {
    res.send("estoy eliminando una reserva");
});

