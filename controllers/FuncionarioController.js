import FuncionarioModel from "../models/FuncionarioModel.js";

class FuncionarioController {
    static getAll(req, res) {
        FuncionarioModel.getAll((err, results) => {
            if (err) return res.status(500).json({ error: err });
            res.json(results);
        });
    }

    static create(req, res) {
        FuncionarioModel.create(req.body, (err) => {
            if (err) return res.status(500).json({ error: err });
            res.json({ message: "Funcionário cadastrado!" });
        });
    }

    static update(req, res) {
        const { id } = req.params;
        FuncionarioModel.update(id, req.body, (err) => {
            if (err) return res.status(500).json({ error: err });
            res.json({ message: "Funcionário atualizado!" });
        });
    }

    static delete(req, res) {
        const { id } = req.params;
        FuncionarioModel.delete(id, (err) => {
            if (err) return res.status(500).json({ error: err });
            res.json({ message: "Funcionário removido!" });
        });
    }
}

export default FuncionarioController;