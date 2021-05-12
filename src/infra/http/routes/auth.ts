import { Router } from "express";
import Auth from "../../../domain/user/middlewares/auth";
import { checkJwt } from "../../middlewares/checkJwt";

const router = Router();
router.post("/login", Auth.login);

router.post("/change-password", [checkJwt], Auth.changePassword);

export default router;