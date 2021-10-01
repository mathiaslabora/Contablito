let productos = [];
let venta = [];

document.addEventListener("DOMContentLoaded", function (e) {
    let descr = document.getElementById('desc')
    let name = document.getElementById('nomb')
    let costo = document.getElementById('costo')
    let cant = document.getElementById('stock')

    document.getElementById('ing').addEventListener('click', ()=>{
        if(true) {
            let obj ={}
            obj.descripcion=(descr.value);
            obj.nombre = name.value;
            obj.costo = costo.value;
            obj.cantidad = cant.value;
            productos.push(obj);
        }

    })
    console.log(productos)


});