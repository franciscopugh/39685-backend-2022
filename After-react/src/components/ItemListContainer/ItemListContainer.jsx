import { useState, useEffect } from "react"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { useDarkModeContext } from "../../context/DarkModeContext.js"
import { getProducts } from "../../firebase/firebase.js"
export const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const { category } = useParams()
  const { darkMode } = useDarkModeContext()

  useEffect(() => {

    if (category) { //Consulto si me ingresaron un parametro en la url
      getProducts()
        .then(productos => {
          const productosFiltrados = productos.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === parseInt(category))
          setProductos(productosFiltrados)

        })
    } else {
      getProducts()
        .then(productos => {
          const productosFiltrados = productos.filter(prod => prod.stock > 0)
          setProductos(productosFiltrados)

        })
    }

  }, [category]) //Cada ves que se modifique la categoria

  return (
    <div className="row">
      {<ItemList productos={productos} plantilla={"Item"} />}
    </div>
  )
}