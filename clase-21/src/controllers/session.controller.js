import { managerUser } from "./user.controller.js"
import { validatePassword } from "../utils/bcrypt.js"
export const getSession = (req, res) => {
    if (req.session.login) { //Si la sesion esta activa en la BDD
        res.redirect('/product', 200, {
            'message': "Bienvenido/a a mi tienda"
        })
    }
    //No esta activa la sesion
    res.redirect('/api/session/login', 500, {
        //Mensaje de logueo
    })
}

export const testLogin = async (req, res) => {
    //Consultar datos del formulario de login
    const { email, password } = req.body
    console.log(email, password)
    try {
        const user = await managerUser.getElementByEmail(email)

        if (email == user.email && validatePassword(password, user.password)) {

            req.session.email = user.email

            res.status(200).json({
                message: "Usuario logueado correctamente"
            })

        } else {
            res.status(401).json({
                message: "Usuario o contraseña no validos"
            })
        }



    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const destroySession = (req, res) => {
    if (req.session.login) {
        req.session.destroy()
    }
    res.redirect('/product', 200, {
        'divMessage': "Hola"
    })
}