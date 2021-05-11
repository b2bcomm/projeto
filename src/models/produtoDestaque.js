const produtoDestaque = [
    {
       produto: "CADERNO 01X1 CAPA DURA 2021 SPIDER-MAN GAME 80FLS.",
       img: "https://www.reval.net/imagem/produtos/p/086995.jpg",
    },

    {
     produto: "PAPEL SULFITE A4 CHAMEX 75G 10 PCTX500 FLS",
     img: "https://www.reval.net/imagem/produtos/p/080000.jpg",
    },

    {
     produto: "KIT PROMOCIONAL CRISTAL AZUL C/50 L8P7",
     img: "https://www.reval.net/imagem/produtos/p/097720.jpg",
    },
   
    {
     produto: "HOT WHEELS HOT WHEELS C/5 CARRINHOS SORT.",
     img: "https://www.reval.net/imagem/produtos/p/016624.jpg",
    },

    {
     produto: "KIT PERIFERICOS TECLADO+MOUSE SEM FIO PRETO",
     img: "https://www.reval.net/imagem/produtos/p/069951.jpg",
    },
    {
     produto: "ARQUIVO MORTO PAPELAO KRAFT 35X13,3X24,7CM. 240G.",
     img: "https://www.reval.net/imagem/produtos/p/050268.jpg",
    }



]


const getAll = () => {
    return produtoDestaque
  }
  
  const getById = (id) => {
    return produtoDestaque[id]
  }
  
  module.exports = {
    getAll,
    getById
  }


