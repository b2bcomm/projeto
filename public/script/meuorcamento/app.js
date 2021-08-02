function exibir() {
  document.getElementById("divSouCadastrado").style.display = "block";
  document.getElementById("divCadastraSe").style.display = "none";
  document.getElementById("soucadastrado").style.background = "#EEE";
  document.getElementById("cadastrese").style.background = "#FFF";
  document.getElementById("cadastrese").style.borderColor = "#C0C0C0 #C0C0C0 #C0C0C0 #C0C0C0";
  document.getElementById("soucadastrado").style.borderColor ="#C0C0C0 #C0C0C0 #EEE #C0C0C0";
}

function ocultar() {
  document.getElementById("divSouCadastrado").style.display = "none";
  document.getElementById("divCadastraSe").style.display = "block";
  document.getElementById("soucadastrado").style.background = "#FFF";
  document.getElementById("cadastrese").style.background = "#EEE";
  document.getElementById("cadastrese").style.borderColor = "#C0C0C0 #C0C0C0 #EEE #C0C0C0";
  document.getElementById("soucadastrado").style.borderColor = "#C0C0C0 #C0C0C0 #C0C0C0 #C0C0C0";
}

async function ChamaApiCnpj(cnpj) {
  $.ajax({
    url: "https://www.receitaws.com.br/v1/cnpj/" + cnpj,
    dataType: "jsonp",
    type: "GET",
    success: function (data) {
       document.getElementById("txtCnpjVis_icone").className ="form-control-feedback fa fa-check";
      document.getElementById("txtCnpjVis_icone").style.display = "block";
      document.getElementById("txtCnpjVis_borda").className = "form-group mb-1 has-feedback has-success";
      document.getElementById("txtCnpjVis_msg").className ="form-group mb-1 has-feedback has-success";
      document.getElementById("txtEmailVis").value = data.email;
      document.getElementById("txtEmailVis_icone").className = "form-control-feedback fa fa-check";
      document.getElementById("txtEmailVis_icone").style.display = "block";
      document.getElementById("txtEmailVis_borda").className ="form-group mb-1 has-feedback has-success";
      document.getElementById("txtEmailVis_msg").className ="form-group mb-1 has-feedback has-success";
      document.getElementById("txtNomeVis").value = data.qsa[0].nome;
      document.getElementById("txtNomeVis_icone").className ="form-control-feedback fa fa-check";
      document.getElementById("txtNomeVis_icone").style.display = "block";
      document.getElementById("txtNomeVis_borda").className = "form-group mb-1 has-feedback has-success";
      document.getElementById("txtNomeVis_msg").className ="form-group mb-1 has-feedback has-success";
      document.getElementById("txtEmpresaVis").value = data.nome;
      document.getElementById("txtEmpresaVisicone").className = "form-control-feedback fa fa-check";
      document.getElementById("txtEmpresaVisicone").style.display = "block";
      document.getElementById("txtEmpresaVis_borda").className ="form-group mb-1 has-feedback has-success";
      document.getElementById("txtEmpresaVis_msg").className ="form-group mb-1 has-feedback has-success";
      document.getElementById("txtTelefoneVis").value = data.telefone;
      document.getElementById("txtTelefoneVisicone").className ="form-control-feedback fa fa-check";
      document.getElementById("txtTelefoneVisicone").style.display = "block";
      document.getElementById("txtTelefoneVis_borda").className ="form-group mb-1 has-feedback has-success";
      document.getElementById("txtTelefoneVis_msg").className ="form-group mb-1 has-feedback has-success";
      document.getElementById("txtCepVis").value = data.cep;
      document.getElementById("txtCepVisicone").className ="form-control-feedback fa fa-check";
      document.getElementById("txtCepVisicone").style.display = "block";
      document.getElementById("txtCepVis_borda").className = "form-group mb-1 has-feedback has-success";
      document.getElementById("txtCepVis_msg").className ="form-group mb-1 has-feedback has-success";
      document.getElementById("txtCidadeVis").value = data.municipio;
      document.getElementById("txtCidadeVisicone").className ="form-control-feedback fa fa-check";
      document.getElementById("txtCidadeVisicone").style.display = "block";
      document.getElementById("txtCidadeVis_borda").className ="form-group mb-1 has-feedback has-success";
      document.getElementById("txtCidadeVis_msg").className ="form-group mb-1 has-feedback has-success";
      document.getElementById("cboEstadoVis").value = data.uf;
      document.getElementById("cboEstadoVisicone").className ="form-control-feedback fa fa-check";
      document.getElementById("cboEstadoVisicone").style.display = "block";
      document.getElementById("cboEstadoVis_borda").className ="form-group mb-1 has-feedback has-success";
      document.getElementById("cboEstadoVis_msg").className ="form-group mb-1 has-feedback has-success";
      document.getElementById("txtEnderecoVis").value =data.logradouro + " Nº " + data.numero;
      document.getElementById("txtEnderecoVisicone").className ="form-control-feedback fa fa-check";
      document.getElementById("txtEnderecoVisicone").style.display = "block";
      document.getElementById("txtEnderecoVis_borda").className ="form-group mb-1 has-feedback has-success";
      document.getElementById("txtEndereco_msg").className ="form-group mb-1 has-feedback has-success";
      document.getElementById("txtBairroVis").value = data.bairro;
      document.getElementById("txtBairroVisicone").className ="form-control-feedback fa fa-check";
      document.getElementById("txtBairroVisicone").style.display = "block";
      document.getElementById("txtBairroVis_borda").className ="form-group mb-1 has-feedback has-success";
      document.getElementById("txtBairroVis_msg").className ="form-group mb-1 has-feedback has-success";
      document.getElementById("txtSenhaVisicone").className ="form-control-feedback fa fa-times";
      document.getElementById("txtSenhaVisicone").style.display = "block";
      document.getElementById("txtSenhaVis_borda").className = "form-group mb-1 has-feedback has-error";
      document.getElementById("txtSenhaVis_msg").className = "form-group mb-1 has-feedback has-error";
      document.getElementById("txtSenhaVis_msg").style.display = "block";
      document.getElementById("txtSenhaVis").focus();
    },
  });
}

async function postMeusOrcamento(payload) {
  const resp_api = await OrcamentoService.postOrcamento(payload);
  if (resp_api[0] == "C") {
    await sleep(2000);
    document.getElementById("alertMsg").style.display = "none";
    document.getElementById("modald").style.display = "none";
    document.getElementById("orcamento").style.display = "none";
    document.getElementById("confirmar").style.display = "block";
    let vazia = [];
    sessionStorage.setItem("items", JSON.stringify(vazia));
    await sleep(10000);
    window.location.href = "/";
  } else {
    await sleep(2000);
    document.getElementById("alertMsg").style.display = "block";
    document.getElementById("imputMsg").innerHTML = resp_api;
    document.getElementById("modald").style.display = "none";
    document.getElementById("cadastro").style.display = "block";
  }
}

async function postMeusOrcamentoCadastrado(payload) {
    const resp_api = await OrcamentoService.postOrcamentoCadastrado(payload);
    if (resp_api[0] == "C") {
      await sleep(2000);
      document.getElementById("alertMsg").style.display = "none";
      document.getElementById("modald").style.display = "none";
      document.getElementById("orcamento").style.display = "none";
      document.getElementById("confirmar").style.display = "block";
      let vazia = [];
      sessionStorage.setItem("items", JSON.stringify(vazia));
      await sleep(10000);
      window.location.href = "/";
    } else {
      await sleep(2000);
      document.getElementById("alertMsg").style.display = "block";
      document.getElementById("imputMsg").innerHTML = resp_api;
      document.getElementById("modald").style.display = "none";
      document.getElementById("cadastro").style.display = "block";
    }
}

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function bindEvents() {
  var btn_login = document.getElementById("btn_login");
  btn_login.addEventListener("click", () => {  
    
    if (document.getElementById("txtEmailCad").value == "") {
        document.getElementById("alertMsg").style.display = "block";
        document.getElementById("imputMsg").innerHTML = "Digitar o email.";
    }else{

        if (document.getElementById("txtSenhaCad").value == "") {
            document.getElementById("alertMsg").style.display = "block";
            document.getElementById("imputMsg").innerHTML = "Digitar a senha.";
        }else{
          document.getElementById("modald").style.display = "block";
          document.getElementById("cadastro").style.display ="none";
            let dadosOrcamentoCadastrado = {
                email: document.getElementById("txtEmailCad").value,
                senha: document.getElementById("txtSenhaCad").value,
                produtos: JSON.parse(sessionStorage.getItem("items")),
              };
              postMeusOrcamentoCadastrado(dadosOrcamentoCadastrado);
        }
    }
  });

  var btn_finalizar_orcamento = document.getElementById("finalizar");
  btn_finalizar_orcamento.addEventListener("click", () => {
    window.location.href = "/";
  });

  var btn_finalizar_orcamento = document.getElementById("btn_finalizar_orcamento");
  btn_finalizar_orcamento.addEventListener("click", () => {
    if (document.getElementById("txtCnpjVis").value == "") {
      document.getElementById("alertMsg").style.display = "block";
      document.getElementById("imputMsg").innerHTML = "Digitar o cnpj.";
      return;
    } else {
      if (document.getElementById("txtEmailVis").value == "") {
        document.getElementById("alertMsg").style.display = "block";
        document.getElementById("imputMsg").innerHTML = "Digitar o email.";
      } else {
        if (document.getElementById("txtNomeVis").value == "") {
          document.getElementById("alertMsg").style.display = "block";
          document.getElementById("imputMsg").innerHTML = "Digitar o nome.";
        } else {
          if (document.getElementById("txtEmpresaVis").value == "") {
            document.getElementById("alertMsg").style.display = "block";
            document.getElementById("imputMsg").innerHTML ="Digitar a empresa.";
          } else {
            if (document.getElementById("txtSenhaVis").value == "") {
              document.getElementById("alertMsg").style.display = "block";
              document.getElementById("imputMsg").innerHTML ="Digitar a senha.";
              document.getElementById("txtSenhaVis").focus();
            } else {
              if (document.getElementById("txtTelefoneVis").value == "") {
                document.getElementById("alertMsg").style.display = "block";
                document.getElementById("imputMsg").innerHTML ="Digitar o telefone.";
              } else {
                if (document.getElementById("txtCepVis").value == "") {
                  document.getElementById("alertMsg").style.display = "block";
                  document.getElementById("imputMsg").innerHTML ="Digitar o CEP.";
                } else {
                  if (document.getElementById("txtCidadeVis").value == "") {
                    document.getElementById("alertMsg").style.display = "block";
                    document.getElementById("imputMsg").innerHTML ="Digitar a cidade.";
                  } else {
                    if (document.getElementById("cboEstadoVis").value == "") {
                      document.getElementById("alertMsg").style.display ="block";
                      document.getElementById("imputMsg").innerHTML ="Selecione o estado.";
                    } else {
                      document.getElementById("modald").style.display = "block";
                      document.getElementById("cadastro").style.display ="none";
                      let dadosOrcamento = {
                        cnpj: document.getElementById("txtCnpjVis").value,
                        email: document.getElementById("txtEmailVis").value,
                        nomecompleto: document.getElementById("txtNomeVis").value,
                        nomedaempresa:document.getElementById("txtEmpresaVis").value,
                        senha: document.getElementById("txtSenhaVis").value,
                        telefone:document.getElementById("txtTelefoneVis").value,
                        celular: document.getElementById("txtCelularVis").value,
                        cep: document.getElementById("txtCepVis").value,
                        cidade: document.getElementById("txtCidadeVis").value,
                        estado: document.getElementById("cboEstadoVis").value,
                        endereco: document.getElementById("txtEnderecoVis").value,
                        bairro: document.getElementById("txtBairroVis").value,
                        produtos: JSON.parse(sessionStorage.getItem("items")),
                      };
                      postMeusOrcamento(dadosOrcamento);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  });

  var btn = document.getElementsByClassName("textxSmall text-dark");
  for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", async (event) => {
      const { userId } = event.currentTarget.dataset;
      const meus_orcamento = [];
      JSON.parse(sessionStorage.getItem("items")).forEach((item) => {
        meus_orcamento.push(item);
      });
      Object.prototype.removeItem = function (key, value) {
        if (value == undefined) return;
        for (var i in this) {
          if (this[i][key] == value) {
            this.splice(i, 1);
          }
        }
      };
      meus_orcamento.removeItem("codigo", userId);
      sessionStorage.setItem("items", JSON.stringify(meus_orcamento));
      renderScreen();
    });
  }

  var btnMenos = document.getElementsByClassName("btn btn-menos");
  var btnMais = document.getElementsByClassName("btn btn-mais");

  for (var i = 0; i < btnMenos.length; i++) {
    btnMenos[i].addEventListener("click", async (event) => {
      const { userId, field } = event.currentTarget.dataset;
      function quantides_menos(qtd) {
        var resultado = parseInt(qtd) - 1;
        if (resultado == 0) {
          resultado = 1;
        }
        return resultado;
      }
      const codigo = userId;
      const meus_orcamento = [];
      JSON.parse(sessionStorage.getItem("items")).forEach((item) => {
        meus_orcamento.push(item);
      });
      index = meus_orcamento.findIndex((todo) => todo.codigo === codigo);
      meus_orcamento[index].quantidade = quantides_menos(field);
      sessionStorage.setItem("items", JSON.stringify(meus_orcamento));
      renderScreen();
    });
  }

  for (var i = 0; i < btnMais.length; i++) {
    btnMais[i].addEventListener("click", async (event) => {
      const { userId, field } = event.currentTarget.dataset;
      function quantides_mais(qtd) {
        var resultado = parseInt(qtd) + 1;
        return resultado;
      }
      const codigo = userId;
      const meus_orcamento = [];
      JSON.parse(sessionStorage.getItem("items")).forEach((item) => {
        meus_orcamento.push(item);
      });
      index = meus_orcamento.findIndex((todo) => todo.codigo === codigo);
      meus_orcamento[index].quantidade = quantides_mais(field);
      sessionStorage.setItem("items", JSON.stringify(meus_orcamento));
      renderScreen();
    });
  }

  const txtCnpjVis = document.getElementById("txtCnpjVis");
  txtCnpjVis.addEventListener("keyup", (event) => {
    const term = event.currentTarget.value;
    if (term.length == 14) {
      ChamaApiCnpj(term);
    }
  });

  const txtEmailVis = document.getElementById("txtEmailVis");
  txtEmailVis.addEventListener("keyup", (event) => {
    const term = event.currentTarget.value;
    const var_txtEmpresaVisicone = document.getElementById("txtEmailVis_icone");
    var_txtEmpresaVisicone.style = "block";
    const var_txtEmpresaVis_borda = document.getElementById("txtEmailVis_borda");
    const var_txtEmpresaVis_msg = document.getElementById("txtEmailVis_msg");
    if (term == "") {
      var_txtEmpresaVisicone.className = "form-control-feedback fa fa-times";
      var_txtEmpresaVis_borda.className ="form-group mb-1 has-feedback has-error";
      var_txtEmpresaVis_msg.style.display = "block";
    } else {
      var_txtEmpresaVisicone.className = "form-control-feedback fa fa-check";
      var_txtEmpresaVis_borda.className = "form-group mb-1 has-feedback has-success";
      var_txtEmpresaVis_msg.style.display = "none";
    }
    if (term.includes("@")) {
    } else {
      var_txtEmpresaVisicone.className = "form-control-feedback fa fa-times";
      var_txtEmpresaVis_borda.className = "form-group mb-1 has-feedback has-error";
      var_txtEmpresaVis_msg.style.display = "block";
    }
  });


  const txtEmpresaVis = document.getElementById("txtEmpresaVis");
  txtEmpresaVis.addEventListener("keyup", (event) => {
    const term = event.currentTarget.value;
    const var_txtEmpresaVisicone = document.getElementById("txtEmpresaVisicone");
    var_txtEmpresaVisicone.style = "block";
    const var_txtEmpresaVis_borda = document.getElementById("txtEmpresaVis_borda"
    );
    const var_txtEmpresaVis_msg = document.getElementById("txtEmpresaVis_msg");
    if (term == "") {
      var_txtEmpresaVisicone.className = "form-control-feedback fa fa-times";
      var_txtEmpresaVis_borda.className = "form-group mb-1 has-feedback has-error";
      var_txtEmpresaVis_msg.style.display = "block";
    } else {
      var_txtEmpresaVisicone.className = "form-control-feedback fa fa-check";
      var_txtEmpresaVis_borda.className = "form-group mb-1 has-feedback has-success";
      var_txtEmpresaVis_msg.style.display = "none";
    }
  });

  const txtSenhaVis = document.getElementById("txtSenhaVis");
  txtSenhaVis.addEventListener("keyup", (event) => {
    const term = event.currentTarget.value;
    const var_txtEmpresaVisicone = document.getElementById("txtSenhaVisicone");
    var_txtEmpresaVisicone.style = "block";
    const var_txtEmpresaVis_borda = document.getElementById("txtSenhaVis_borda");
    const var_txtEmpresaVis_msg = document.getElementById("txtSenhaVis_msg");
    if (term == "") {
      var_txtEmpresaVisicone.className = "form-control-feedback fa fa-times";
      var_txtEmpresaVis_borda.className = "form-group mb-1 has-feedback has-error";
      var_txtEmpresaVis_msg.style.display = "block";
    } else {
      var_txtEmpresaVisicone.className = "form-control-feedback fa fa-check";
      var_txtEmpresaVis_borda.className = "form-group mb-1 has-feedback has-success";
      var_txtEmpresaVis_msg.style.display = "none";
    }
  });

  const txtEmailCad = document.getElementById("txtEmailCad");
  txtEmailCad.addEventListener("keyup", (event) => {
    const term = event.currentTarget.value;
    const var_txtEmpresaVisicone = document.getElementById("txtEmailCad_icone");
    var_txtEmpresaVisicone.style = "block";
    const var_txtEmpresaVis_borda = document.getElementById("txtEmailCad_borda");
    const var_txtEmpresaVis_msg = document.getElementById("txtEmailCad_msg");
    if (term == "") {
      var_txtEmpresaVisicone.className = "form-control-feedback fa fa-times";
      var_txtEmpresaVis_borda.className ="form-group mb-1 has-feedback has-error";
      var_txtEmpresaVis_msg.style.display = "block";
    } else {
      var_txtEmpresaVisicone.className = "form-control-feedback fa fa-check";
      var_txtEmpresaVis_borda.className = "form-group mb-1 has-feedback has-success";
      var_txtEmpresaVis_msg.style.display = "none";
    }
    if (term.includes("@")) {
    } else {
      var_txtEmpresaVisicone.className = "form-control-feedback fa fa-times";
      var_txtEmpresaVis_borda.className = "form-group mb-1 has-feedback has-error";
      var_txtEmpresaVis_msg.style.display = "block";
    }
  });

  const txtSenhaCad = document.getElementById("txtSenhaCad");
  txtSenhaCad.addEventListener("keyup", (event) => {
    const term = event.currentTarget.value;
    const var_txtEmpresaVisicone = document.getElementById("txtSenhaCadVisicone");
    var_txtEmpresaVisicone.style = "block";
    const var_txtEmpresaVis_borda = document.getElementById("txtSenhaCad_borda");
    const var_txtEmpresaVis_msg = document.getElementById("txtSenhaCad_msg");
    if (term == "") {
      var_txtEmpresaVisicone.className = "form-control-feedback fa fa-times";
      var_txtEmpresaVis_borda.className = "form-group mb-1 has-feedback has-error";
      var_txtEmpresaVis_msg.style.display = "block";
    } else {
      var_txtEmpresaVisicone.className = "form-control-feedback fa fa-check";
      var_txtEmpresaVis_borda.className = "form-group mb-1 has-feedback has-success";
      var_txtEmpresaVis_msg.style.display = "none";
    }
  });
}

function mountHTMLL(produtos) {
  const rows = produtos.map(MeuOrcamentoTableRow.render).join("");
  const tBody = document.getElementById("tabe");
  tBody.innerHTML = rows;
}

async function renderScreen() {
  mountHTMLL(JSON.parse(sessionStorage.getItem("items")));
  document.getElementById("divSouCadastrado").style.display = "none";
  document.getElementById("divCadastraSe").style.display = "block";
  document.getElementById("soucadastrado").style.background = "#FFF";
  document.getElementById("cadastrese").style.background = "#EEE";
  document.getElementById("cadastrese").style.zIndex = 1;
  document.getElementById("txtEmpresaVis_msg").style.display = "none";
  document.getElementById("txtEmpresaVisicone").style.display = "none";
  document.getElementById("txtEmailVis_msg").style.display = "none";
  document.getElementById("txtEmailVis_icone").style.display = "none";
  document.getElementById("txtSenhaVis_msg").style.display = "none";
  document.getElementById("txtEmailCad_msg").style.display ="none";
  document.getElementById("txtSenhaCad_msg").style.display ="none";
  bindEvents();
}

async function initialize() {
  await renderScreen();
}

window.onload = function () {
  initialize();
};
