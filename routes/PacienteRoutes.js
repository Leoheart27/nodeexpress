import { Router } from "express";
import PacienteController from "../controllers/PacienteController.js";
import auth from "../middleware/AuthMiddleware.js";
import authorize from "../middleware/RoleMiddleware.js";

const router = Router(); // Router do Express

// Apenas funcionarios e admin podem mexer com pacientes
router.get("/", auth, authorize(["funcionario", "admin"]), PacienteController.getAll);
router.get("/:id", auth, authorize(["funcionario", "admin"]), PacienteController.getById);
router.post("/", auth, authorize(["funcionario", "admin"]), PacienteController.create);
router.put("/:id", auth, authorize(["funcionario", "admin"]), PacienteController.update);
router.patch("/:id", auth, authorize(["funcionario", "admin"]), PacienteController.atualizar);
router.delete("/:id", auth, authorize(["admin"]), PacienteController.delete);
// apenas admin pode excluir pacientes

export default router;
