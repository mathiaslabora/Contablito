const personaje = document.querySelector("#personaje");
let myName;
let myEmail;
let myPass;
const arre = [];
let controlDialoge = 0;

document.addEventListener("DOMContentLoaded", function (e) {
  let text = document.getElementById("bubleText");
  document.getElementById("next").style.display = "none";
  document.getElementById("registro").style.display = "none";

  let myAnimation =  personaje.animate([
    {
        left : "-490px"
    },
    {
        left : "-220px"
    }
],{
        duration: 1000,
        fill : "forwards"
});


myAnimation.onfinish = function(){
    
    text.innerHTML = `
            <p class="globo">¡Hola! </p> 
        `
    document.getElementById("next").style.display = "inline";    
    document.getElementById("next").addEventListener("click", showDialoge);
}
    document.getElementById("btnRegister").addEventListener("click", showRegister);
    
});


function showDialoge(){
    
        let firstDial = document.getElementById("bubleText");    
       
            if(controlDialoge == 0)
            {
                firstDial.innerHTML = `<p class="globo"> Nos alegra que nos hayas elegido.</p>
                `
                controlDialoge += 1;
            }else if(controlDialoge == 1){
                firstDial.innerHTML = `<p class="globo"> Nuestro Contablito te dará una grata experiencia
                a la hora de comprar y vender tus productos.</p>
                `
                controlDialoge += 1;
            }else if(controlDialoge == 2){
                firstDial.innerHTML = `<p class="globo"> El proceso no fue fácil, pero estamos orgullosos de lo que hemos logrado.</p>
                `
                controlDialoge += 1;
            }else if(controlDialoge == 3){
                firstDial.innerHTML = `<p class="globo"> Pero en fin... <br> ¡Bienvenidos!</p>
                `
                controlDialoge += 1;
            }else if(controlDialoge == 4){
                firstDial.innerHTML = `<p class="globo"> Registrate para continuar.</p>
                `
                controlDialoge += 1;
                
            }else if(controlDialoge === 5){
                /* window.location = "index.html" */
                document.getElementById("registro").style.display = "inline";
                
            } 
}

function showRegister(){
    myName = document.getElementById("name").value;
    myEmail = document.getElementById("email").value;
    myPass = document.getElementById("pass").value;
        
        arre.push = ({
            "name" : myName,
            "email" : myEmail,
            "pass" : myPass
        });
        console.log(arre);
        
        if(myName !== "" && myEmail !== "" && myPass !== "")
        { 
            window.location = "/index2"
        }else{
            alert("Llena todos los campos.")
        }
        
}

/* function showCB(){
    window.location = "index.html";
} */

/* $(document).ready(function(){

    $('.input').focus(function(){
      $(this).parent().find(".label-txt").addClass('label-active');
    });
  
    $(".input").focusout(function(){
      if ($(this).val() == '') {
        $(this).parent().find(".label-txt").removeClass('label-active');
      };
    });
  
  }); */