const {
  atualizarCadastroDasEmpresas,
  TODO_LISTfindAll,
  SelecionarParticipantes,
  autenticarUsuario,
} = require("./database");


const LIST_DESTAQUE = [
  {
    id: 1,
    produto: "CADERNO 01X1 CAPA DURA 2021 SPIDER-MAN GAME 80FLS.",
    img: "https://www.reval.net/imagem/produtos/p/086995.jpg",
    class: "carousel-item active",
  },

  {
    id: 2,
    produto: "PAPEL SULFITE A4 CHAMEX 75G 10 PCTX500 FLS",
    img: "https://www.reval.net/imagem/produtos/p/080000.jpg",
    class: "carousel-item",
  },

  {
    id: 3,
    produto: "KIT PROMOCIONAL CRISTAL AZUL C/50 L8P7",
    img: "https://www.reval.net/imagem/produtos/p/097720.jpg",
    class: "carousel-item",
  },

  {
    id: 4,
    produto: "HOT WHEELS HOT WHEELS C/5 CARRINHOS SORT.",
    img: "https://www.reval.net/imagem/produtos/p/016624.jpg",
    class: "carousel-item",
  },

  {
    id: 5,
    produto: "KIT PERIFERICOS TECLADO+MOUSE SEM FIO PRETO",
    img: "https://www.reval.net/imagem/produtos/p/069951.jpg",
    class: "carousel-item",
  },
  {
    id: 6,
    produto: "ARQUIVO MORTO PAPELAO KRAFT 35X13,3X24,7CM. 240G.",
    img: "https://www.reval.net/imagem/produtos/p/050268.jpg",
    class: "carousel-item",
  },
];

const LIST_MAIS_PROCURADO = [
  {
    id: 1,
    produto: "CADERNO 10X1 CAPA DURA ZIP 160FLS",
    img: "https://www.reval.net/imagem/produtos/p/094259.jpg",
    class: "carousel-item active",
  },

  {
    id: 2,
    produto: "CANETA ESFEROGRAFICA BPS-GRIP-M 1.0 AZUL",
    img: "https://www.reval.net/imagem/produtos/p/089732.jpg",
    class: "carousel-item",
  },

  {
    id: 3,
    produto: "BLOCO PARA EDUCACAO ARTISTICA ART MILIMETRADO",
    img: "https://www.reval.net/imagem/produtos/p/088098.jpg",
    class: "carousel-item",
  },

  {
    id: 4,
    produto: "CADERNO INTELIGENTE MEDIO CARAMEL 80FLS.",
    img: "https://www.reval.net/imagem/produtos/p/088277.jpg",
    class: "carousel-item",
  },

  {
    id: 5,
    produto: "CARGA CANETA ESFEROGRAFICA CROSS PRETO BL.C/01",
    img: "https://www.reval.net/imagem/produtos/p/090580.jpg",
    class: "carousel-item",
  },
  {
    id: 6,
    produto: "PAPEL SULFITE A4 CHAMEQUINHO 40K 120GRS. BRANCO",
    img: "https://www.reval.net/imagem/produtos/p/088117.jpg",
    class: "carousel-item",
  },
];

const LIST_NOVOS = [
  {
    id: 1,
    produto: "ALCOOL 70 GEL ANTISSEPTICO 70° 500ML",
    img: "https://www.reval.net/imagem/produtos/p/085610.jpg",
    class: "carousel-item active",
  },

  {
    id: 2,
    produto: "CHINELO HAVAIANAS INFANTIL MINECRAFT KIDS",
    img: "https://www.reval.net/imagem/produtos/p/082966.jpg",
    class: "carousel-item",
  },

  {
    id: 3,
    produto: "BLOCO PARA EDUCACAO ARTISTICA BASIC ART",
    img: "https://www.reval.net/imagem/produtos/p/088098.jpg",
    class: "carousel-item",
  },

  {
    id: 4,
    produto: "BLOCO DE RECADO AUTOADESIVO CAPRICHO",
    img: "https://www.reval.net/imagem/produtos/p/086703.jpg",
    class: "carousel-item",
  },

  {
    id: 5,
    produto: "JOGO DE CARTAS COLOR ADDICT NOW UNITED",
    img: "https://www.reval.net/imagem/produtos/p/087406.jpg",
    class: "carousel-item",
  },
  {
    id: 6,
    produto: "HOT WHEELS HW BASICO SORTIDO- MASTER",
    img: "https://www.reval.net/imagem/produtos/p/030000.jpg",
    class: "carousel-item",
  },
];

const TODO_LIST_ARRAY = [
  {
    id_participantes: 123,
    cm_nome_empresa: "empresa 1",
    cm_cnpj: 1234,
    cm_nome_representante: "elton",
    createdAt: "21/07/1985",
    cm_senha: 1344,
  },
  {
    id_participantes: 124,
    cm_nome_empresa: "empresa 2",
    cm_cnpj: 455,
    cm_nome_representante: "bruno",
    createdAt: "21/07/1985",
    cm_senha: 1344,
  },
  {
    id_participantes: 125,
    cm_nome_empresa: "empresa 3",
    cm_cnpj: 133234,
    cm_nome_representante: "alison",
    createdAt: "21/07/1985",
    cm_senha: 1344,
  },
  {
    id_participantes: 126,
    cm_nome_empresa: "empresa 4",
    cm_cnpj: 4545,
    cm_nome_representante: "leandro",
    createdAt: "21/07/1985",
    cm_senha: 1344,
  },
  {
    id_participantes: 127,
    cm_nome_empresa: "empresa 5",
    cm_cnpj: 6565,
    cm_nome_representante: "patrick",
    createdAt: "21/07/1985",
    cm_senha: 1344,
  },
  {
    id_participantes: 127,
    cm_nome_empresa: "empresa 6",
    cm_cnpj: 34554,
    cm_nome_representante: "andre",
    createdAt: "21/07/1985",
    cm_senha: 1344,
  },
  {
    id_participantes: 127,
    cm_nome_empresa: "empresa 7",
    cm_cnpj: 5454,
    cm_nome_representante: "jose",
    createdAt: "21/07/1985",
    cm_senha: 1344,
  },
];

class Service {

  AtualizarEmpresa(body) {
    let today = new Date();
    let getmes = today.getMonth();
    let reusltadorMes = getmes + 1;
    let mes = reusltadorMes;
    if (reusltadorMes < 10) {
      mes = "0" + reusltadorMes;
    }
    let dataTime =
      today.getFullYear() +
      "-" +
      mes +
      "-" +
      today.getDate() +
      " " +
      today.getHours() +
      ":" +
      today.getMinutes() +
      ":" +
      today.getSeconds();

    const resut = atualizarCadastroDasEmpresas(
      body.id_participantes,
      body.cm_nome_empresa,
      body.cm_cnpj,
      body.cm_nome_representante,
      body.cm_email,
      body.cm_senha,
      body.createdAt,
      dataTime,
      body.cm_url_foto
    );
    return resut;
  }

  findOne(id) {
    return TODO_LISTfindAll(id);
  }

  TODO_LIST_BANCO_DE_DADOS_findAll() {
    const resut = SelecionarParticipantes();
    return resut;
  }

  autenticacaoAsuario(email, password) {
    const resut = autenticarUsuario(email, password);
    console.log("ccegou no service: " + resut);
    return resut;
  }

  TODO_LIST_ARRAY_findAll() {
    return TODO_LIST_ARRAY;
  }

  LIST_DESTAQUE_findAll() {
    return LIST_DESTAQUE;
  }

  LIST_DESTAQUE_findByProduto(produto) {
    return LIST_DESTAQUE.find((destaque) => destaque.produto === produto);
  }

  LIST_DESTAQUE_findById(id) {
    return LIST_DESTAQUE.find((destaque) => destaque.id === +id);
  }

  LIST_DESTAQUE_save(destaqueToSave) {
    const { id, produto, img } = destaqueToSave;

    if (id) {
      index = TODO_LIST.findIndex((destaque) => destaque.id === id);
      LIST_DESTAQUE[index] = destaqueToSave;
    } else {
      LIST_DESTAQUE.push({ id: Math.random(), produto, img });
    }

    return destaqueToSave;
  }

  LIST_MAIS_PROCURADO_findAll() {
    return LIST_MAIS_PROCURADO;
  }

  LIST_MAIS_PROCURADO_findByProduto(produto) {
    return LIST_MAIS_PROCURADO.find(
      (procurado) => procurado.produto === produto
    );
  }

  LIST_MAIS_PROCURADO_findById(id) {
    return LIST_MAIS_PROCURADO.find((procurado) => procurado.id === +id);
  }

  LIST_MAIS_PROCURADO_save(procuradoToSave) {
    const { id, produto, img } = procuradoToSave;

    if (id) {
      index = TODO_LIST.findIndex((procurado) => procurado.id === id);
      LIST_MAIS_PROCURADO[index] = procuradoToSave;
    } else {
      LIST_MAIS_PROCURADO.push({ id: Math.random(), produto, img });
    }

    return procuradoToSave;
  }

  LIST_NOVOS_findAll() {
    return LIST_NOVOS;
  }

  LIST_NOVOS_findByProduto(produto) {
    return LIST_NOVOS.find((novos) => novos.produto === produto);
  }

  LIST_NOVOS_findById(id) {
    return LIST_NOVOS.find((novos) => novos.id === +id);
  }

  LIST_NOVOS_save(novosToSave) {
    const { id, produto, img } = novosToSave;

    if (id) {
      index = TODO_LIST.findIndex((novos) => novos.id === id);
      LIST_NOVOS[index] = novosToSave;
    } else {
      LIST_NOVOS.push({ id: Math.random(), produto, img });
    }

    return novosToSave;
  }
}

const UserService = new Service();

module.exports = UserService;
