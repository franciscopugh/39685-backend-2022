import { Router } from "express";
import { destroySession, getSession, testLogin } from "../controllers/session.controller.js";

const routerSession = Router()

routerSession.post("/login", testLogin)
routerSession.get("/logout", destroySession)

export default routerSession