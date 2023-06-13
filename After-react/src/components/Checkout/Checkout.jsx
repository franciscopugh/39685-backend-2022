import { useRef } from "react"
import { useCarritoContext } from "../../context/CartContext"
import { Link, useNavigate } from "react-router-dom"
import { createOrdenCompra, getProduct, updateProduct } from "../../firebase/firebase"
import { toast } from "react-toastify"

export const Checkout = () => {

    const datForm = useRef() //Crear una referencia para consultar los valoresa actuales del form
    const { carrito, totalPrice, emptyCart } = useCarritoContext()

    let navigate = useNavigate() //Devuelve la localizacion actual
    const consultarForm = (e) => {
        //Consultar los datos del formulario
        e.preventDefault()

        const datosFormulario = new FormData(datForm.current) //Pasar de HTML a Objeto Iterable
        const cliente = Object.fromEntries(datosFormulario) //Pasar de objeto iterable a objeto simple

        const aux = [...carrito]

        //Recorrer mi carrito y descontar el stock
        aux.forEach(prodCarrito => {
            getProduct(prodCarrito.id).then(prodBBD => {
                if (prodBBD.stock >= prodCarrito.quantity) { //Si el stock de mi producto en la BDD es mayor o igual a la cantidad que el cliente quiere comprar de mi producto, descuento el stock
                    prodBBD.stock -= prodCarrito.quantity
                    updateProduct(prodBBD.id, prodBBD) //Enviarle a la BDD el producto descontando su stock
                } else {
                    console.log("El stock no es mayor o igual a la cantidad que se quiere comprar")
                }
            })
        })
        const aux2 = aux.map(prod => ({ id: prod.id, quantity: prod.quantity, precio: prod.precio }));

        createOrdenCompra(cliente, totalPrice(), aux2, new Date().toLocaleString('es-AR', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }))
            .then(ordenCompra => {

                toast(` 🛒 Muchas gracias por comprar con nosotros, su ID de compra es ${ordenCompra.id} por un total de ${totalPrice()}, en breve nos contactaremos para el envio`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                emptyCart()
                e.target.reset() //Reset form
                navigate("/") //Defino la ruta hacia donde quiero redirigir
            })
            .catch(error => {
                console.error(error)
            })


    }
    return (
        <>
            {
                carrito.length === 0 ?
                    <>
                        <h2>Para finalizar compra debe tener productos en el carrito</h2>
                        <Link className="nav-link" to={"/"}><button className="btn btn-primary">Continuar comprando</button></Link>
                    </>
                    :
                    <div className="container divForm" >
                        <form onSubmit={consultarForm} ref={datForm}>
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                                <input type="text" className="form-control" name="nombre" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" name="email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Repetir Email</label>
                                <input type="email" className="form-control" name="emailRepetido" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="dni" className="form-label">DNI</label>
                                <input type="number" className="form-control" name="dni" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="celular" className="form-label">Numero telefonico</label>
                                <input type="number" className="form-control" name="celular" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="direccion" className="form-label">Direccion</label>
                                <input type="text" className="form-control" name="direccion" />
                            </div>
                            <button type="submit" className="btn btn-primary">Finalizar Compra</button>
                        </form>
                    </div>

            }

        </>

    )
}