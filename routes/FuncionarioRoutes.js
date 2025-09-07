import { Router } from "express";
import FuncionarioController from "../controllers/FuncionarioController.js";
import auth from "../middleware/AuthMiddleware.js";

const router = Router();

// Rotas para funcionários
router.get("/", auth, FuncionarioController.getAll);
router.post("/", auth, FuncionarioController.create);
router.put("/:id", auth, FuncionarioController.update);
router.delete("/:id", auth, FuncionarioController.delete);

export default router;
