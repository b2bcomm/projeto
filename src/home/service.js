
   const LIST_DESTAQUE = [
        {
           id: 1,
           produto: "CADERNO 01X1 CAPA DURA 2021 SPIDER-MAN GAME 80FLS.",
           img: "https://www.reval.net/imagem/produtos/p/086995.jpg",
        },
   
        {
            id: 2,
            produto: "PAPEL SULFITE A4 CHAMEX 75G 10 PCTX500 FLS",
            img: "https://www.reval.net/imagem/produtos/p/080000.jpg",
        },
   
        {
            id: 3,
            produto: "KIT PROMOCIONAL CRISTAL AZUL C/50 L8P7",
            img: "https://www.reval.net/imagem/produtos/p/097720.jpg",
        },
       
        {
            id: 4,
            produto: "HOT WHEELS HOT WHEELS C/5 CARRINHOS SORT.",
            img: "https://www.reval.net/imagem/produtos/p/016624.jpg",
        },
   
        {
            id: 5,
            produto: "KIT PERIFERICOS TECLADO+MOUSE SEM FIO PRETO",
            img: "https://www.reval.net/imagem/produtos/p/069951.jpg",
        },
        {
            id: 6,
            produto: "ARQUIVO MORTO PAPELAO KRAFT 35X13,3X24,7CM. 240G.",
            img: "https://www.reval.net/imagem/produtos/p/050268.jpg",
        }
   
   
   
   ]
   
   const LIST_MAIS_PROCURADO = [
       {
        id: 1,
          produto: "CADERNO 10X1 CAPA DURA ZIP 160FLS",
          img: "https://www.reval.net/imagem/produtos/p/094259.jpg",
       },
   
       {
        id: 2,
        produto: "CANETA ESFEROGRAFICA BPS-GRIP-M 1.0 AZUL",
        img: "https://www.reval.net/imagem/produtos/p/089732.jpg",
       },
   
       {
        id: 3,
        produto: "BLOCO PARA EDUCACAO ARTISTICA BASIC ART MILIMETRADO A3 50FLS",
        img: "https://www.reval.net/imagem/produtos/p/088098.jpg",
       },
      
       {
        id: 4,
        produto: "CADERNO INTELIGENTE MEDIO CARAMEL 80FLS.",
        img: "https://www.reval.net/imagem/produtos/p/088277.jpg",
       },
   
       {
        id: 5,
        produto: "CARGA CANETA ESFEROGRAFICA CROSS PRETO BL.C/01",
        img: "https://www.reval.net/imagem/produtos/p/090580.jpg",
       },
       {
        id: 6,
        produto: "PAPEL SULFITE A4 CHAMEQUINHO 40K 120GRS. BRANCO",
        img: "https://www.reval.net/imagem/produtos/p/088117.jpg",
       }
   
   
   
   ]
   
   const LIST_NOVOS = [
     {
        produto: "ALCOOL 70 GEL ANTISSEPTICO 70° 500ML",
        img: "https://www.reval.net/imagem/produtos/p/085610.jpg",
     },
   
     {
      produto: "CHINELO HAVAIANAS INFANTIL MINECRAFT KIDS 23/4 VERDE",
      img: "https://www.reval.net/imagem/produtos/p/082966.jpg",
     },
   
     {
      produto: "BLOCO PARA EDUCACAO ARTISTICA BASIC ART MILIMETRADO A3 50FLS",
      img: "https://www.reval.net/imagem/produtos/p/088098.jpg",
     },
    
     {
      produto: "BLOCO DE RECADO AUTOADESIVO CAPRICHO 70X70MM 100F.4CORES",
      img: "https://www.reval.net/imagem/produtos/p/086703.jpg",
     },
   
     {
      produto: "JOGO DE CARTAS COLOR ADDICT NOW UNITED",
      img: "https://www.reval.net/imagem/produtos/p/087406.jpg",
     },
     {
      produto: "HOT WHEELS HW BASICO SORTIDO- MASTER C/72",
      img: "https://www.reval.net/imagem/produtos/p/030000.jpg",
     }
   
   
   
   ]
   

  
  class Service {


  //////////////////////////////////////////////////LIST_DESTAQUE//////////////////////////////////////////////////////


    LIST_DESTAQUE_findAll() {
        return LIST_DESTAQUE
    }
    
    LIST_DESTAQUE_findByProduto(produto) {
        return LIST_DESTAQUE.find(destaque =>  destaque.produto === produto)
    }

    LIST_DESTAQUE_findById(id) {
        return LIST_DESTAQUE.find(destaque =>  destaque.id === +id)
    }
  
    // LIST_DESTAQUE_create(user) {
    //     LIST_DESTAQUE.push(user)
    // }

    LIST_DESTAQUE_save(destaqueToSave) {
        const { id, produto, img, } = destaqueToSave
    
        if (id) {
          index = TODO_LIST.findIndex(destaque => destaque.id === id)
          LIST_DESTAQUE[index] = destaqueToSave
        } else {
          LIST_DESTAQUE.push({ id: Math.random(), produto, img })
        }
    
        return destaqueToSave
      }

///////////////////////////////////////////////////LIST_MAIS_PROCURADO/////////////////////////////////////////////////////


LIST_MAIS_PROCURADO_findAll() {
    return LIST_MAIS_PROCURADO
}

LIST_MAIS_PROCURADO_findByProduto(produto) {
    return LIST_MAIS_PROCURADO.find(procurado =>  procurado.produto === produto)
}

LIST_MAIS_PROCURADO_findById(id) {
    return LIST_MAIS_PROCURADO.find(procurado =>  procurado.id === +id)
}

// LIST_MAIS_PROCURADO_create(user) {
//     LIST_MAIS_PROCURADO.push(user)
// }

LIST_MAIS_PROCURADO_save(procuradoToSave) {
    const { id, produto, img, } = procuradoToSave

    if (id) {
      index = TODO_LIST.findIndex(procurado => procurado.id === id)
      LIST_MAIS_PROCURADO[index] = procuradoToSave
    } else {
        LIST_MAIS_PROCURADO.push({ id: Math.random(), produto, img })
    }

    return procuradoToSave
  }



  ////////////////////////////////////////////////////LIST_NOVOS////////////////////////////////////////////////////


LIST_NOVOS_findAll() {
    return LIST_NOVOS
}

LIST_NOVOS_findByProduto(produto) {
    return LIST_NOVOS.find(novos =>  novos.produto === produto)
}

LIST_NOVOS_findById(id) {
    return LIST_NOVOS.find(novos =>  novos.id === +id)
}

// LIST_MAIS_PROCURADO_create(user) {
//     LIST_MAIS_PROCURADO.push(user)
// }

LIST_NOVOS_save(novosToSave) {
    const { id, produto, img, } = novosToSave

    if (id) {
      index = TODO_LIST.findIndex(novos => novos.id === id)
      LIST_NOVOS[index] = novosToSave
    } else {
        LIST_NOVOS.push({ id: Math.random(), produto, img })
    }

    return novosToSave
  }








  }
  
  const UserService = new Service()
  
  module.exports = UserService