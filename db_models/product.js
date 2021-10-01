const { Schema, model } = require ('mongoose')

const productSchema = new Schema(
{
    nombre: { type: String, required: true },
    description: { type: String, required: true}
})

module.exports = model('products', productSchema)