const {autenticarUsuario, cadastroUsuario} = require("./database");

class Service {
  autenticacaoAsuario(email, password) {
    const resut = autenticarUsuario(email, password);
    return resut;
  }

  cadastrarUsuario(nome, email, password) {
    const resut = cadastroUsuario(nome, email, password);
    return resut;
  }
}

const UserService = new Service();

module.exports = UserService;
