import db from "../database.js";

class PacienteModel {
    static getAll(callback) { // Listar todos os pacientes
        db.query("SELECT * FROM pacientes", callback);
    }

    static getById(id, callback) { // Obter um paciente pelo ID
        db.query("SELECT * FROM pacientes WHERE id=?", [id], callback);
    }

    static create(data, callback) { // Adicionar um novo paciente
        const { nome, cpf, nascimento, endereco, telefone, historico_medico } = data;
        db.query(
            "INSERT INTO pacientes (nome, cpf, nascimento, endereco, telefone, historico_medico) VALUES (?, ?, ?, ?, ?, ?)",
            [nome, cpf, nascimento, endereco, telefone, historico_medico],
            callback
        );
    }

    static atualizar(id, data, callback) { // Atualizar um paciente existente PATCH
        const fields = [];
        const values = [];
        for (const [key, value] of Object.entries(data)) {
            fields.push(`${key}=?`);
            values.push(value);
        }
        values.push(id);
        const sql = `UPDATE pacientes SET ${fields.join(", ")} WHERE id=?`;
        db.query(sql, values, callback);
    }

    static update(id, data, callback) { // Atualizar um paciente existente PUT
        const { nome, cpf, nascimento, endereco, telefone, historico_medico } = data;
        db.query(
            "UPDATE pacientes SET nome=?, cpf=?, nascimento=?, endereco=?, telefone=?, historico_medico=? WHERE id=?",
            [nome, cpf, nascimento, endereco, telefone, historico_medico, id],
            callback
        );
    }

    static delete(id, callback) { // Deletar um paciente
        db.query("DELETE FROM pacientes WHERE id=?", [id], callback);
    }
}

export default PacienteModel;
