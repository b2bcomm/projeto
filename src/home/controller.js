const service = require("./service");

const destaque = service.LIST_DESTAQUE_findAll();
const novos = service.LIST_NOVOS_findAll();
let meus_orcamento = []; 

const controlador = {
  remover_o_produto_meusorcamentos: async (req, res) => {
    let { codigo } = req.params;
    Object.prototype.removeItem = function (key, value) {
      if (value == undefined) return;
      for (var i in this) {
        if (this[i][key] == value) {
          this.splice(i, 1);
        }
      }
    };

    meus_orcamento.removeItem("codigo", codigo);
    res.render("meus_orcamentos", {
      meus_orcamento,
    });
  },

  meusorcamentos: async (req, res) => {
    let codigo = req.body.codigo;
    let txtQtde1 = req.body.txtQtde1;
    const resposta_do_anunciante = await service.RESPOSTA_ANUNCIANTES(codigo);
    let foto = "";
    let nome = "";
    let descricao = "";
    let marca = "";
    let embalagem = "";
    const resposta_do_produto = await service.RESPOSTA_PRODUTO(codigo);
    resposta_do_produto.forEach((item) => {
      foto = item.foto;
      nome = item.nome;
      descricao = item.descricao;
      marca = item.marca;
      embalagem = item.embalagem;
    });
    const novoProduto = {
      codigo: codigo,
      fornecedor: resposta_do_anunciante,
      foto: foto,
      nome: nome,
      descricao: descricao,
      marca: marca,
      quantidade: txtQtde1,
      embalagem: embalagem,
    };
    meus_orcamento.push(novoProduto);
    res.render("meus_orcamentos", {
      meus_orcamento,
    });
  },

  Getmeusorcamentos: async (req, res) => {
    meus_orcamento = "";
    res.render("meus_orcamentos", {
      meus_orcamento,
    });
  },


  quem_somos: async (req, res) =>{
    res.render("quem_somos")
  },

  faq: async (req, res) =>{
    res.render("faq")
  },


  fale_conosco: async (req, res) =>{
    res.render("fale_conosco")
  },

  

  indexorcamento: async (req, res) => {
    const { todoId } = req.params;
    const contador_mais_procurador = await service.CONTADOR_MAIS_PROCURADO(todoId);
    let qtd = 1;
    contador_mais_procurador.forEach((item) => {
      qtd = 1 + item.contador_procurado;
    });
    service.ATUALIZAR_QTD_PESQUISA(todoId, qtd);
    const produto_classificado_por_codigo = await service.LIST_GERAL_PRODUTO_FILTRO_CODIGO(todoId);
    res.render("orcamento", {
      produto_classificado_por_codigo,
    });
  },

  index: async (req, res) => {
    const mais_procurado_classificado = await service.LIST_MAIS_PROCURADO_CLASSIFICADO();
    const masprocurado = [];
    let contador = 0;
    mais_procurado_classificado.forEach((item) => {
      if (contador == 0) {
        const novoProduto = {
          produto: item.descricao,
          img: item.foto,
          class: "carousel-item active",
          codigo: item.codigo,
        };
        masprocurado.push(novoProduto);
        contador = 1;
      } else {
        const novoProduto = {
          produto: item.descricao,
          img: item.foto,
          class: "carousel-item",
          codigo: item.codigo,
        };
        masprocurado.push(novoProduto);
      }
    });
    res.render("index", {
      destaque,
      masprocurado,
      novos,
    });
  },

  categorias: async (req, res) => {
    const { id } = req.params;
    let categoria = "";
    if (id == "T") {
      categoria = "Categoria: Todas as Categorias";
    }
    if (id == "U") {
      categoria = "Categoria: Utilidades Domesticas";
    }
    if (id == "G") {
      categoria = "Categoria: Cuidados Pessoais";
    }
    if (id == "E") {
      categoria = "Categoria: Eletroeletrônicos";
    }
    if (id == "I") {
      categoria = "Categoria: Informática";
    }
    if (id == "B") {
      categoria = "Categoria: Kids";
    }
    if (id == "C") {
      categoria = "Categoria: Puericultura";
    }
    if (id == "S") {
      categoria = "Categoria: Papelaria e Escritório";
    }
    if (id == "H") {
      categoria = "Categoria: Hobby Art";
    }
    if (id == "A") {
      categoria = "Categoria: Coffee Break e Descartáveis";
    }
    if (id == "F") {
      categoria = "Categoria: Festas";
    }
    res.render("orcamento_produtos", {
      categoria,
      id,
    });
  },

  login: (req, res) => {
    res.render("login", { errorMessage: "" });
  },

  cadastro: (req, res) => {
    res.render("cadastro", { errorMessage: "" });
  },
};

module.exports = controlador;
