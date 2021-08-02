const { QueryTypes } = require("sequelize");
const { sequelize } = require("../common/database");

const autenticarUsuario = async (cm_email, cm_senha) => {
  const query = `SELECT id_participantes, cm_senha, cm_nome_representante FROM participantes where cm_email=("${cm_email}") and cm_senha=("${cm_senha}")`;
  const result = await sequelize.query(query, {
    raw: false,
    type: QueryTypes.SELECT,
  });
  return result;
};

const cadastroUsuario = async (cm_nome_representante, cm_email, cm_senha) => {
  const query = `INSERT INTO participantes (cm_nome_representante, cm_email, cm_senha) VALUES (("${cm_nome_representante}"), ("${cm_email}"), ("${cm_senha}"))`;
  const result = await sequelize.query(query, {
    raw: false,
    type: QueryTypes.INSERT,
  });
  return result;
};

module.exports = {
  autenticarUsuario,
  cadastroUsuario,
};
