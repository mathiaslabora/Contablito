const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transSchema = new Schema(
    {
        producto: { type: String, required: true },
        tipo: { type: String, required: true},
        iva: { type: String, required: true},
        cantidad:{type:Number, required:true},
        costoUnitario:{type:Number, required:true}
    });

    //modelo
    const transaction = mongoose.model('transaction', transSchema);
    module.exports = transaction;