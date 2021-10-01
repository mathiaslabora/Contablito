let products = [];
let sale = [];

document.addEventListener("DOMContentLoaded", function (e) {
    let descr = document.getElementById('desc')
    let name = document.getElementById('nomb')
    let cost = document.getElementById('costo')
    let amount = document.getElementById('stock')

    let listProdTrans = document.getElementById('elSelect');
    let option = document.createElement('option');

    document.getElementById('ing').addEventListener('click', () => {
        if (descr.value && name.value && amount.value && cost.value) {
            let obj = {}
            obj.descripcion = descr.value;
            obj.nombre = name.value;
            obj.costo = cost.value;
            obj.cantidad = amount.value;
            products.push(obj);
            option.text = 
        } /* else {

        } */
        console.log(products)
    })


    let typeTrans;
    document.getElementById('trans').addEventListener('change', () => {
        typeTrans = document.getElementById('trans').value
    });
    let dateTrans;
    let subTotal;
    let iva;

document.getElementById('add').addEventListener('click',()=>{

    let obj = {}
    obj.descripcion = (descr.value);
    obj.nombre = name.value;
    obj.costo = cost.value;
    obj.cantidad = amount.value;
    sale.push(obj);

})
    



});