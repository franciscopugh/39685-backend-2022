import { useState, createContext, useContext } from "react";

const CarritoContext = createContext() //Creo mi contexto
//Funciones para conectar con BDD
export const useCarritoContext = () => useContext(CarritoContext) //Creo una funcion para poder consultar mi contexto

export const CarritoProvider = (props) => { //Forma de proveer el contexto en mi app, puede recibir props si es necesario

    const [carrito, setCarrito] = useState([]) //Consultar a la BDD

    //Agregar producto - Quitar producto - Vaciar carrito
    //Obtener Cantidad (Subtotales) - Obtener Total Price - Buscar Producto

    const isInCart = (id) => {
        //Find => Obj - Some => Booleano
        return carrito.some(prod => prod.id === id) //V o F
    }

    const addItem = (item, quantity) => { //Consultar a la BDD
        if (isInCart(item.id)) { //Consulto si el producto existe o no en el carrito
            //Consulto y seteo la cantidad en el carrito
            const indice = carrito.findIndex(prod => prod.id === item.id)
            const aux = [...carrito]
            aux[indice].quantity = quantity
            setCarrito(aux)
        } else {
            //Creo un nuevo objeto con los datos ingresados
            const newItem = {
                ...item,
                quantity: quantity //Si agrego directamente el parametro se queda con el mismo nombre
            }
            /*//Genero un aux que es igual al carrito para poder hacer el push
            const aux = carrito
            aux.push(newItem)
            setCarrito(aux)*/
            setCarrito([...carrito, newItem]) //Genero una copia del carrito + el nuevo producto
        }
    }

    const removeItem = (id) => { //Consultar a la BDD
        /*const aux = [...carrito]
        const indice = aux.findIndex(prod => prod.id === id)
        setCarrito(aux.splice(indice,1))*/

        //Traeme todos los productos que no tengan el id ingresado
        setCarrito(carrito.filter(prod => prod.id !== id))
    }

    const emptyCart = () => { //Consultar BDD
        setCarrito([])
    }

    const getItemQuantity = () => {
        //Devuelvo la cantidad de productos en mi carrito
        return carrito.reduce((acum, prod) => acum += prod.quantity, 0)
    }

    const totalPrice = () => {
        return carrito.reduce((acum, prod) => acum += (prod.quantity * prod.precio), 0)
    }

    return (
        <CarritoContext.Provider value={{ carrito, addItem, removeItem, emptyCart, totalPrice, getItemQuantity }}>
            {props.children}

        </CarritoContext.Provider>
    )

}