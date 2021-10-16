let products = [];
let sale = [];

document.addEventListener("DOMContentLoaded", function (e) {
   
    let descr = document.getElementById('desc')
    let name = document.getElementById('nomb')
    let cost = document.getElementById('costo')
    let amount = document.getElementById('stock')


    let listProdTrans = document.getElementById('listaProd');
    let option = document.createElement('option');
    //agrega a lista select las opciones de productos
    const listProd = (param) => {
        listProdTrans.innerHTML += "" 
        for (let i of param) {
            option.text= i.nombre;
            listProdTrans.add(option)
        }}
    listProd(products)
    
    //ingreso nuevos productos
    document.getElementById('ing').addEventListener('click', () => {
        if (descr.value && name.value && amount.value && cost.value) {
            let obj = {}
            obj.descripcion = descr.value;
            obj.nombre = name.value;
            obj.costo = cost.value;
            obj.cantidad = amount.value;
            products.push(obj);
            listProd(products)
        }
     /* else {
         (!descr.value)? 

        } */
         descr.value = "";
         name.value = "";
         amount.value ="";
         cost.value ="";
        
        console.log(products)
    })


//mostrar precio de prod en input:
let takeInputPrice = document.getElementById('listaProd')
let unitCost = document.getElementById('costoUnit');
takeInputPrice.addEventListener('change',()=>{
    
        for (let i of products){
            if(i.nombre === takeInputPrice.value){
                unitCost.value = i.costo
            }
        }
    })
    



    //TRANSACCION
let typeTrans = "Compra";
document.getElementById("ing2").value = typeTrans
    document.getElementById('trans').addEventListener('change', () => {
        typeTrans = document.getElementById('trans').value
        document.getElementById("ing2").value = typeTrans
    });
    let dateTrans;
    let subTotal;
    let iva;





//mostrar precio:
/* let unitCost = document.getElementById('costoUnit');
    unitCost.innerHTML =""; */

    document.getElementById('ing2').addEventListener('click', () => {
/* 
        let obj = {}
        obj.descripcion = (descr.value);
        obj.nombre = name.value;
        obj.costo = cost.value;
        obj.cantidad = amount.value;
        sale.push(obj);
 */
    })




});