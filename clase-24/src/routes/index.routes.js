import { Router } from "express";

import routerCart from "./cart.routes.js";
import routerProducto from "./products.routes.js";
import routerSession from "./session.routes.js";
import routerUser from "./user.routes.js";
import routerGithub from "./github.routes.js";

const router = Router()

router.use('/product', routerProducto)
router.use('/user', routerUser)
router.use('/api/cart', routerCart)
router.use('/api/session', routerSession)
router.use('/authSession', routerGithub)
router.use('*', (req, res) => {
    res.status(404).send({ error: "404 No se encuentra la pagina solicitada" })
})

export default router