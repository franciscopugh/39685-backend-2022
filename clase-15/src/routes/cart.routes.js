import { Router } from "express";

const routerCart = Router()


routerCart.post('/:idCart/product/:idProducto', async (req,res) => {
    //Consultar los carritos exitentes dado un id
    //carrito.some() Buscar si existe el producto en el carrito
    //Si no existe, creo un nuevo objeto producto con el id y la cantidad
    //Lo puseo y lo guardo en el txt
})

routerCart.post('/', async (req,res) => {
    //Crear carrito
})

routerCart.get('/:id', async (req,res) => {
    //Devolver un carrito dado su id
})