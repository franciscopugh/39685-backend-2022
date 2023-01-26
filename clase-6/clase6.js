/*
    Proceso de encriptacion

    Algoritmo de encriptacion
    key o clave
    Iv o vector inicial

*/

const crypto =  require('crypto')
//import * as crypto from 'crypto'

//console.log(crypto.getCiphers()) //Consultar tipos de algoritmos de encriptacion

const algoritmo = 'aes-256-cbc'
const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)

const encriptar = (password) => {
    const cipher = crypto.createCipheriv(algoritmo, Buffer.from(key), iv) //La key debe seguirse manejando como un Buffer, por eso se utiliza Buffer.from()
    let resultado = cipher.update(password) //Preparar el objeto para encriptar
    console.log(`El resultado de update es: ${resultado}`)
    let encriptacion = cipher.final() //Resultado de la encriptacion
    console.log(encriptacion.toString('hex'))

}

const password = "C0derHouse"
encriptar(password)