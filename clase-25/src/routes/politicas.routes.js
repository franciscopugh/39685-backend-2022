import Router from 'express'
import passport from 'passport'
import { passportError, roleVerification } from '../utils/errorMessages.js'

const routerPoliticas = Router()

routerPoliticas.get("/public", (req, res) => {
    res.send("Ruta publica")
})

routerPoliticas.get("/autenticado", passportError('jwt'), (req, res) => {
    res.send(req.user)
})

routerPoliticas.get("/premium", passportError('jwt'), roleVerification(["User"]), (req, res) => {
    res.send(req.user)
})

export default routerPoliticas