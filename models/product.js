/* 
version timo
const { Schema, model } = require ('mongoose')

const productSchema = new Schema(
{
    nombre: { type: String, required: true },
    description: { type: String, required: true}
})

module.exports = model('products', productSchema) */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
        nombre: { type: String, required: true },
        descripcion: { type: String, required: true},
        cantidad:{type:Number, required:true},
        costo:{type:Number, required:true}
    });

    //modelo
    const product = mongoose.model('product', productSchema);
    module.exports = product;