//const arg3 = process.argv.slice(2)[2]
/*import { Command } from "commander";

const program = new Command() //Crear un nuevo comando

program
    .option('-d', "Variable para el debug", false) //flag o referencia a lo ingresado - Descripcion - Valor por defecto
    .option('-p <port>', "Puerto del servidor", 4000)
    .option('--mode <mode>', "Modo de trabajo", 'production')
    .requiredOption('-u <user>', "Usuario de mi app", "No se ingreso ningun usuario") //Flag - Description - Mensaje de error
program.parse() //Finalizar la configuracion de mi programa

console.log(program.opts()) //Ver las opciones ingresadas
console.log(program.args) //Ver los argumentos ingresados

import config from './config.js'
console.log(config)*/

import express from 'express'
import { fork } from 'node:child_process'
import { sumar } from './calculoMate.js'
const app = express()

app.get("/suma", (req, res) => {
    const child = fork('./calculoMatematico.js') //Calcula la cantidad de hilos hijos que necesita para la ejecucion
    child.send("Ejecutate") //Enviar mensaje a mis hijos
    child.on('message', resultado => { //Cuando termina la ejecuon
        res.send(`${resultado}`)
    })

})

app.get("/sumaNormal", () => {
    const resultado = sumar()
    res.send(`${resultado}`)
})

app.get("/s", (req, res) => {
    res.send("Hola")
})

app.listen(4000, () => {
    console.log(`Server on port 4000`)
})