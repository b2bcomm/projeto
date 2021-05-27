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
    // const { id_anunciante, cm_nome_empresa } = todoToSave
    const {cm_nome_empresa } = todoToSave
    // if (id_anunciante) {
    //   const index = TodoModel.findIndex(anunciantes => Number(anunciantes.id_anunciante) === Number(id_anunciante))
    //   TodoModel[index] = todoToSave
    // } else {
       create(cm_nome_empresa)
    // }

    // return todoToSave
  }

  remove (todoId) {
    TODO_LIST = TODO_LIST.filter(todo => Number(todo.id) !== Number(todoId))
  }
}

const TodoService = new Service()

module.exports = TodoService
