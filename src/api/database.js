const { QueryTypes } = require("sequelize");
const { sequelize } = require("../common/database");

const LIST_GERAL_PRODUTO = async () => {
  const query = `SELECT * FROM produtos`;

  const result = await sequelize.query(query, {
    raw: false,
    type: QueryTypes.SELECT,
  });
  return result;
};

const VERIFICA_SE_CONSTA_CNPJ = async (CNPJ) => {
  const query = `SELECT cm_nome_representante FROM participantes where cm_cnpj=${CNPJ}`;

  const result = await sequelize.query(query, {
    raw: false,
    type: QueryTypes.SELECT,
  });

  return result;
};

const CADASTRAR_PARTICIPANTE = async (
  cnpj,
  email,
  nomecompleto,
  nomedaempresa,
  senha,
  telefone,
  celular,
  cep,
  cidade,
  estado,
  endereco,
  bairro
) => {
  const query = `INSERT INTO participantes (cm_nome_empresa, cm_cnpj, cm_nome_representante, cm_email, cm_senha, cm_telefone, cm_celular, cm_cep, cm_cidade, cm_estado, cm_endereco, cm_bairro) VALUES ("${nomedaempresa}", "${cnpj}", "${nomecompleto}", "${email}", "${senha}", "${telefone}", "${celular}", "${cep}", "${cidade}", "${estado}", "${endereco}", "${bairro}")`;

  const result = await sequelize.query(query, {
    raw: false,
    type: QueryTypes.INSERT,
  });

  return result;
};

const CADASTRAR_ORCAMENTO = async (
  id_comprador,
  id_produto,
  id_anunciante,
  cm_status,
  cm_quantidade,
  cm_custo,
  desc_produto
) => {
  // console.log("cheguuu data base", id_comprador, id_produto, id_anunciante, cm_status, cm_quantidade,  cm_custo)

  const query = `INSERT INTO orcamentos (id_comprador, id_produto, id_anunciante, cm_status, cm_quantidade, cm_custo, cm_descricao) VALUES (${id_comprador}, ${id_produto}, ${id_anunciante}, "${cm_status}", "${cm_quantidade}", "${cm_custo}", "${desc_produto}")`;

  const result = await sequelize.query(query, {
    raw: false,
    type: QueryTypes.INSERT,
  });

  return result;
};

const LISTA_ANUNCIATE_PARA_ENVIAR = async (id_comprado, cm_statu) => {
  const query = `SELECT DISTINCT id_anunciante FROM orcamentos where id_comprador=${id_comprado} and cm_status='${cm_statu}'`;

  const result = await sequelize.query(query, {
    raw: false,
    type: QueryTypes.SELECT,
  });

  return result;
};

const RESULTADO_ORCAMENTO = async (id_anunciante, id_comprador, cm_statu) => {
  const query = `SELECT * FROM orcamentos AS C INNER JOIN participantes AS F ON C.id_anunciante = F.id_participantes where C.id_anunciante=${id_anunciante} and C.id_comprador=${id_comprador} and C.cm_status='${cm_statu}'`;
  const result = await sequelize.query(query, {
    raw: false,
    type: QueryTypes.SELECT,
  });

  return result;
};

const DADOS_ANUNCIANTES = async (id_anunciante) => {
  const query = `SELECT * FROM orcamentos where id_anunciante=${id_anunciante} and id_comprador=${id_comprador} and cm_status='${cm_statu}'`;

  const result = await sequelize.query(query, {
    raw: false,
    type: QueryTypes.SELECT,
  });

  return result;
};

const DADOS_COMPRADOR = async (id_anunciante) => {
  const query = `SELECT * FROM participantes where id_participantes=${id_anunciante}`;

  const result = await sequelize.query(query, {
    raw: false,
    type: QueryTypes.SELECT,
  });

  return result;
};

const ATUALIZAR_STATUS_DO_ENVIOU = async (id_comprado) => {
  const query = `UPDATE orcamentos SET cm_status='enviado' where id_comprador=${id_comprado} and cm_status='pendente'`;

  const result = await sequelize.query(query, {
    raw: false,
    type: QueryTypes.UPDATE,
  });

  return result;
};


module.exports = {
  LIST_GERAL_PRODUTO,
  VERIFICA_SE_CONSTA_CNPJ,
  CADASTRAR_PARTICIPANTE,
  CADASTRAR_ORCAMENTO,
  LISTA_ANUNCIATE_PARA_ENVIAR,
  RESULTADO_ORCAMENTO,
  DADOS_ANUNCIANTES,
  DADOS_COMPRADOR,
  ATUALIZAR_STATUS_DO_ENVIOU,
};
