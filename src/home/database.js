const { QueryTypes } = require("sequelize");
const { sequelize } = require("../common/database");

const autenticarUsuario = async (cm_email, cm_senha) => {
  const query = `SELECT cm_senha FROM participantes where cm_email=("${cm_email}") and cm_senha=("${cm_senha}")`;
  const result = await sequelize.query(query, {
    raw: false,
    type: QueryTypes.SELECT,
  });
  return result;
};

const LIST_GERAL_PRODUTO_FILTRO_CATEGORIA = async (id) => {
  const query = `SELECT foto, marca, nome, descricao, codigo FROM produtos where lista=("${id}")`;
  const result = await sequelize.query(query, {
    raw: false,
    type: QueryTypes.SELECT,
  });
  return result;
};

const LIST_GERAL_PRODUTO = async () => {
  const query = `SELECT  foto, marca, nome, descricao, codigo FROM produtos`;
  const result = await sequelize.query(query, {
    raw: false,
    type: QueryTypes.SELECT,
  });
  return result;
};

const LIST_GERAL_RESPOSTA_ANUNCIANTES = async (id) => {
  const query = `SELECT C.cm_url_foto, C.cm_nome_empresa, C.cm_historia, F.cm_valor, F.cm_quantidade FROM participantes AS C INNER JOIN anunciante AS F ON C.id_participantes = F.cod_anunciante where F.cod_produto=("${id}") ORDER BY F.cm_valor`;
  const result = await sequelize.query(query, {
    raw: false,
    type: QueryTypes.SELECT,
  });
  return result;
};

const RESPOSTA_ANUNCIANTES = async (id) => {
  const query = `SELECT C.id_participantes, C.cm_url_foto, C.cm_nome_empresa, F.cm_valor, C.cm_email FROM participantes AS C INNER JOIN anunciante AS F ON C.id_participantes = F.cod_anunciante where F.cod_produto=("${id}") ORDER BY F.cm_valor`;
  const result = await sequelize.query(query, {
    raw: false,
    type: QueryTypes.SELECT,
  });
  return result;
};

const RESPOSTA_PRODUTO = async (id) => {
  const query = `SELECT * FROM produtos where codigo=("${id}")`;
  const result = await sequelize.query(query, {
    raw: false,
    type: QueryTypes.SELECT,
  });
  return result;
};

const LIST_GERAL_PRODUTO_FILTRO_CODIGO = async (id) => {
  const query = `SELECT * FROM produtos where codigo=("${id}")`;
  const result = await sequelize.query(query, {
    raw: false,
    type: QueryTypes.SELECT,
  });
  return result;
};

const CONTADOR_MAIS_PROCURADO = async (id) => {
  const query = `SELECT contador_procurado FROM produtos where codigo=("${id}")`;
  const result = await sequelize.query(query, {
    raw: false,
    type: QueryTypes.SELECT,
  });
  return result;
};

const LIST_MAIS_PROCURADO_CLASSIFICADO = async () => {
  const query = `SELECT contador_procurado, codigo, descricao, foto FROM produtos order by contador_procurado desc LIMIT 12`;
  const result = await sequelize.query(query, {
    raw: false,
    type: QueryTypes.SELECT,
  });
  return result;
};

const ATUALIZAR_QTD_PESQUISA = async (todoId, qtd) => {
  const query = `UPDATE produtos SET contador_procurado=${qtd} WHERE codigo=${todoId}`;
  const result = await sequelize.query(query, {
    raw: false,
    type: QueryTypes.UPDATE,
  });
  return result;
};

const create = async (cm_nome_empresa) => {
  const query = `INSERT INTO anunciantes (cm_nome_empresa) VALUES ("${cm_nome_empresa}")`;
  const result = await sequelize.query(query, {
    raw: false,
    type: QueryTypes.INSERT,
  });
  return result;
};

const cadastrar_produtos_api_no_banco_de_dados = async (id_anunciante,codigo,codigoBarras,nome,descricao,marca,procedencia,peso,altura,largura, comprimento, preco, cfop, cst, icms, estoque, embalagem,referencia, ncm, lista, infAdicionais, origem, origemDescricao, dataAlteracaoImagem, foto) => {
  id_anunciante = 3;
  const query = `INSERT INTO produtos (id_anunciante, codigo, codigoBarras, nome, descricao, marca, procedencia, peso, altura, largura, comprimento, preco, cfop, cst, icms, estoque, embalagem, referencia, ncm, lista, infAdicionais, origem, origemDescricao, dataAlteracaoImagem, foto) VALUES (("${id_anunciante}"), ("${codigo}"), ("${codigoBarras}"), ("${nome}"), ("${descricao}"), ("${marca}"), ("${procedencia}"), ("${peso}"), ("${altura}"), ("${largura}"), ("${comprimento}"), ("${preco}"), ("${cfop}"), ("${cst}"), ("${icms}"), ("${estoque}"), ("${embalagem}"), ("${referencia}"), ("${ncm}"), ("${lista}"), ("${infAdicionais}"), ("${origem}"), ("${origemDescricao}"), ("${dataAlteracaoImagem}"), ("${foto}"))`;
  const result = await sequelize.query(query, {
    raw: false,
    type: QueryTypes.INSERT,
  });
  return result;
};

const cadastrarAnunciante = async (cod_produto, cod_anunciante, cm_valor) => {
  const query = `INSERT INTO anunciante (cod_produto, cod_anunciante, cm_valor) VALUES (("${cod_produto}"), ("${cod_anunciante}"), ("${cm_valor}"))`;
  const result = await sequelize.query(query, {
    raw: false,
    type: QueryTypes.INSERT,
  });
  return result;
};

const cadastroUsuario = async (cm_nome_empresa, cm_email, cm_senha) => {
  const query = `INSERT INTO compradores (cm_nome_empresa, cm_email, cm_senha) VALUES (("${cm_nome_empresa}"), ("${cm_email}"), ("${cm_senha}"))`;
  const result = await sequelize.query(query, {
    raw: false,
    type: QueryTypes.INSERT,
  });

  return result;
};

module.exports = {
  autenticarUsuario,
  create,
  cadastroUsuario,
  LIST_GERAL_PRODUTO,
  LIST_GERAL_PRODUTO_FILTRO_CODIGO,
  cadastrarAnunciante,
  LIST_GERAL_RESPOSTA_ANUNCIANTES,
  LIST_GERAL_PRODUTO_FILTRO_CATEGORIA,
  RESPOSTA_ANUNCIANTES,
  RESPOSTA_PRODUTO,
  CONTADOR_MAIS_PROCURADO,
  ATUALIZAR_QTD_PESQUISA,
  LIST_MAIS_PROCURADO_CLASSIFICADO,
};
