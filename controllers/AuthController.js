import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UsuarioModel from "../models/UsuarioModel.js";

const JWT_SECRET = "segredo_super_secreto";

class AuthController { // Controlador de autenticação
    static register(req, res) {
        const { nome, email, senha, role } = req.body;
        const hash = bcrypt.hashSync(senha, 10);

        UsuarioModel.create({ nome, email, senha: hash, role }, (err) => {
            if (err) return res.status(500).json({ error: err });
            res.json({ message: "Usuário cadastrado!" });
        });
    }

    static login(req, res) { // Login de usuário
        const { email, senha } = req.body;

        UsuarioModel.findByEmail(email, (err, results) => {
            if (err) return res.status(500).json({ error: err });
            if (results.length === 0) return res.status(404).json({ error: "Usuário não encontrado" });

            const usuario = results[0]; // Verifica a senha
            if (!bcrypt.compareSync(senha, usuario.senha)) {
                return res.status(401).json({ error: "Senha inválida" });
            }

            const token = jwt.sign( // Gera o token JWT
                { id: usuario.id, role: usuario.role },
                JWT_SECRET,
                { expiresIn: "1h" } // Token válido por 1 hora
            );

            res.json({ token });
        });
    }
}

export default AuthController;