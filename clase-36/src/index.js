/*import express from 'express'
import { addLogger } from './utils/logger.js'

const app = express()
app.use(addLogger)

app.get("/", (req, res) => {
    req.logger.fatal('ERROR en todas las categorias')
    req.logger.error('ERROR en categoria Alimentos')
    req.logger.warning('Warning,  no se encuentro x producto')
    req.logger.debug('OK, todo funciona')
    res.send("Hola")
})

app.get("/suma", (req, res) => {
    let suma = 0

    for (let i = 0; i < 10000; i++) {
        suma += i
    }

    res.send(suma)
})


app.listen(4000, () => console.log("Server on Port 4000"))*/

import cluster from 'cluster'
import { cpus } from 'os'
import express from 'express'

const numSubProcesos = cpus().length


if (cluster.isPrimary) {
    console.log("Soy el proceso principal supervisor")
    for (let i = 0; i < numSubProcesos; i++) {
        cluster.fork() //Genero un proceso hilo
    }

} else {
    const app = express()
    app.get("/suma", (req, res) => {
        let suma = 0

        for (let i = 0; i < 1000000; i++) {
            suma += i
        }
        console.log({ status: "success", message: `Hola, soy un subproceso con el id ${process.pid} con el resultado ${suma}` })
        res.send("Hola")
    })
    console.log(`Hola, soy un subproceso con el id ${process.pid}`)
    app.listen(4000, () => console.log("Server on port 4000"))
    //cluster.fork() No puedo generar un subproceso a traves de un subproceso
}

export const isTokenExpired = (passwordData) => {
    const elapsedTime = Date.now() - passwordData.timestamp //Tiempo desde que se realizo la peticion del cambio de contraseñ
    const expirationTime = 60 * 60 * 1000 //Una hora
    return elapsedTime >= expirationTime //Si es V, expiro el token. Si es falso, no
}