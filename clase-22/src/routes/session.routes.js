import { Router } from "express";
import { destroySession, getSession, testLogin } from "../controllers/session.controller.js";
import passport from "passport";
const routerSession = Router()

routerSession.post("/login", passport.authenticate('login'), testLogin)
routerSession.get("/logout", destroySession)

export default routerSession