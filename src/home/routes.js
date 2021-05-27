const express = require('express');
const router = express.Router();

const IndexHome = require('./controller')


  router.get('/', IndexHome.index) 

  router.get('/login', IndexHome.login) 


// router.get('/login', function(req, res, next) {
//     res.render('login', { title: 'Express' });
//   });


// router.get('/login', function(req, res, next) {
//     res.render('login', { title: 'Express' });
//   });

  
  

module.exports = router;
