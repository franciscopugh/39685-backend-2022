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

export const testLogin = (req, res) => {
    //Consultar datos del formulario de login
    const { email, password } = req.body

    try {
        if (email == "f@f.com" && password == "1234") { //Consultar users en mi BDD
            //Login correcto
            req.session.login = true
            res.redirect('/product', 200)
        } else {
            res.redirect("/api/session/login", 500, {
                //Usuario no encontrado o datos incorrectos
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