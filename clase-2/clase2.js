class Empleado {
    constructor(nombre, apellido, edad, dni, sueldo) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.dni = dni
        this.sueldo = sueldo
    }
    //Todos
    aumentarSueldo(porcentaje) {
        this.sueldo *= porcentaje //this.sueldo *= 1.20 => aumento 20%
    }
    
}

class Junior extends Empleado {
    constructor(nombre, apellido, edad, dni, sueldo) {
        super(nombre, apellido, edad, dni, sueldo) //Llamo al constructor de la clase padre o superclase
        this.proyectosAsignados = []
    }

    asignarProyecto(nuevoProyecto) {
        this.proyectosAsignados.push(nuevoProyecto)
    }
}

class SemiSenior extends Empleado {
    constructor(nombre, apellido, edad, dni, sueldo, antiguedad) {
        super(nombre, apellido, edad, dni, sueldo)
        this.antiguedad = antiguedad 
        this.proyectosCoordinados = []
        this.proyectosAsignados = []
    }

    asignarProyecto(nuevoProyecto) {
        this.proyectosAsignados.push(nuevoProyecto)
    }

    coordinarProyecto(nuevoProyecto) {
        this.proyectosCoordinados.push(nuevoProyecto)
    }

    aumentarSueldo(porcentaje) {
        this.sueldo *= porcentaje + (0.05 * this.antiguedad)
    }
}

class Senior extends Empleado {
    constructor(nombre, apellido, edad, dni, sueldo, antiguedad) {
        super(nombre, apellido, edad, dni, sueldo)
        this.antiguedad = antiguedad 
        this.proyectosCoordinados = []
        this.clientes = []
    }

    coordinarProyecto(nuevoProyecto) {
        this.proyectosCoordinados.push(nuevoProyecto)
    }

    aumentarSueldo(porcentaje) {
        this.sueldo *= porcentaje + (0.1 * this.antiguedad)
    }

    agregarCliente(nuevoCliente) {
        this.clientes.push(nuevoCliente)
    }
    
}

class Proyecto {
    constructor(nombre, cantDias, precioRelativo) {
        this.nombre = nombre
        this.cantDias = cantDias
        this.precioRelativo = precioRelativo
    }
}

const proyecto1 = new Proyecto("Creacion del modelo de BDD", 20, 2000)
const proyecto2 = new Proyecto("Subida a servidor", 10, 1500)
const proyecto3 = new Proyecto("Testing", 15, 2200)

const empleado1 = new Junior("Pedro", "Parker", 19, 123123, 1200)
const empleado2 = new SemiSenior("Gwen", "Stacy", 19, 12121, 7500, 3)
const empleado3 = new Senior("Norman", "Osborn", 50, 1321312, 15000, 10)

empleado1.asignarProyecto(proyecto1)
empleado1.asignarProyecto(proyecto2)
empleado1.asignarProyecto(proyecto3)
empleado1.aumentarSueldo(1.00001)

empleado2.asignarProyecto(proyecto2)
empleado2.coordinarProyecto(proyecto3)
empleado2.coordinarProyecto(proyecto1)
empleado2.aumentarSueldo(1.10)

empleado3.coordinarProyecto(proyecto2)
empleado3.agregarCliente({nombre: "Tio Ben"})
empleado3.aumentarSueldo(1.4)

console.log(empleado1)
console.log(empleado2)
console.log(empleado3)




