import PacienteModel from "../models/PacienteModel.js";

class PacienteController {
    static getAll(req, res) { // Listar todos os pacientes
        PacienteModel.getAll((err, results) => {
            if (err) return res.status(500).json({ error: err });
            res.json(results);
        });
    }

    static getById(req, res) { // Listar paciente por ID
        const { id } = req.params;
        PacienteModel.getById(id, (err, results) => {
            if (err) return res.status(500).json({ error: err });
            if (results.length === 0) return res.status(404).json({ error: "Paciente não encontrado" });
            res.json(results[0]);
        });
    }

    static create(req, res) { // Cadastrar novo paciente
        PacienteModel.create(req.body, (err) => { // Cadastrar novo paciente
            if (err) return res.status(500).json({ error: err });
            res.json({ message: "Paciente cadastrado!" });
        });
    }

    static update(req, res) { // Atualizar paciente por ID
        const { id } = req.params;
        PacienteModel.update(id, req.body, (err) => {
            if (err) return res.status(500).json({ error: err });
            res.json({ message: "Paciente atualizado!" });
        });
    }

    static atualizar(req, res) { // Atualizar paciente por ID (atualização parcial / PATCH)
        const { id } = req.params;
        PacienteModel.atualizar(id, req.body, (err) => {
            if (err) return res.status(500).json({ error: err });
            res.json({ message: "Paciente Modificado!" });
        });
    }

    static delete(req, res) { // Remover paciente por ID
        const { id } = req.params;
        PacienteModel.delete(id, (err) => {
            if (err) return res.status(500).json({ error: err });
            res.json({ message: "Paciente removido!" });
        });
    }
}

export default PacienteController;