const { QueryTypes } = require('sequelize')
const { sequelize } = require('../common/database')

const findAll = async () => {
  const query = 'SELECT * FROM participantes'

  const result = await sequelize.query(query, {
    raw: false,
    type: QueryTypes.SELECT
  })

  return result
}


const TODO_LISTfindAll = async id_participantes => {
console.log("chegou database" +id_participantes )
  const query = `SELECT * FROM participantes where id_participantes=("${id_participantes}")`
  // const query = `INSERT INTO participantes (cm_nome_empresa) VALUES ("${id_participantes}")`
  // const query = 'SELECT * FROM participantes'
  const result = await sequelize.query(query, {
    raw: false,
    type: QueryTypes.SELECT
  })

  return result
}




const create = async cm_nome_empresa => {
  const query = `INSERT INTO participantes (cm_nome_empresa) VALUES ("${cm_nome_empresa}")`

  const result = await sequelize.query(query, {
    raw: false,
    type: QueryTypes.INSERT
  })

  return result
}



module.exports = {
  findAll,
  create,
  TODO_LISTfindAll
}
