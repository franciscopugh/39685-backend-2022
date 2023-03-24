import { getManagerUsers } from "../dao/daoManager.js";
import { createHash } from "../utils/bcrypt.js";
const data = await getManagerUsers()
export const managerUser = new data.ManagerUserMongoDB

export const createUser = async (req, res) => {
    const { first_name, last_name, email, age, password } = req.body

    try {
        const user = await managerUser.getElementByEmail(email)
        if (user) {
            res.status(400).json({
                message: "Usuario ya existe"
            })
        } else {
            const hashPassword = createHash(password)
            const userCreated = await managerUser.addElements([{
                first_name: first_name,
                last_name: last_name,
                email: email,
                age: age,
                password: hashPassword
            }])

            res.status(200).json({
                message: { message: "Usuario creado", userCreated }
            })
        }


    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
