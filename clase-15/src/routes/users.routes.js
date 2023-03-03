import { Router } from "express";
import { userModel } from "../models/user.js";

const routerUser = Router()

routerUser.get("/", async (req, res) => {
    try {
        const users = await userModel.find()
        res.send({ resultado: 'success', users: users })
    } catch (error) {
        res.send("Error en consulta de users, mensaje:", error.message)
    }
})

routerUser.post("/", async (req, res) => {

    try {
        const { nombre, apellido, email, password } = req.body

        const resultado = await userModel.create({
            nombre, apellido, email, password
        })
        res.send({ resultado: 'success', info: resultado })
    } catch (error) {
        res.send("Error en creacion de users, mensaje:", error.message)
    }
})

export default routerUser