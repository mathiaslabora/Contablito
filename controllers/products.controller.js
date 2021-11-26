const controller = {};
const product = require('../models/product');

controller.product = (async (req, res)=>{
    const body = req.body
    try {
        const prodDB = new product(body)
        await prodDB.save()
        res.redirect('/index2');
    } catch (error) {
        console.log(error)
    }
    })

    module.exports = controller