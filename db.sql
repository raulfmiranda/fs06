-- Para criar um banco de dados --
CREATE DATABASE fs06_api;

-- Para selecionar um banco de dados --
USE fs06_api;

CREATE TABLE tb_veiculo (
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    marca VARCHAR(20) NOT NULL,
    modelo VARCHAR(20) NOT NULL,
    ano INT(4) NOT NULL
);

-- Manipulação de Dados --

-- Para inserir dados na tabela --
INSERT INTO tb_veiculo (ano, modelo, marca)
VALUES (2010, 'Celta', 'Chevrolet');

INSERT INTO tb_veiculo (ano, modelo, marca)
VALUES (2014, 'Classic', 'Chevrolet');

INSERT INTO tb_veiculo (ano, modelo, marca)
VALUES (2004, 'Gol', 'VolksWalgen');

INSERT INTO tb_veiculo (ano, modelo, marca)
VALUES (1998, 'Uno', 'Fiat');

INSERT INTO tb_veiculo (ano, modelo, marca)
VALUES (2014, 'C180', 'Mercedes');

INSERT INTO tb_veiculo (ano, modelo, marca)
VALUES (2015, 'Celta', 'Chevrolet');

INSERT INTO tb_veiculo (ano, modelo, marca)
VALUES (2021, 'Mobi', 'Fiat');


CREATE TABLE tb_cliente (
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    cpf CHAR(11) NOT NULL UNIQUE
);

INSERT INTO tb_cliente (nome, email, cpf)
VALUES 
('Alessandro', 'ale@email.com', '12312312312'),
('Rafael', 'ale@email.com', '22312312312'),
('Michael', 'ale@email.com', '32312312312'),
('Victor', 'ale@email.com', '42312312312'),
('Guilherme', 'ale@email.com', '52312312312');

-- Adicionando um relacionamento entre clientes e veiculos --

INSERT INTO tb_cliente (nome, email, cpf) VALUES ('Não definido', '---', '---');

-- Adicionando uma coluna que referencia o cliente --
ALTER TABLE tb_veiculo ADD COLUMN cliente_id INT (11) NOT NULL DEFAULT 6;

-- Criando a relação entre as duas tabelas --
ALTER TABLE tb_veiculo ADD FOREIGN KEY (cliente_id) REFERENCES tb_cliente(id);

-- Criando tabela de produtos --
CREATE TABLE tb_produto (
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    preco FLOAT(7) NOT NULL,
    quantidade INT(7) NOT NULL,
    descricao VARCHAR(100) NOT NULL,
    categoria CHAR(11) NOT NULL
);

-- Inserindo dados na tabela de produtos --
INSERT INTO tb_produto (nome, preco, quantidade, descricao, categoria)
VALUES 
('Teclado Basic', '35.40', '3', 'Teclado básico da cor preta.', 'Informática'),
('Teclado Gamer', '50.00', '2', 'Teclado Gamer básico da cor preta.', 'Informática'),
('Mouse Basic', '20.00', '5', 'Mouse básico da cor preta.', 'Informática'),
('Mouse Gamer', '40.00', '4', 'Mouse gamer da cor vermelha.', 'Informática'),
('Blusa', '40.00', '10', 'Blusa básica branca.', 'Moda');

-- Adicionando uma coluna que referencia o cliente --
ALTER TABLE tb_produto ADD COLUMN cliente_id INT (11) NOT NULL DEFAULT 6;

-- Criando a relação entre as duas tabelas --
ALTER TABLE tb_produto ADD FOREIGN KEY (cliente_id) REFERENCES tb_cliente(id);