USE bd_health;

-- Usuários do sistema (para login)
CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  senha VARCHAR(255),
  role ENUM('funcionario','admin') DEFAULT 'funcionario'
);

-- Pacientes
CREATE TABLE pacientes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  cpf VARCHAR(11) UNIQUE,
  nascimento DATE,
  endereco VARCHAR(255),
  telefone VARCHAR(20),
  historico_medico TEXT
);

-- Funcionários
CREATE TABLE funcionarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  cpf VARCHAR(11) UNIQUE,
  nascimento DATE,
  endereco VARCHAR(255),
  telefone VARCHAR(20),
  area_atuacao VARCHAR(100)
);