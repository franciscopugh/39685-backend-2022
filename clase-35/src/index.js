import express from 'express'
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


app.listen(4000, () => console.log("Server on Port 4000"))