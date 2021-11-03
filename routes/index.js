const express = require('express');
const router = express.Router();
/* const product = require('../models/product') */

router.get('/', function(req, res) {
    res.render('index');
});


/* router.post('/', async (req, res)=>{
    const body = req.body
    console.log(body)
    try {
       const produc = new product(body) 
       await produc.save()
       res.redirect('/')
    } catch (error) {
        console.log(error)
    }
})
 */
module.exports = router;