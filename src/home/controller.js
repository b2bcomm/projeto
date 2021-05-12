const service = require('./service')

const destaque = service.LIST_DESTAQUE_findAll();
const masprocurado = service.LIST_MAIS_PROCURADO_findAll();
const novos = service.LIST_NOVOS_findAll();

const controlador = {
  

    index: (req, res)=> {          
          res.render('index', { 
            destaque, masprocurado, novos 
          });
    },
      
    



};


module.exports = controlador