const { Sequelize } = require('sequelize')
const config = require('../../../settings/index')

const { drive, host, port, database, user, password } = config.database

const sequelize = new Sequelize(database, user, password, {
  host,
  port,
  dialect: drive
})

let isConnected = false

const connect = async () => {
  if (isConnected) {
    return sequelize
  }

  try {
    await sequelize.authenticate()
    console.info('Conectado com sucesso!!!')
    isConnected = true
    return sequelize
  } catch (error) {
    console.error('Banco de dados nao conectado!!!', error)
  }
}

connect()

module.exports = {
  connect,
  sequelize
}
