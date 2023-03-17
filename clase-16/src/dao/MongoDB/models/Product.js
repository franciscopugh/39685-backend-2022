import { ManagerMongoDB } from "../../../db/mongoDBManager.js";
import { Schema } from "mongoose";
import paginate from 'mongoose-paginate-v2'
const url = process.env.URLMONGODB

const productSchema = new Schema({
    nombre: String,
    email: {
        type: String,
        unique: true
    },
    message: String
})

productSchema.plugin(paginate)

export class ProductMessageMongoDB extends ManagerMongoDB {
    constructor() {
        super(url, "products", productSchema)
        //Aqui irian los atributos propios de la clase
    }

    //Aqui irian los metodos propios de la clase
}