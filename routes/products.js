const express = require('express');
const router = express.Router();

const product = require('../models/product')

/* router.get('/', async (req, res)=>{
    try {
        const pDB = await product.find()
        console.log(pDB)
        res.render('index');
    } catch (error) {
        console.log(error)
    }
 }) */
 
 router.post('/', async (req, res)=>{
 const body = req.body
 console.log(body)
 try {
     const prodDB = new product(body)
     await prodDB.save()
     console.log(prodDB)
     res.render('index');
 } catch (error) {
     console.log(error)
 }
 })
 
 module.exports = router;