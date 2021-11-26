const controller = {};
const transaction = require('../models/transaction');

controller.transaction = (async (req, res)=>{
    const body = req.body
    try {
        const transDB = new transaction(body)
        await transDB.save()
        console.log(transDB)
        res.redirect('/index2');
    } catch (error) {
        console.log(error)
    }
    })

    module.exports = controller