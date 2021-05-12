import { Router } from "express";
  import UserController from "../../../domain/user/controllers/UserController";
  import { checkJwt } from "../../middlewares/checkJwt";
  import { checkRole } from "../../middlewares/checkRole";

  const router = Router();

  router.get("/", [checkJwt, checkRole(["ADMIN"])], UserController.listAll);

  router.get(
    "/:id([0-9]+)",
    [checkJwt, checkRole(["ADMIN", "GERAL"])],
    UserController.getOneById
  );

  router.post("/", [checkJwt, checkRole(["ADMIN", "ROOT"])], UserController.newUser);

  router.patch(
    "/:id([0-9]+)",
    [checkJwt, checkRole(["ADMIN", "ROOT"])],
    UserController.editUser
  );

  router.delete(
    "/:id([0-9]+)",
    [checkJwt, checkRole(["ROOT"])],
    UserController.deleteUser
  );

  export default router;