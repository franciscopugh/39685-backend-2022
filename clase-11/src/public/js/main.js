const socket = io()
const form = document.getElementById(idForm)
form.addEventListener('submit', (e) => {
    e.preventDefault()
    //CONSULTO DATOS DEL FORMULARIO
    socket.emit("productoNuevo", [{}]) //Enviar informacion a mi servidor
})

socket.emit("mensaje", [{user:"Fran", mensaje: "Hola"}]) //Enviar informacion a mi servidor

socket.on("mensaje-general", info => {
    console.log(info)
})

socket.on("mensaje-socket-propio", info => {
    console.log(info)
})