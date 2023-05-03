import express from 'express'
import nodemailer from 'nodemailer'

const app = express()

let transporter = nodemailer.createTransport({ //Genero la forma de enviar info desde mail (o sea, desde Gmail con x cuenta)
    host: 'smtp.gmail.com', //Defino que voy a utilizar un servicio de Gmail
    port: 465,
    secure: true,
    auth: {
        user: "franciscopugh3@gmail.com", //Mail del que se envia informacion
        pass: "",
        authMethod: 'LOGIN'
    }

})

app.get('/email', async (req, res) => {
    await transporter.sendMail({
        from: 'Test Coder franciscopugh3@gmail.com',
        to: "franciscopugh01@gmail.com",
        subject: "Saludos, buenas noches",
        html: `
            <div>
                <h2>Hola, saludos desde la clase de Coder </h2>
            </div>
        `,
        attachments: []
    })
    res.send("Email enviado")
})

app.listen(4000, () => {
    console.log("Server on port 4000")
})
