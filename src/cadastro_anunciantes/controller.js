const service = require('./service')
const servicePainel_adm = require('../painel_adm/service')

class Controller {
  async list (req, res) {
    const todoList = await service.findAll()
    res.json(todoList)
  }


  async listID (req, res) {

    const { todoId } = req.params
    //  console.log("foiii haha"+todoId)
    const ARRY_DADOS = await service.findOne(todoId)
    // res.json(todoList)
    // const ARRY_DADOS = await servicePainel_adm.TODO_LIST_BANCO_DE_DADOS_findAll();
   console.log('depois do select: ', ARRY_DADOS)

    res.render("painel_adm", {
      errorMessage: req.session.usuario, msgTeste: ARRY_DADOS.cm_nome_empresa, ARRY_DADOS
    });


  }

  create (req, res) {


    const { cm_nome_empresa } = req.body

    service.save({ cm_nome_empresa })

    res.status(201)
    res.json({ success: true })
  }

  edit (req, res) {
    const { todoId } = req.params
    const { text } = req.body

    service.save({ id: todoId, text })

    res.json({ success: true })
  }

  remove (req, res) {
    const { todoId } = req.params

    service.remove(todoId)

    res.json({ success: true })
  }
}

const TodoController = new Controller(service)

module.exports = TodoController
