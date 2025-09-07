import express from "express";
import bodyParser from "body-parser";

import AuthRoutes from "./routes/AuthRoutes.js";
import PacienteRoutes from "./routes/PacienteRoutes.js";
import FuncionarioRoutes from "./routes/FuncionarioRoutes.js";

const app = express();
app.use(express.json());

// Rotas
app.use("/auth", AuthRoutes);
app.use("/pacientes", PacienteRoutes);
app.use("/funcionarios", FuncionarioRoutes);

app.listen(3000, () => {
    console.log("🚀 Servidor rodando na porta 3000");
});
