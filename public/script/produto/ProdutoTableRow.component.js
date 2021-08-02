class UserTableRow {
  static getActionButtons(user) {
    return `<a href="/orcamento/${user.codigo}" class="btn btn-primary"> <span style="margin-top: 0px; font-family: FontAwesome;">&#xF002; </span>Fazer Orçamento</a>`;
  }

  static render(user) {
    const actionButtons = UserTableRow.getActionButtons(user);
    return `<tr data-user='${JSON.stringify(user)}'> \
      <td style="border-bottom-style: solid; border-bottom-width: 2px; border-bottom-color: #C0C0C0; justify-content: center; text-align: center; height: 155px;"> <img style="width: 150px; height: 150px; border-radius: 50%;" src=${user.foto} alt=""></td> \
      <td style="vertical-align: top; border-bottom-style: solid; border-bottom-width: 2px; border-bottom-color: #C0C0C0"><br/> ${user.codigoBarras} <br/> ${user.descricao} <br/> ${user.nome} <br/> ${user.marca} <br/> ${actionButtons}</td> \
     </tr>`;
  }
}
