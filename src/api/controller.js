const service = require("./service");
const servicelogin = require("../login/service");
const serviceHome = require("../home/service");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "portalb2bcomm@gmail.com",
    pass: "melquiades",
  },
});

  const organizar_e_enviar_orcamento = async function (id_anunciante,id_comprador, cm_statu) {
  const enviar_orcamento = await service.RESULTADO_ORCAMENTO(id_anunciante,id_comprador,cm_statu);
  const dados_comprador = await service.DADOS_COMPRADOR(id_comprador);
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); 
  var yyyy = today.getFullYear();
  let foto_anunciante = "";
  let nomedaempresa = "";
  let cnpj = "";
  let endereco = "";
  let bairro = "";
  let cidade = "";
  let estado = "";
  let telefone = "";
  let celular = "";
  let email = "";
  let cep = "";
  let numero_orcamento = dd + +mm + yyyy;
  let data_emissao = dd + "/" + mm + "/" + yyyy;
  let resultado_dia = parseInt(dd) + 3;
  let resultado_mes = mm;
  let nomedaempresa_comprador = "";
  let cnpj_comprador = "";
  let endereco_comprador = "";
  let bairro_comprador = "";
  let cidade_comprador = "";
  let estado_comprador = "";
  let telefone_comprador = "";
  let celular_comprador = "";
  let email_comprador = "";
  let cep_comprador = "";
  let lista_orcamento = "";
  if (resultado_dia > 30) {
    if (resultado_mes >= 10) {
      let res_mes = parseInt(mm) + 1;
      resultado_mes = res_mes;
    } else {
      let res_mes = parseInt(mm) + 1;
      resultado_mes = "0" + res_mes;
    }
    resultado_dia = "0" + 3;
  }
  let data_validade = resultado_dia + "/" + resultado_mes + "/" + yyyy;
  let contador = 0;
  let valor_total = 0;
  enviar_orcamento.forEach((item) => {
    contador += 1;
    valor_total += parseFloat(item.cm_custo);
    lista_orcamento += `<tr>
    <td style="text-align: center; width: 100px; border-top-style: solid; border-width: thin; border-color: #000000"> <h2>${contador}</h2></td>
    <td style="width: 787px; border-top-style: solid; border-width: thin; border-color: #000000; border-left-style: solid;"><h2>${item.cm_descricao}</h2></td>
    <td style="text-align: center; width: 172px; border-top-style: solid; border-width: thin; border-color: #000000; border-left-style: solid;"><h2>${item.cm_quantidade}</h2></td>
    <td style="text-align: right; border-top-style: solid; border-width: thin; border-color: #000000; border-left-style: solid;"><h2>${item.cm_custo}</h2></td>
    </tr>`;
    foto_anunciante = item.cm_url_foto;
    nomedaempresa = item.cm_nome_empresa;
    cnpj = item.cm_cnpj;
    cidade = item.cm_cidade;
    estado = item.cm_estado;
    telefone = item.cm_telefone;
    celular = item.cm_celular;
    email = item.cm_email;
    cep = item.cm_cep;
    endereco = item.cm_endereco;
    bairro = item.cm_bairro;
  });
  dados_comprador.forEach((item) => {
    nomedaempresa_comprador = item.cm_nome_empresa;
    cnpj_comprador = item.cm_cnpj;
    endereco_comprador = item.cm_endereco;
    bairro_comprador = item.cm_bairro;
    cidade_comprador = item.cm_cidade;
    estado_comprador = item.cm_estado;
    telefone_comprador = item.cm_telefone;
    celular_comprador = item.cm_celular;
    email_comprador = item.cm_email;
    cep_comprador = item.cm_cep;
  });
  const mailOptions = {
    from: "portalb2bcomm@gmail.com",
    to: email_comprador,
    subject: "Orçamento Portal B2B - " + nomedaempresa,
    html: `<div>
                <table  style="border-style: solid; border-width: inherit; border-color: #000000; width: 100%; ">
                    <tr>
                        <td  style="width: 409px; text-align: center;">
                            <img style="width: 200px; height: 100px;" src="${foto_anunciante}" /></td>
                        <td style="text-align: center;" >                       
                        <h1>${nomedaempresa}</h1> 
                          <h2>  <strong>CNPJ: ${cnpj} </strong> <br />
                              <strong>Endereço: ${endereco} </strong> <br />
                            ${bairro} -   ${cidade} - ${estado} / <strong>CEP:</strong> ${cep} <br />
                            <strong>TEL.: </strong> ${telefone} / <strong>CEL:</strong> ${celular}<br />
                            <strong>EMAIL:</strong> ${email} </td> <br /> </h2> 
                    </tr>
                    </table>
                    <br/>
                    <table  style="border-style: solid; border-width: inherit; border-color: #000000; width: 100%; ">
                    <tr>
                    <td style="border-width: thin; border-color: #000000; border-style: none solid none none; text-align: center;" >
                    <h2>Orçamento nº: <strong>${numero_orcamento}</strong></h2> 
                    </td>
                  <td style="border-width: thin; border-color: #000000; border-style: none solid none none; text-align: center;" >
                  <h2>Emitido em: <strong>${data_emissao}</strong></h2> 
                  </td>
                  <td style="text-align: center;" >
                  <h2>Válido até: <strong>${data_validade}</strong></h2> 
                  </td>
                  </tr>
                </table>
                
                <br/>
               <table style="border-style: solid; border-width: inherit; border-color: #000000; width: 100%; text-align: center;">
               <tr>
                           <td style="text-align: center;" >
                           <h1><strong>CLIENTE</strong></h1> 
                           </td>         
              </tr>
                              <tr>
                           <td style="border-style: solid none none none; border-width: thin; border-color: #000000; text-align: left;" >
                               <h2>NOME: <span style="font-weight: normal" >${nomedaempresa_comprador}</span></h2>                                  
                           </td>          

                    </tr>
                    <tr>
                           <td style="border-style: solid none none none; border-width: thin; border-color: #000000; text-align: left;" >
                               <h2>TELEFONE: <span style="font-weight: normal" >${telefone_comprador}&nbsp;&nbsp;&nbsp;&nbsp; </span>CELULAR: <span style="font-weight: normal" >${celular_comprador}</span></h2>                                   
                           </td>           
                    </tr>
                    <tr>
                           <td style="border-style: solid none none none; border-width: thin; border-color: #000000; text-align: left;" >
                                    <h2>CNPJ: <span style="font-weight: normal" >${cnpj_comprador}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    EMAIL: <span style="font-weight: normal" >${email_comprador}</span></h2>

                           </td>
                    </tr>
               <tr>
                           <td style="border-style: solid none solid none; border-width: thin; border-color: #000000; text-align: left;" >
                                   <h2>ENDEREÇO: <span style="font-weight: normal" >${endereco_comprador}</span></h2>
                           </td>
              </tr>

               <tr>
                           <td style="text-align: left;" >
                            <h2>BAIRRO: <span style="font-weight: normal" >${bairro_comprador}&nbsp;&nbsp;&nbsp;&nbsp; </span>  CIDADE: <span style="font-weight: normal" >${cidade_comprador}&nbsp;&nbsp;&nbsp;&nbsp; </span>ESTADO: <span style="font-weight: normal" >${estado_comprador}</span><span class="auto-style1">&nbsp;&nbsp;&nbsp;&nbsp; </span>CEP: <span class="auto-style1">${cep_comprador}</span>   </h2>
              </tr>
              </table>

            
              <br/>

              <table style="border-style: solid; border-width: inherit; border-color: #000000; width: 100%; text-align: center;">
<tr>
            <td style="text-align: center;" >
            <h1>ORÇAMENTO</h1> 
            </td>


</tr>
               <tr>
            <td style="border-style: solid none none none; border-width: thin; border-color: #000000; text-align: left;" >
                <table style="width: 100%;">

                    <tr>
                        <td style="text-align: center; width: 100px;" ><strong><h2>ITEM</h2></strong></td>
                        <td style="border-left-style: solid; border-width: thin; border-color: #000000"; text-align: center; width:'100%'><strong><h2 style="text-align: center;" >PRODUTO</h2></strong></td>
                        <td style="text-align: center; width: 172px; border-left-style: solid; border-width: thin; border-color: #000000"><strong><h2>QUANTIDADE</h2></strong></td>
                        <td style="text-align: center; border-left-style: solid; border-width: thin; border-color: #000000"><strong><h2>VALOR</h2> </strong></td>
                    </tr>

    
                       ${lista_orcamento}


                </table>
                   </td>



     </tr>
     

</table>

              
<br/>

<table style="border-style: solid; border-width: inherit; border-color: #000000; width: 100%;">
<tr>


<td style="border-width: thin; border-color: #000000; border-style: none solid none none; text-align: center;" >
<h2>SUBTOTAL: <span style="font-weight: normal;">0,00</span></h2> 
</td>


<td style="border-width: thin; border-color: #000000; border-style: none solid none none; text-align: center;" >
<h2>DESCONTO: <span style="font-weight: normal;">0,00</span></h2> 
</td>


<td style="border-width: thin; border-color: #000000; border-style: none solid none none; text-align: center;" >
<h2>ACRÉSCIMO: <span style="font-weight: normal;">0,00</span></h2> 
</td>

<td style="text-align: center; vertical-align:middle" >
<h2>TOTAL: <span style="font-weight: normal;">${valor_total},00</span></h2> 
</td>

</tr>
</table>


<br/>


<table style="border-style: solid; border-width: inherit; border-color: #000000; width: 100%; text-align: center;">
<tr>
            <td style="text-align: center;" >
            <h1>OBSERVAÇÕES</h1> 
            </td>


</tr>
  
               <tr>
            <td style="border-style: solid none none none; border-width: thin; border-color: #000000; text-align: left;" >
                <br />
                <h3>
                      &nbsp;&nbsp;Para validar o orçamento e necessário entrar em contato com o anunciante. Dessa forma você garante o produto e o valor do orçamento<br />
                      &nbsp;&nbsp;Verificar a forma de pagamento.<br />
                      &nbsp;&nbsp;Negocie o frete ou retire no local.<br /></h3>
                <br />
                <br />
          </td>
     </tr>

</table>


              </div>`,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("erro" + error);
    } else {
      console.log("Email enviado:" + info.response);
    }
  });
};

const controlador = {
  
  meusorcamento: async (req, res) => {
    let alert_front = "200";
    const meuorcamento = req.body;
    const consta_cnpj = await service.VERIFICA_SE_CONSTA_CNPJ(meuorcamento.cnpj);
    if (consta_cnpj == "") {
      const resposta_cadastro = await service.CADASTRAR_PARTICIPANTE(
        meuorcamento.cnpj,
        meuorcamento.email,
        meuorcamento.nomecompleto,
        meuorcamento.nomedaempresa,
        meuorcamento.senha,
        meuorcamento.telefone,
        meuorcamento.celular,
        meuorcamento.cep,
        meuorcamento.cidade,
        meuorcamento.estado,
        meuorcamento.endereco,
        meuorcamento.bairro
      );
      meuorcamento.produtos.forEach((item) => {
        let produtos = item.codigo;
        let desc_produto = item.nome + " " + item.descricao + " " + item.marca;
        let cm_quantidade = item.quantidade;
        let cm_status = "pendente";

        item.fornecedor.forEach((item2) => {
          let id_anunciante = item2.id_participantes;
          let cm_custo = item2.cm_valor;
          let codcomprador = resposta_cadastro[0];
          service.CADASTRAR_ORCAMENTO(
            codcomprador,
            produtos,
            id_anunciante,
            cm_status,
            cm_quantidade,
            cm_custo,
            desc_produto
          );
        });
      });


      let id_comprado = resposta_cadastro[0];
      let cm_statu = "pendente";
      const lista_anunciante = await service.LISTA_ANUNCIATE_PARA_ENVIAR(
        id_comprado,
        cm_statu
      );

      lista_anunciante.forEach((item) => {
        organizar_e_enviar_orcamento(
          item.id_anunciante,
          resposta_cadastro[0],
          "pendente"
        );


      });

      service.ATUALIZAR_STATUS_DO_ENVIOU(id_comprado);
      alert_front = "Cadastro feito com sucesso.";
    } else {
      alert_front ="Já consta cadastrado, feito por " + consta_cnpj[0].cm_nome_representante;
    }
    res.json(alert_front);
  },

  meusorcamentocadastrado: async (req, res) => {
    let alert_front = "200";
    const meuorcamento = req.body;
    console.log("chegouu a email:", meuorcamento.email);
    console.log("chegouu a senha:", meuorcamento.senha);
    const resultado_autenticacao = await servicelogin.autenticacaoAsuario(
      meuorcamento.email,
      meuorcamento.senha
    );
    let resultado = "nao";
    resultado_autenticacao.forEach((item) => {
      resultado = JSON.stringify(item.id_participantes);
    });
    req.session.usuario = resultado;

    if (resultado == "nao") {
      alert_front = "Usuário ou senha invalida.";
    } else {
      meuorcamento.produtos.forEach((item) => {
        let produtos = item.codigo;
        let desc_produto = item.nome + " " + item.descricao + " " + item.marca;
        let cm_quantidade = item.quantidade;
        let cm_status = "pendente";

        item.fornecedor.forEach((item2) => {
          let id_anunciante = item2.id_participantes;
          let cm_custo = item2.cm_valor;
          let codcomprador = resultado;
          service.CADASTRAR_ORCAMENTO(
            codcomprador,
            produtos,
            id_anunciante,
            cm_status,
            cm_quantidade,
            cm_custo,
            desc_produto
          );
        });
      });
      
      let id_comprado = resultado;
      let cm_statu = "pendente";
      const lista_anunciante = await service.LISTA_ANUNCIATE_PARA_ENVIAR(
        id_comprado,
        cm_statu
      );
      lista_anunciante.forEach((item) => {
        organizar_e_enviar_orcamento(
          item.id_anunciante,
          id_comprado,
          "pendente"
        );
      });
      service.ATUALIZAR_STATUS_DO_ENVIOU(id_comprado);
      alert_front = "Cadastro feito com sucesso.";
    }

    res.json(alert_front);
  },

  categorias: async (req, res) => {
    const { id } = req.params;
    let categoria = "";
    let ID_FILTRO = "";

    if (id == "U") {
      categoria = "Utilidades Domesticas";
      ID_FILTRO = "U - UTILIDADES DOMESTICAS";
    }
    if (id == "G") {
      categoria = "Cuidados Pessoais";
      ID_FILTRO = "G - CUIDADOS PESSOAIS";
    }
    if (id == "E") {
      categoria = "Eletroeletrônicos";
      ID_FILTRO = "E - ELETROELETRONICOS";
    }
    if (id == "I") {
      categoria = "Informática";
      ID_FILTRO = "I - INFORMATICA";
    }
    if (id == "B") {
      categoria = "Kids";
      ID_FILTRO = "B - KIDS";
    }
    if (id == "C") {
      categoria = "Puericultura";
      ID_FILTRO = "C - PUERICULTURA";
    }
    if (id == "S") {
      categoria = "Papelaria e Escritório";
      ID_FILTRO = "S - PAPELARIA E ESCRITORIO";
    }
    if (id == "H") {
      categoria = "Hobby Art";
      ID_FILTRO = "H - HOBBY-ART";
    }
    if (id == "A") {
      categoria = "Coffee Break e Descartáveis";
      ID_FILTRO = "A - COFFEE BREAK E DESCARTAVEIS";
    }
    if (id == "F") {
      categoria = "Festas";
      ID_FILTRO = "F - FESTAS";
    }

    res.json(await serviceHome.LIST_GERAL_PRODUTO_FILTRO_CATEGORIA(ID_FILTRO));
  },

  index: async (req, res) => {
    res.json(await service.LIST_GERAL_PRODUTO());
  },

  produtoID: async (req, res) => {
    let { codigo } = req.params;
    res.json(await serviceHome.RESPOSTA_PRODUTO(codigo));
  },

  anuncianteID: async (req, res) => {
    let { codigo } = req.params;
    res.json(await serviceHome.RESPOSTA_ANUNCIANTES(codigo));
  },

};

module.exports = controlador;
