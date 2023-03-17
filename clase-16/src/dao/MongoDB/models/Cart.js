import { ManagerMongoDB } from "../../../db/mongoDBManager.js";
import { Schema } from "mongoose";
import { ProductMessageMongoDB } from "./Product.js";
const url = process.env.URLMONGODB

const cartSchema = new Schema({
    products: []

})



export class ManagerMessageMongoDB extends ManagerMongoDB {
    constructor() {
        super(url, "messages", messageSchema)
        //Aqui irian los atributos propios de la clase
    }
    async addProduct(id) { //Agrego 1 o varios elementos
        //this.#setConnection() //Esto deberia ser protected
        /*
        Reviso que el id se encuentre en la bdd en el modelo Product

        */
        try {
            return await this.model.carrito.push(id)
        } catch (error) {
            return error
        }
    }
    //Aqui irian los metodos propios de la clase
}