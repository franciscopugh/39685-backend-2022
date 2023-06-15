/*let nombre1: string = "5"

let numero2: number = 5

let suma3: string = 5 + "5"


String 
Number
Boolean
Estos son constructores de datos, no se usan para definir variables.
En cambio se utilizan sus representaciones en minuscula

console.log(suma)

const sumar1 = (num1: number, num2: number): number => {
    return num1 + num2
}

console.log(sumar1(5, 10))
*/

interface Animal {
    nombre: string
    respirar(): void
}

class Catus {
    cantPatas: number
    constructor(cantPatas: number) {
        this.cantPatas = cantPatas
    }
}

class Gato extends Catus implements Animal {
    nombre: string

    constructor(nombre: string, cantPatas: number) {
        super(cantPatas)
        this.nombre = nombre
    }
    respirar(): void {
        console.log("Soy un lindo gatito y digo miau miau")
    }

}

class Tiburon implements Animal {
    nombre: string

    constructor(nombre: string) {
        this.nombre = nombre
    }

    respirar(): void {
        console.log("Glu glu glu")
    }
}

const gato1: Animal = new Gato("Copito de nieve", 4)
const tiburon1: Animal = new Tiburon("Tiburoncin")

tiburon1.respirar()
gato1.respirar()