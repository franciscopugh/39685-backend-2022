//ECMA 6
/*
class Empleado {
    constructor(nombre, apellido, edad, sueldo){
        this.nombre = nombre
        this.apellido  =apellido
        this.edad = edad
        this.sueldo = sueldo
    }

    actualizarSueldo(porcentaje){
        this.sueldo *= porcentaje
    }

    get consultarSueldo() {
        return this.sueldo
    }

    set modificarSueldo(nuevoSueldo) {
        this.sueldo = nuevoSueldo
    }
}

const empleado1 = new Empleado("Pedro", "Parker", 20, 12000)

//empleado1.modificarSueldo = 9000
//console.log(empleado1.consultarSueldo)
empleado1.sueldo = 7000
console.log(empleado1.sueldo)


//ECMA 7
console.log(Math.pow(5,3))
console.log(5**3)
const nombres = ['Fran', 'Mateo', 'Matilde', 'Maria']
console.log(nombres.includes('Elias'))



//ECMA 8

const libro = {
    nombre: "Pedro de la mar",
    editorial: "La Española", 
    autor: "Sancho Panza",
    year: 2021,
    precio: 300,
    stock: 10
}

console.log(Object.keys(libro)) //Devuelve claves del objeto
console.log(Object.values(libro)) //Devuelve valores del objeto
console.log(Object.entries(libro)) //Devuelve claves y valores del objeto

//ECMA 9

const libro = {
    nombre: "Pedro de la mar",
    editorial: "La Española", 
    autor: "Sancho Panza",
    year: 2021,
    precio: 300,
    stock: 10
}

const libro1 = {...libro}

console.log(libro1)

function sumar(...num) { //Operador REST => Referencia a n cantidad de parametros en un array
    return num.reduce((a,b) => a +b, 0)   
}

console.log(sumar(1,4,4,43,3414,421412,323))


//ECMA 10
const nombre = " Francisco "
console.log(nombre)
console.log(nombre.trim())

const facturas = [20000, [40000, 22000, [5000,[4000]]], 9000, [70000, 30000]]

console.log(facturas.flat(3).reduce((a,b) => a+b, 0)) //.flat() eliminacion de anidaciones internas

//import {} from ''
const user = true
if(user){ 
    import('ruta').then(({contenido}) => console.log(contenido)) //Importacion si el usuario es valido
} else {
    //Contenido si user no es valido
}
*/
//ECMA 11

const facturas = [null, [40000, undefined, [5000,[undefined]]], 9000, [70000, 30000]]
 //=> 5 + undefined =>  NaN (Not a Number) // 5+ null = 5
console.log(facturas.flat(3).map(factura => factura = factura ?? 0).reduce((a,b) => a+b, 0)) //Operador Nullish si factura es undefined devuelvo))

class Empleado {
    #sueldo //Propiedad privada
    constructor(nombre, apellido, edad, sueldo){
        this.nombre = nombre
        this.apellido  =apellido
        this.edad = edad
        this.#sueldo = sueldo
    }

    actualizarSueldo(porcentaje){
        this.#sueldo *= porcentaje
    }

    get consultarSueldo() {
        return this.#sueldo
    }

    set modificarSueldo(nuevoSueldo) {
        this.sueldo = nuevoSueldo
    }
}

const empleado1 = new Empleado("Pedro", "Parker", 20, 12000)
const empleado2 = new Empleado("Pedro", "Parker", 20, 12000)
//empleado1.sueldo = 10  Crea una nueva propiedad con este valor
console.log(empleado1.consultarSueldo)