import mongoose from "mongoose";
import orderModel from "./models/order.js";
const main = async () => {
    await mongoose.connect("mongodb+srv://franpugh:coderhouse@cluster0.ydottt4.mongodb.net/?retryWrites=true&w=majority")

    const resultados1 = await orderModel.paginate({}, { limit: 4, page: 1 })
    console.log(resultados1)
    const resultados2 = await orderModel.paginate({}, { limit: 8, page: resultados1.nextPage })
    console.log(resultados2)
    /*const resultados = await orderModel.aggregate([
        {
            $match: { size: "large" }
        },
        {
            $group: { _id: "$name", totalQuantity: { $sum: "$quantity" }, totalPrice: { $sum: "$price" } }
        },
        {
            //1 si es menor a mayor, -1 si es mayor a menor
            $sort: { totalQuantity: -1 }
        },
        {
            $group: { _id: 1, orders: { $push: "$$ROOT" },  }
        },
        {
            $project: {
                "_id": 0,
                orders: "$orders"
            }
        },
        {
            $merge: {
                into: "reports"
            }
        }
    ])
    console.log(resultados)
    /*await orderModel.insertMany([
        { name: "Napolitana", size: "small", price: 2500, quantity: 2 },
        { name: "Cuatro quesos", size: "medium", price: 3000, quantity: 2 },
        { name: "Jamon y morrones", size: "large", price: 2100, quantity: 1 },
        { name: "Champiñones", size: "medium", price: 1800, quantity: 1 },
        { name: "Capresse", size: "small", price: 3600, quantity: 2 },
        { name: "Peperoni", size: "large", price: 4000, quantity: 2 },
        { name: "Napolitana", size: "medium", price: 3000, quantity: 2 },
        { name: "Anchoas", size: "large", price: 2500, quantity: 1 },
        { name: "Cuatro quesos", size: "small", price: 4000, quantity: 3 },
        { name: "Fugazzeta", size: "large", price: 2300, quantity: 1 },
        { name: "Jamon y morrones", size: "small", price: 1750, quantity: 1 },
        { name: "Muzzarella", size: "medium", price: 2900, quantity: 2 }
    ])*/
}

main()
