const express = require('express');
const router = express.Router();

const IndexHome = require('./controller')
router.get('/', IndexHome.index) 


module.exports = router;
