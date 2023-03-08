/*import http from 'http'
const PORT = 4000
                        //Datos que entran - Datos que se devuelven
const server = http.createServer((request, response) => {
 response.end("Hola, este es mi primer servidor en NODE")
})

//Ejecutar servidor
server.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})
*/
//import {ProductManager} from 'ruta'
import express from 'express'

const app = express() //app es igual a la ejecucion de express
const PORT = 4000

const users = [
    {
        nombre: "Fran",
        apellido: "Pugh",
        id: 1,
        cargo: "Profesor"
    },
    {
        nombre: "Kevin",
        apellido: "Quispe",
        id: 2,
        cargo: "Tutor"
    },
    {
        nombre: "Pablo",
        apellido: "Barbero",
        id: 3,
        cargo: "Tutor"
    }
]

app.use(express.urlencoded({extended:true})) //Permite realizar consultas en la URL (req.query)

app.get('/', (req,res) => {
    res.send("Este es mi primer servidor con Express")
})

//http://localhost:4000/user?cargo=Tutor&nombre=Kevin
app.get('/user', (req,res) => {
    let {cargo, nombre, sueldo} = req.query
    //console.log(sueldo) undefined por que no existe el query
    const usuarios = users.filter(user => user.cargo === cargo)
    res.send(JSON.stringify(usuarios))
    //let {limite} = req.query
    //const arrayProducts = JSON.parse('txt')
    //const copiaProductos = arrayProductos.slice(0, limite)
})

app.get('/user/:idUser', async (req,res) => {
    const idUser = req.params.idUser
    const user = users.find(user => user.id === parseInt(idUser))
    if(user) {
        res.send(`Nombre de usuario ${user.nombre}`)
    } else {
        res.send(`El usuario no existe`)
    }
    
})


app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})