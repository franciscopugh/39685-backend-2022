
//import * as fs from 'fs'
//import fs from 'fs'
/*
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre
        this.apellido = apellido
        this.id = Persona.addId()
    }

    static addId() {
        if(this.idIncrement) { //Si no existe, retorna undefined
            this.idIncrement++ //Suma uno cada ejecucion
        } else {
            this.idIncrement = 1 //Definir propiedad si no existia
        }
        return this.idIncrement
    }
}

const persona1 = new Persona("Francisco", "Pugh")
const persona2 = new Persona("Francisco", "Pugh")
const persona3 = new Persona("Francisco", "Pugh")
const persona4 = new Persona("Francisco", "Pugh")

console.log(persona1)
console.log(persona2)
console.log(persona3)
console.log(persona4)

*/
//const fs = require('fs')
/*

//Sincronica
                //Ruta         //Valor
fs.writeFileSync('./ejemplo.txt', "Chau")

if(fs.existsSync('./ejemplo.txt')) { //array.some()
    let contenido = fs.readFileSync('./ejemplo.txt', 'utf-8') //Lectura de archivos de texto
    console.log(contenido)
    fs.appendFileSync('./ejemplo.txt', "\nBuenas noches") //\n salto de linea
    contenido = fs.readFileSync('./ejemplo.txt', 'utf-8') //Lectura de archivos de texto
    console.log(contenido)
    fs.unlinkSync('./ejemplo.txt')//Elimina archivo
} 

//Callbacks asincronicos

fs.writeFile('./ejemplo.txt', "Hola", (error) => {
    if(error) {
        return console.log("ERROR EN ESCRITURA")
    }
    fs.readFile('./ejemplo.txt', 'utf-8', (error, resultado) => {
        if(error) {
            return console.log("ERROR EN LECTURA 1")
        }
        console.log(resultado)
        fs.appendFile('./ejemplo.txt', "Buenas noches", (error) => {
            if(error) {
                return console.log("ERROR EN APPEND")
            }
            fs.readFile('./ejemplo.txt', 'utf-8', (error, resultado) => {
                if(error) {
                    return console.log("EROR EN LECTURA 2")
                }
                console.log(resultado)
                fs.unlink('./ejemplo.txt', (error) => {
                    if(error) {
                        return console.log("ERROR EN ELIMINACION")
                    }
                })
            })
        })
    })
})
*/
const fs = require('fs').promises
//import {promises as fs} from 'fs'
//Asincronica con promesas

const productos = [
    {
        id:1,
        nombre: "Papas Fritas",
        marca: "La patagonica",
        precio: 450,
        codigo: "#5050ABC",
        stock: 40,
        ruta: "img",
        descripcion: "Muy ricas"
    },
    {
        id:2,
        nombre: "Lentejas",
        marca: "La Riojana",
        precio: 250,
        codigo: "#123123",
        stock: 20,
        ruta: "img",
        descripcion: "Muy saludables"
    }
]

const consultasTXT = async(ruta) => {
    await fs.writeFile(ruta, " ")
    let contenido = await fs.readFile(ruta, 'utf-8') 
    console.log(contenido)
    await fs.appendFile(ruta, JSON.stringify(productos))  //Pasar de objeto a JSON
    contenido = await fs.readFile(ruta, 'utf-8')  //Pasar de JSON a Objeto
    console.log(JSON.parse(contenido))
    //await fs.unlink(ruta)
}

consultasTXT('./ejemplo.txt')