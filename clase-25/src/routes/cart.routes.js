import { Router } from "express";
import { getProductsCart, addProductCart } from '../controllers/cart.controller.js'

const routerCart = Router()

routerCart.get("/:id", getProductsCart)
routerCart.post("/:id", addProductCart)
/*
routerCart.put("/:id", createCarrito)
routerCart.put("/product/:id", createCarrito)
routerCart.delete("/:id", createCarrito)
routerCart.delete("/product/:id", createCarrito)*/

export default routerCart