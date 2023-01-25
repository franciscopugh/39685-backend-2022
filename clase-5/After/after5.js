const fs = require('fs').promises

const addProduct = async(objeto) => {
    let contenido = await fs.readFile('./ejemplo.txt', 'utf-8')  //Pasar de JSON a Objeto
    let aux = JSON.parse(contenido)
    console.log(aux)
    aux.push(objeto)
    console.log(aux)
    await fs.writeFile('./ejemplo.txt', JSON.stringify(aux))
}

const updateProducto = async({nombre, marca, id})  => {
    let contenido = await fs.readFile('./ejemplo.txt', 'utf-8')  //Pasar de JSON a Objeto
    let aux = JSON.parse(contenido)
    console.log(aux.some(producto=> producto.id === id))
    if(aux.some(producto=> producto.id === id)) {
        let indice = aux.findIndex(producto => producto.id === id)
        aux[indice].nombre = nombre
        aux[indice].marca = marca
        await fs.writeFile('./ejemplo.txt', JSON.stringify(aux))
    } else {
        console.log( "Producto no encontrado")
    }

}


const producto1 = {nombre: "Pepas", marca: "Pepin", id: 1}
const producto2 = {nombre: "Lentejas", marca: "Lentejin", id: 2}

//addProduct(producto1).then(() => addProduct(producto2))
//array.filter(producto => producto.id !== idIngresado)
const test = async() => {
    await addProduct(producto1)
    await addProduct(producto2)
}
const producto3 = {nombre: "Tomates", marca: "Tomatin", id: 2}
//test()
updateProducto(producto3)
