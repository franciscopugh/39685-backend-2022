let nombre1 = "Francisco" //0x01
let nombre2 = nombre1 //0x02

const user = {
    nombre : "Fran",
    apellido: "Pugh",
    mascotas: [
        {nombre: "Pitu", raza: "Salchicha"},
        {nombre: "Michi", raza: "Angora"}
    ]
}

const user2 = structuredClone(user)

//user -> 0x03
//user2 -> 0x04

user2.mascotas[0] = null

console.log(user)
console.log(user2)

console.log("Hola coders, bienvenidos/as a Backend")