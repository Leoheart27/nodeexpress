import jwt from "jsonwebtoken";

const JWT_SECRET = "segredo_super_secreto"; // 

function auth(req, res, next) { // Autenticação de token JWT
    const authHeader = req.headers["authorization"];
    if (!authHeader) return res.status(403).json({ error: "Token necessário" });

    const token = authHeader.split(" ")[1];
    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ error: "Token inválido" });
        req.user = user;
        next();
    });
}

export default auth;