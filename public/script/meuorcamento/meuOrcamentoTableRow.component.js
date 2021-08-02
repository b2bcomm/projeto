class MeuOrcamentoTableRow {
  static getActionButtons(user) {
    return `<a class="textxSmall text-dark" title="Remover Produto" data-user-id="${user.codigo}"><span style="font-family: FontAwesome;">&#xf1f8; </span> Remover Produto</a>`;
  }

  static getActionButtonsMenos(user) {
    return `<button class="btn btn-menos" data-user-id="${user.codigo}" style="height: 51px; font-size: 22px; border-bottom-right-radius: 0px; border-top-right-radius: 0px;"  type="button" id="btnMinus" data-type="minus" data-field=${user.quantidade}>-</button>`;
  }

  static getImputQuantidade(user) {
    return `<input class="form-control input-number text-center" style="height: 51px; width: 100px; font-size: 22px; border-radius: 0px;" type="number" name="txtQtde1" aria-label="Quantia" value=${user.quantidade} min="1" style="border: none;" data-fv-field=${user.quantidade}>`;
  }

  static getActionButtonsMais(user) {
    return `<button class="btn btn-mais" data-user-id="${user.codigo}" style="height: 51px; font-size: 22px; border-bottom-left-radius: 0px; border-top-left-radius: 0px;" type="button" id="btnPlus" data-type="plus" data-field=${user.quantidade}>+</button>`;
  }

  static render(user) {
    const ButtonsMais = MeuOrcamentoTableRow.getActionButtonsMais(user);
    const ImputQuantidade = MeuOrcamentoTableRow.getImputQuantidade(user);
    const ButtonsMenos = MeuOrcamentoTableRow.getActionButtonsMenos(user);
    const actionButtons = MeuOrcamentoTableRow.getActionButtons(user);
    var forne = [];
    user.fornecedor.forEach((item) => {
      var res =
        "<br/>" +
        `<span style="font-family: FontAwesome; font-size: 22px;">&#xf041; </span>` +
        item.cm_nome_empresa;
      res.replace(",", "");
      forne.push(res);
    });
    return `<tr data-user='${JSON.stringify(user)}'> \
    <td style="vertical-align: middle; border: 1px solid #C0C0C0;"> <div style="margin-left: 10px; display: flex; flex-direction: row; color: gray; vertical-align: middle;"><img style="width: 120px; height: 120px; border-radius: 50%;" src='${user.foto}' alt=""><div style="margin-left: 15px; display: flex; flex-direction: column;"><h4>${user.nome}</h4><h4>${user.descricao}</h4><h4>${user.marca}</h4></div></div></td>\
    <td style="overflow:auto; height:100%; vertical-align: middle; border: 1px solid #C0C0C0;">
    <div style="margin-left: 10px; display: flex;  color: gray; vertical-align: middle; margin: 5px;" ><h4 style="margin-top: 0px; margin-left: 10px;">${forne}</h4></div>
    </td>\
    <td style="vertical-align: middle; text-align: center; border: 1px solid #C0C0C0;"> <div style="margin-left: 50px; display: flex; flex-direction: row; flex-wrap: nowrap; align-content: stretch; justify-content: space-flex-start; align-items: baseline;">
    ${ButtonsMenos}
    ${ImputQuantidade}
    ${ButtonsMais}
    </div>
    <h4 style="margin-left: 10px; color: gray; margin-top: -25px;">${user.embalagem}</h4><h3>${actionButtons}</h3>
    </td>\
    </tr>`;
  }
}
