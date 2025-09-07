import db from "../database.js";

class FuncionarioModel { // Modelo para funcionarios
    static getAll(callback) { // Obter todos os funcionarios
        db.query("SELECT * FROM funcionarios", callback);
    }

    static create(data, callback) { // Criar um novo funcionario
        const { nome, cpf, nascimento, endereco, telefone, area_atuacao } = data;
        db.query(
            "INSERT INTO funcionarios (nome, cpf, nascimento, endereco, telefone, area_atuacao) VALUES (?, ?, ?, ?, ?, ?)",
            [nome, cpf, nascimento, endereco, telefone, area_atuacao],
            callback
        );
    }

    static update(id, data, callback) { // Atualizar um funcionario PUT
        const { nome, cpf, nascimento, endereco, telefone, area_atuacao } = data;
        db.query(
            "UPDATE funcionarios SET nome=?, cpf=?, nascimento=?, endereco=?, telefone=?, area_atuacao=? WHERE id=?",
            [nome, cpf, nascimento, endereco, telefone, area_atuacao, id],
            callback
        );
    }

    static delete(id, callback) { // Deletar um funcionario
        db.query("DELETE FROM funcionarios WHERE id=?", [id], callback);
    }
}

export default FuncionarioModel;
