const { QueryTypes } = require('sequelize')
const { sequelize } = require('../common/database')

const findAll = async () => {
  const query = 'SELECT * FROM anunciantes'

  const result = await sequelize.query(query, {
    raw: false,
    type: QueryTypes.SELECT
  })

  return result
}



const create = async cm_nome_empresa => {
  const query = `INSERT INTO anunciantes (cm_nome_empresa) VALUES ("${cm_nome_empresa}")`

  const result = await sequelize.query(query, {
    raw: false,
    type: QueryTypes.INSERT
  })

  return result
}



module.exports = {
  findAll,
  create
}
