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
app.use(express.json()) //Permite el trabajo con informacion JSON

app.get('/', (req,res) => {
    res.send("Este es mi primer servidor con Express")
})

//http://localhost:4000/user?cargo=Tutor&nombre=Kevin
app.get('/user', (req,res) => {
    let {cargo, nombre, sueldo} = req.query
    //console.log(sueldo) undefined por que no existe el query
    const usuarios = users.filter(user => user.cargo === cargo)

    res.send(JSON.stringify(users))
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

app.post('/user', (req,res) => {
    let {nombre, apellido, cargo} = req.body
    const indice = users.length
    users.push({nombre: nombre, apellido: apellido,cargo: cargo, id: indice})
    res.send("Usuario creado")
    
})

app.put('/user/:id', (req,res) => {
    let id = parseInt(req.params.id)
    let {nombre, apellido, cargo} = req.body
    if(users.some(user => user.id === id)) {
        const indice = users.findIndex(usuario => usuario.id === id)
        users[indice].cargo = cargo
        users[indice].apellido = apellido
        users[indice].nombre = nombre
        res.send("Usuario actualizado")
    } 

    res.send("Usuario no encontrado")
   
    
})

app.delete('/user/:idUser', async (req,res) => {
    const idUser = req.params.idUser
    const index = users.findIndex(user => user.id === parseInt(idUser))
    if(index != -1 ) {
        users.splice(index,1)
        res.send(`Usuario eliminado`)
    } else {
        res.send(`El usuario no existe`)
    }
    
})

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})