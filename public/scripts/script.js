'use strict'
let products = [];
let sale = [];

document.addEventListener("DOMContentLoaded", function (e) {
//si uso deja de andar formulario
   /*  let descr = document.getElementById('desc')
    let name = document.getElementById('nomb')
    let cost = document.getElementById('costo')
    let amount = document.getElementById('stock')
    let quant = document.getElementById('cantProd') */
    
    /* document.getElementById("ing").addEventListener("click", function(event){
        event.preventDefault()
      });
 */
    let listProdTrans = document.getElementById('listaProd');
    let option = document.createElement('option');
    //agrega a lista select las opciones de productos
    const listProd = (param) => {
        listProdTrans.innerHTML += ""
        for (let i of param) {
            option.text = i.nombre;
            listProdTrans.add(option)
        }
    }
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
       
        descr.value = "";
        name.value = "";
        amount.value = "";
        cost.value = "";

    })


    //mostrar precio de prod en input:
    let takeInputPrice = document.getElementById('listaProd')
    let unitCost = document.getElementById('costoUnit');
    takeInputPrice.addEventListener('change', () => {

        for (let i of products) {
            if (i.nombre === takeInputPrice.value) {
                unitCost.value = i.costo
            }
        }
    })




    //TRANSACCION
    let typeTrans = "Compra";
    document.getElementById("ing2").value = typeTrans
    document.getElementById("cantProd").placeholder = "Ingrese cantidad de "+typeTrans;
    document.getElementById('trans').addEventListener('change', () => {
        typeTrans = document.getElementById('trans').value
        document.getElementById("ing2").value = typeTrans
        document.getElementById("cantProd").placeholder = "Ingrese cantidad de "+typeTrans;
    });

    
    let selectProd ;
    document.getElementById("listaProd").addEventListener('change', () =>{
    selectProd = document.getElementById("listaProd").value;
    })

    let selectType = 'Compra';
    document.getElementById("trans").addEventListener('change', () =>{
    selectType = document.getElementById("trans").value;
        })

    let iva = 22;
    document.getElementById("iva").addEventListener('change', () =>{
        iva = document.getElementById("iva").value;
            })

    document.getElementById('ing2').addEventListener('click', () => {
        //si cuando preciono boton no hay ningun prod seleccionado o cantidad selecc, envio un mensaje.
        if((selectProd === undefined) || (selectProd === "") || (quant.value === "")){
            document.getElementById('msj').innerHTML = `
            <div class="alert alert-danger" role="alert">
  This is a danger alert—check it out!
</div>
            `
        }else{


        let puTable = document.getElementById("tableProducts");
        let obj = {}
        obj.nombre = selectProd;
        obj.tipo = selectType;
        obj.costo = unitCost.value;
        obj.cantidad = quant.value;
        sale.push(obj);
        console.log(obj)
        let subt = obj.costo * obj.cantidad
        puTable.innerHTML += `
        <tr>
                    <td>${obj.nombre}</td>
                    <td>${obj.tipo}</td>
                    <td>${obj.cantidad}</td>
                    <td>${subt}</td>
                    <td>${subt * (iva/100)}</td>
                    <td>${subt + (subt * (iva/100))}</td>
        </tr>
        `
        }
    })




});