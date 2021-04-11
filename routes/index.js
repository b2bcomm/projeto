var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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
