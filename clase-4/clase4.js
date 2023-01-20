/*document.getElementById("id").addEventListener('click', () => {

})

array.forEach(() => {

})


calcularImpuestos(IVA(), PAIS(), RETENCIONES())

array.map(() => {})

const consultarBDD = (confirmacion) => {
    return new Promise((resolve, reject) => {
        if(confirmacion) {
            resolve("Base de datos de clientes") //Return implicito
        }
        reject("Acceso denegado")
    })
}

consultarBDD(true)
.then(resultado => console.log(resultado))
.catch(error => console.log(error))

fetch('https://criptoya.com/api/dolar')
.then(response => response.json())
.then(({mep, blue, solidario}) => {
    console.log(mep, blue, solidario)
    return blue
})
.catch(error => console.log(error))

const consultarDolar = async () => {
    try {
        const response = await fetch('https://criptoya.com/api/dolar')
        const dolares = await response.json()
        return dolares
    } catch (error) {
        return error
    }
}

consultarDolar()
.then(({mep, solidario, blue}) => {
    console.log(mep,solidario,blue)
})
.catch(error => console.log(error))


const consulta = async () => {
    const {mep} = await consultarDolar()
    console.log(mep)
}

consulta()
*/

const API_KEY = "bfd1b980aa5416c251b43fb2f1ba6c22";

const consultarCoordenadas = async (ciudad, provincia, pais) => {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${provincia},${pais}&limit=1&appid=${API_KEY}`)
    const datos = await response.json()
    return datos[0] 
}

const consultarClima = async(ciudad, provincia, pais) =>  {
    const {lat, lon} = await consultarCoordenadas(ciudad, provincia, pais)
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    const clima = await response.json()
    console.log(clima)
}

consultarClima("Trelew", "Chubut", "Arg")