-- MySQL Script generated by MySQL Workbench
-- Tue Jun 16 17:50:21 2020
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
SHOW STATUS LIKE 'max_used_connections';
-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------


CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;


-- -----------------------------------------------------
-- Table `mydb`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`usuario` (
  `login` VARCHAR(16) NOT NULL,
  `senha` VARCHAR(32) NOT NULL,
  `nivel_permissao` INT UNSIGNED NOT NULL COMMENT '1 para cliente, 2 para administrador.',
  PRIMARY KEY (`login`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`clientes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `data_nasc` DATE NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `imagem` VARCHAR(45) NULL COMMENT 'imagem será salva pelo nome no banco, deverá puxar a mesma do servidor.',
  `usuario_login` VARCHAR(16) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_clientes_usuario1_idx` (`usuario_login` ASC) ,
  CONSTRAINT `fk_clientes_usuario1`
    FOREIGN KEY (`usuario_login`)
    REFERENCES `mydb`.`usuario` (`login`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mydb`.`administradores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`administradores` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `imagem` VARCHAR(45) NULL COMMENT 'imagem será salva pelo nome no banco, deverá puxar a mesma do servidor.',
  `usuario_login` VARCHAR(16) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_administradores_usuario1_idx` (`usuario_login` ASC) ,
  CONSTRAINT `fk_administradores_usuario1`
    FOREIGN KEY (`usuario_login`)
    REFERENCES `mydb`.`usuario` (`login`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mydb`.`autores`


-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`autores` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`editoras`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`editoras` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`livros`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`livros` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NOT NULL,
  `descricao` VARCHAR(600) NULL,
  `quantidade` INT UNSIGNED NOT NULL,
  `imagem` VARCHAR(45) NOT NULL COMMENT 'Salvar nome da imagem, que deve puxar a mesma do servidor.\n',
  `editoras_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_livros_editoras1_idx` (`editoras_id` ASC) ,
  CONSTRAINT `fk_livros_editoras1`
    FOREIGN KEY (`editoras_id`)
    REFERENCES `mydb`.`editoras` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`emprestimos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`emprestimos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `data_devolucao` DATE NOT NULL,
  `data_emprestimo` DATE NOT NULL,
  `data_real_devolucao` DATE NULL,
  `status` INT UNSIGNED NOT NULL COMMENT 'Status = 1 para empréstimo em andamento, 2 para empréstimo finalizado.',
  `livros_id` INT NOT NULL,
  `clientes_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_emprestimos_livros1_idx` (`livros_id` ASC) ,
  INDEX `fk_emprestimos_clientes1_idx` (`clientes_id` ASC) ,
  CONSTRAINT `fk_emprestimos_livros1`
    FOREIGN KEY (`livros_id`)
    REFERENCES `mydb`.`livros` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_emprestimos_clientes1`
    FOREIGN KEY (`clientes_id`)
    REFERENCES `mydb`.`clientes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`dividas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`dividas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tipo` INT UNSIGNED NOT NULL COMMENT '1 para multa, 2 para extravio.',
  `valor` FLOAT UNSIGNED NOT NULL,
  `status` INT UNSIGNED NOT NULL COMMENT 'Status = 1 para multa corrente, 2 para multa congelada.',
  `emprestimos_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_dividas_emprestimos1_idx` (`emprestimos_id` ASC) ,
  CONSTRAINT `fk_dividas_emprestimos1`
    FOREIGN KEY (`emprestimos_id`)
    REFERENCES `mydb`.`emprestimos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mydb`.`livros_has_autores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`livros_has_autores` (
  `livros_id` INT NOT NULL,
  `autores_id` INT NOT NULL,
  PRIMARY KEY (`livros_id`, `autores_id`),
  INDEX `fk_livros_has_autores_autores1_idx` (`autores_id` ASC) ,
  INDEX `fk_livros_has_autores_livros1_idx` (`livros_id` ASC) ,
  CONSTRAINT `fk_livros_has_autores_livros1`
    FOREIGN KEY (`livros_id`)
    REFERENCES `mydb`.`livros` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_livros_has_autores_autores1`
    FOREIGN KEY (`autores_id`)
    REFERENCES `mydb`.`autores` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

/*
select * from clientes;
select * from livros;
insert into emprestimos (data_devolucao, data_emprestimo, status, livros_id, clientes_id) VALUES ('2021-02-27', '2021-02-22', 1, 5, 2);
select * from emprestimos;
update administradores SET imagem = 'mickey.png' where id = 4;
update emprestimos SET data_devolucao = '2021-02-14' where id = 4;
insert into usuario (login, senha, nivel_permissao) VALUES ('testando2', 'c6b9bb38836d669af113280219d46a05', 1);
insert into clientes (nome, data_nasc , email, imagem, usuario_login) VALUES ('Leitor SENAI', '1997-11-22', 'daniel_magalhaes@estudante.sc.senai.br', 'Donald.png', 'testando2');
*/