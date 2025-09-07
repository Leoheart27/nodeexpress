import db from "../database.js";

class UsuarioModel {
    static findByEmail(email, callback) {
        db.query("SELECT * FROM usuarios WHERE email=?", [email], callback);
    }

    static create(data, callback) {
        const { nome, email, senha, role } = data;
        db.query(
            "INSERT INTO usuarios (nome, email, senha, role) VALUES (?, ?, ?, ?)",
            [nome, email, senha, role || "funcionario"],
            callback
        );
    }
}

export default UsuarioModel;
