//Aqui Estoy Importando La Herramienta
const express = require('express')
const app = express()

//Atendiendo  Peticiones
app.post('/api/habitaciones', function (req, res) {
    res.send('estoy guardando una habitacion')
  })
  app.get('/api/habitaciones', function (req, res) {
    res.send('estoy buscando todas las habitaciones')
  })
  app.get('/api/habitacion', function (req, res) {
    res.send('estoy buscando una habitacion')
  })
  app.put('/api/habitaciones', function (req, res) {
    res.send('estoy modificando una habitacion')
  })
  app.delete('/api/habitaciones', function (req, res) {
    res.send('estoy eliminando una habitacion')
  })
          
//Levantando Un Servidor
app.listen(3000,function(){
    console.log("Servidor operando")
}) 