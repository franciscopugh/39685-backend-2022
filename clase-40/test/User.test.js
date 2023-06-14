import mongoose from "mongoose";
import userModel from "../src/dao/models/User.js";
import Assert from 'assert'

const assert = Assert.strict

await mongoose.connect()

describe("Test de consulta a todos los usuarios", () => {
    //Previo a arrancar todos los test
    before(function () {
        console.log("Arrancando test")
    })
    //Previo a arrancar un test
    beforeEach(function () {
        this.timeout(500) //Por defecto viene en 2000ms  
    })

    it("Test para obtener todos los usuarios de mi BDD", async function () {
        //Contexto propio del test (tengo un scope propio)
        const users = await userModel.find()

        assert.strictEqual(Array.isArray(users), true) //Que sea igual a un array
    })

    it("Test para crear un usuario en mi BDD", async function () {
        //Para este tipo de test se consulta a una BDD para Testing

        const newUser = {
            first_name: "Pepe",
            last_name: "Perez",
            email: "pWEAEWAEWA@pepito.com",
            password: "@1At3@"
        }
        const resultado = await userModel.create(newUser)

        assert.ok(resultado._id) //resultado._id -> id || error o undefined o null

    })

    it("Eliminar usuario generado", async function () {
        const email = "andalucia@pepito.com"

        const user = await userModel.findOneAndDelete({ email: email })
        console.log(user)
        assert.strictEqual(typeof user, 'object')
    })


})