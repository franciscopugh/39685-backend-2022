import 'dotenv/config'

import express from 'express'
import db from './db/db.js'
import routerUser from './routes/user.js'

const main = async () => {
    await db.sync().then(() => {
        console.log("Db conectada")
    })
}

const app = express()

app.use(express.json())
app.use("/users", routerUser)

app.listen(4000, () => {
    console.log("Server on port 4000")
})

main()