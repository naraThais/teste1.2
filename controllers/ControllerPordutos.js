const db = require('../config/db');

const dbProdutos ={

}
 dbProdutos.insert = async (req, _res) =>{
   let data = {
      "usario_id":req.body.usuario_id,
      "nome":req.body.nome,
      "quantidade":req.body.quantidade
   }
   const response= await db.query('insert into produtos set ?', data)
    console.log(req.body);
     _res.status(200).send(response)  
},

dbProdutos.select =  async(req, _res) =>{
   let response = await db.query('select * from produtos');
   _res.json(response[0]);
  },

  dbProdutos.update = async(req, _res) =>{
     let idProduto = req.params.idProduto;
     let data = {
      "usuario_id":req.body.usuario_id,
      "nome":req.body.nome,
      "quantidade":req.body.quantidade
     }
     const response = await db.query('UPDATE produtos SET ? WHERE idProduto = ?', [data, idProduto]);
     return _res.json(response);
  }

module.exports = dbProdutos

