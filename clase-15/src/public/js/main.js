const socket = io()

const botonChat = document.getElementById("botonChat")
const parrafosMensajes = document.getElementById("parrafosMensajes")
const val = document.getElementById("chatBox")
let user
Swal.fire({
    title: "Identificacion de Usuario",
    text: "Por favor ingrese su nombre de usuario",
    input: "text",
    inputValidator: (valor) => {
        return !valor && 'Ingrese un valor valido'
    },
    allowOutsideClick: false
}).then(resultado => {
    user = resultado.value
    console.log(user)
})


botonChat.addEventListener("click", () => {
    
    if(val.value.trim().length > 0) {
        socket.emit("mensaje", {usuario: user, mensaje: val.value})
        val.value = "" //Limpiar el input
    }
})

socket.on("mensajes", arrayMensajes => {
    parrafosMensajes.innerHTML = "" //Limpio lo que serian los parrafos
    arrayMensajes.forEach(mensaje => {
        parrafosMensajes.innerHTML += `<p>${mensaje.usuario} : ${mensaje.mensaje} </p>`
    });
})

/*
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
})*/