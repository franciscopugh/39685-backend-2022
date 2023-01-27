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
    cipher.update(password) //Preparar el objeto para encriptar
    let encriptacion = cipher.final() //Resultado de la encriptacion
    return {
        iv: iv.toString('hex'), passwordEncriptado: encriptacion.toString('hex')
    }
}

const hackerman = (passwordE) => {
//Tomo los valores del objeto
    const initV= Buffer.from(passwordE.iv, 'hex')
    const password = Buffer.from(passwordE.passwordEncriptado, 'hex')
    //Creo un objeto para desenscriptar la contraseña
    const decipher = crypto.createDecipheriv(algoritmo, Buffer.from(key), initV)
    //Prepara el objeto para desencriptar
    decipher.update(password)
    let desenscriptado = decipher.final() //Guardo el resultado
    return desenscriptado.toString() //Lo retorno en formato string
}

const password = "Buenas Noches"
const passwordEncriptado = encriptar(password)
hackerman(passwordEncriptado)