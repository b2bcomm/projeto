
CREATE DATABASE IF NOT EXISTS b2bcomm CHARSET utf8mb4;

USE b2bcomm;

CREATE TABLE IF NOT EXISTS anunciantes (
	id_anunciante INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    cm_nome_empresa VARCHAR(300) default '',
      cm_cnpj VARCHAR(300) default '',
        cm_email VARCHAR(300) default '',
          cm_nome_comerciante VARCHAR(300) default '',
            cm_telefone VARCHAR(300) default '',
              cm_cep VARCHAR(300) default '',
                cm_api VARCHAR(300) default ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='anunciantes';

INSERT INTO cm_nome_empresa (text) VALUES ('Kalunga');
INSERT INTO cm_nome_empresa (text) VALUES ('Armarinho Fernandes');
INSERT INTO cm_nome_empresa (text) VALUES ('JK papelaria');
INSERT INTO cm_nome_empresa (text) VALUES ('Papel matins');

SELECT * FROM anunciantes;