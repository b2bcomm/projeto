const { findAll, create } = require('./database')
const TodoModel = require('./model')


class Service {
  findAll () {
    // return findAll()
    console.log('chegou no model')
    return TodoModel.findAll()
  }

  findOne (id) {
    // return TODO_LIST.find(todo => todo.id === +id)
    return TodoModel.find(todo => todo.id === +id)
  }

  save (todoToSave) {

    const {cm_nome_empresa } = todoToSave
   create(cm_nome_empresa)

  }

  remove (todoId) {
    TODO_LIST = TODO_LIST.filter(todo => Number(todo.id) !== Number(todoId))
  }
}

const TodoService = new Service()

module.exports = TodoService
