import { createUser } from "../services/UserService.js"

/*
    Register -> Login(con un JWT) a veces necesito la validacion del mail

    Login -> Manejo de situaciones de JWT

    1) Error en passport -> ERROR
    2) Token no existe
        Entonces, consulto a la BDD
            a)Usuario no encontrado en mi BDD -> ERROR
            b)Contraseña no valida -> ERROR
            c)Usuario y contraseña validos -> ENVIAR TOKEN e ingresa
    3)Token existe
            a)Token no valido -> ERROR
            b)Token valido -> Ingresa sin enviar datos




*/

export const registerUser = async (req, res) => {
    //
    //Todo lo que refiere a control de parametros va aqui

}

export const loginUser = async (req, res) => {
    //
    //Todo lo que refiere a control de parametros va aqui

}