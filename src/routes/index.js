var express = require('express');
var router = express.Router();





/* GET home page. */
router.get('/', function(req, res, next) {
const destaque = [
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

const masprocurado = [
    {
       produto: "CADERNO 10X1 CAPA DURA ZIP 160FLS",
       img: "https://www.reval.net/imagem/produtos/p/094259.jpg",
    },

    {
     produto: "CANETA ESFEROGRAFICA BPS-GRIP-M 1.0 AZUL",
     img: "https://www.reval.net/imagem/produtos/p/089732.jpg",
    },

    {
     produto: "BLOCO PARA EDUCACAO ARTISTICA BASIC ART MILIMETRADO A3 50FLS",
     img: "https://www.reval.net/imagem/produtos/p/088098.jpg",
    },
   
    {
     produto: "CADERNO INTELIGENTE MEDIO CARAMEL 80FLS.",
     img: "https://www.reval.net/imagem/produtos/p/088277.jpg",
    },

    {
     produto: "CARGA CANETA ESFEROGRAFICA CROSS PRETO BL.C/01",
     img: "https://www.reval.net/imagem/produtos/p/090580.jpg",
    },
    {
     produto: "PAPEL SULFITE A4 CHAMEQUINHO 40K 120GRS. BRANCO",
     img: "https://www.reval.net/imagem/produtos/p/088117.jpg",
    }



]

 const novos = [
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

  res.render('index', { 
    destaque, masprocurado, novos 
  });
});



router.get('/quem_somos', function(req, res, next) {
  res.render('quem_somos', { title: 'Express' });
});


router.get('/faq', function(req, res, next) {
  res.render('faq', { title: 'Express' });
});


router.get('/politica_de_privacidade', function(req, res, next) {
  res.render('politica_de_privacidade', { title: 'Express' });
});

router.get('/fale_conosco', function(req, res, next) {
  res.render('fale_conosco', { title: 'Express' });
});


router.get('/criar_conta_usuario', function(req, res, next) {
  res.render('criar_conta_usuario', { title: 'Express' });
});


router.get('/anunciar', function(req, res, next) {
  res.render('anunciar', { title: 'Express' });
});

router.get('/meus_orcamentos', function(req, res, next) {
  res.render('meus_orcamentos', { title: 'Express' });
});


router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});




module.exports = router;
