const { Sequelize } = require('sequelize')
const { sequelize } = require('../common/database')

// modelo da tabela do banco de dados
const TodoModel = sequelize.define(
  'anunciantes',
  {
  
  
    id_anunciante: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    cm_nome_empresa: Sequelize.STRING,
    cm_cnpj: Sequelize.STRING


  },





  // usou timestamps pq nao tenho a coluna data `createdAt`, `updatedAt` ( as colunas sao otimas para rastreabilidade dos dados) dessa form ignora a nessecidade das colunas   
  {
    timestamps: false
  }




 
  )

  module.exports = TodoModel