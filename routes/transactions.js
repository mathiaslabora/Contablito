const express = require('express');
const router = express.Router();
const controller = require('../controllers/transactions.controller')
const transaction = require('../models/transaction')


 router.post('/', controller.transaction)
 

 router.get('/', (async (req, res)=>{
    try {
        const getTrans = await transaction.find();
        console.log(getTrans)
        res.json(getTrans)
        res.redirect('/index2');
    } catch (error) {
        console.log(error)
    }
    }))

router.delete('/:id', async(req, res)=>{
const id = req.params.id
console.log(id)
try {
    const transactDB = await transaction.findByIdAndDelete({ _id: id})

    if (transactDB) {
        res.json({
            estado: true,
            mensaje: 'Eliminado!'
        
        })
      
    } else {
        res.json({
            estado: false,
            mensaje: 'Fallo al eliminar!'
        })
    }
} catch (error) {
    console.log(error)
}


})


 module.exports = router