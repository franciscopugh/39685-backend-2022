import passport from "passport"


export const passportError = (strategy) => {
    return async (req, res, next) => {
        passport.authenticate(strategy, (error, user, info) => {
            if (error) { //Errores del Token (token no valido, no posee el formato adecuado o no existe, etc)
                return next(error)
            }

            if (!user) {
                return res.status(401).send({ error: info.message ? info.message : info.toString() })
            }

            req.user = user
            next()
        })(req, res, next)
    }
}

export const roleVerification = (role) => {
    return async (req, res, next) => {
        const userAccess = req.user.user[0]
        if (!req.user) {
            return res.status(401).send({ error: "User no autorizado" })
        }

        if (userAccess.rol != role) { //El user no tiene el rol necesario a esta ruta y a este rol
            return res.status(401).send({ error: "User no posee los permisos necesarios" })
        }

        next()

    }

} 