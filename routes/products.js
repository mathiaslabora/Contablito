const express = require('express');
const router = express.Router();

const product = require('../models/product')
const controller = require('../controllers/products.controller')

 router.post('/', controller.product)
 


 router.get('/', (async (req, res)=>{
    try {
        const allProdDB = await product.find();
        res.json(allProdDB)
        res.redirect('/index2');
    } catch (error) {
        console.log(error)
    }
    }))
 module.exports = router