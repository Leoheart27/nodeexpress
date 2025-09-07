import mysql from "mysql2";

const db = mysql.createConnection({ // Configurações do banco de dados
    host: "localhost",
    user: "root",
    password: "root",
    database: "bd_health"
});

db.connect((err) => { // Conexão com o banco de dados
    if (err) throw err;
    console.log("✅ Conectado ao MySQL!");
});

export default db;