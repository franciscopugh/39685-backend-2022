import express from 'express'
import compression from 'express-compression'

const app = express()

app.use(compression({
    brotli: { enabled: true, zlib: {} }
}))

app.get("/string", (req, res) => {
    let string = "Hola, buenas noches"


    for (let i = 0; i < 100000; i++) {
        string += " Hola, buenas noches"
    }

    res.send(string)
})

app.listen(4000, () => console.log("Server on port 4000"))