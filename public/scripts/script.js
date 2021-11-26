'use strict'
let products;
let sale;
let selectProd;
let selectType = 'Compra';
let iva = 22;
var getJSONData = function (url) {
  var result = {};
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .then(function (response) {
      result.status = 'ok';
      result.data = response;
      return result;
    })
    .catch(function (error) {
      result.status = 'error';
      result.data = error;
      return result;
    });
}

const deleteTrans = async (ind) => {
  try {
    const data = await fetch(`/addTrans/${ind}`, {
      method: 'delete'
    })
    const res = await data.json()
    if (res.estado) {
      window.location.href = "/"
    } else {
      console.log(res)
    }
  } catch (error) {
    console.log(error)
  }

}

const putTableTrans = (tDB) => {
let puTable = document.getElementById("tableProducts");
  for (let obj of tDB) {
    let subt = obj.costoUnitario * obj.cantidad
    puTable.innerHTML += `
        <tr>
                    <td>${obj.producto}</td>
                    <td>${obj.tipo}</td>
                    <td>${obj.cantidad}</td>
                    <td>${subt}</td>
                    <td>${subt * (iva / 100)}</td>
                    <td>${subt + (subt * (iva / 100))}</td>
                    <td><button onclick="deleteTrans('${obj._id}')" class="btn">Borrar</button></td>
        </tr>
        `
   
  }
}

document.addEventListener("DOMContentLoaded", async function (e) {

  const productsDB = (await getJSONData('/addProd')).data
  products = productsDB;
  const transactDB = (await getJSONData('/addTrans')).data
  sale = transactDB;


  let listProdTrans = document.getElementById('listaProd');

  //agrega a lista select las opciones de productos
  const listProd = (param) => {
    listProdTrans.innerHTML += ""
    for (let i of param) {
      let option = document.createElement('option');
      option.text = i.nombre;
      listProdTrans.add(option)
    }
  }
  listProd(products)



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
  document.getElementById("cantProd").placeholder = "Ingrese cantidad para " + typeTrans;
  document.getElementById('trans').addEventListener('change', () => {
    typeTrans = document.getElementById('trans').value
    document.getElementById("ing2").value = typeTrans
    document.getElementById("cantProd").placeholder = "Ingrese cantidad para " + typeTrans;
  });



  document.getElementById("listaProd").addEventListener('change', () => {
    selectProd = document.getElementById("listaProd").value;
  })


  document.getElementById("trans").addEventListener('change', () => {
    selectType = document.getElementById("trans").value;
  })


  document.getElementById("iva").addEventListener('change', () => {
    iva = document.getElementById("iva").value;
  })

putTableTrans(transactDB);
console.log(transactDB)
/* const btnDelTrans = document.querySelector('#buttonDelTrans')
btnDelTrans.addEventListener('click', async () => {
  const id = btnDelTrans.dataset.id
  try {
    const data = await fetch(`/addTrans/${id}`, {
      method: 'delete'
    })
    const res = await data.json()
    if (res.estado) {
      window.location.href = "/"
    } else {
      console.log(res)
    }
  } catch (error) {
    console.log(error)
  }

}) */


});