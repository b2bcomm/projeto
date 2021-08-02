const { TODO_LISTfindAll, findAll, create } = require('./database')
const TodoModel = require('./model')


class Service {
  findAll () {
    // return findAll()
    console.log('chegou no model')
    // return TodoModel.findAll()
    return findAll()
  }

  findOne (id) {
    // return TODO_LIST.find(todo => todo.id === +id)
    // odoModel.find(todo => todo.id === +id)

    console.log("chegou no service "+ id)
    return TODO_LISTfindAll(id)
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


