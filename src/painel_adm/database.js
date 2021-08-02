const { QueryTypes } = require("sequelize");
const { sequelize } = require("../common/database");

const SelecionarParticipantes = async () => {
  const query = `SELECT * FROM participantes`;
  const result = await sequelize.query(query, {
    raw: false,
    type: QueryTypes.SELECT,
  });

  return result;
};

const TODO_LISTfindAll = async (id_participantes) => {
  console.log("chegou database" + id_participantes);
  const query = `SELECT * FROM participantes where id_participantes=("${id_participantes}")`;
  const result = await sequelize.query(query, {
    raw: false,
    type: QueryTypes.SELECT,
  });
  return result;
};

const atualizarCadastroDasEmpresas = async (
  id_participantes,
  cm_nome_empresa,
  cm_cnpj,
  cm_nome_representante,
  cm_email,
  cm_senha,
  createdAt,
  updatedAt,
  cm_url_foto
) => {
  const query = `UPDATE participantes SET cm_nome_empresa=("${cm_nome_empresa}"), cm_cnpj=("${cm_cnpj}"), cm_nome_representante=("${cm_nome_representante}"), cm_email=("${cm_email}"), cm_senha=("${cm_senha}"), cm_url_foto=("${cm_url_foto}"), updatedAt=("${updatedAt}") WHERE id_participantes=("${id_participantes}")`;
  const result = await sequelize.query(query, {
    raw: false,
    type: QueryTypes.UPDATE,
  });
  return result;
};

const autenticarUsuario = async (cm_email, cm_senha) => {
  const query = `SELECT cm_senha FROM participantes where cm_email=("${cm_email}") and cm_senha=("${cm_senha}")`;
  const result = await sequelize.query(query, {
    raw: false,
    type: QueryTypes.SELECT,
  });
  return result;
};

const create = async (cm_nome_empresa) => {
  const query = `INSERT INTO participantes (cm_nome_empresa) VALUES ("${cm_nome_empresa}")`;
  const result = await sequelize.query(query, {
    raw: false,
    type: QueryTypes.INSERT,
  });
  return result;
};

module.exports = {
  autenticarUsuario,
  create,
  SelecionarParticipantes,
  TODO_LISTfindAll,
  atualizarCadastroDasEmpresas,
};
