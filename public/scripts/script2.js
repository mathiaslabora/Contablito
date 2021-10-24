const personaje = document.querySelector("#personaje");
let controlDialoge = 0;

document.addEventListener("DOMContentLoaded", function (e) {
  let myAnimation =  personaje.animate([
        {
            left : "-490px"
        },
        {
            left : "-0px"
        }
    ],{
            duration: 1000,
            fill : "forwards"
    });

    myAnimation.onfinish = function(){
        showDialoge();
    }
    /* document.getElementById("btnPass").addEventListener("click", showCB); */
});

function showDialoge(){
    let text = document.getElementById("bubleText");

    text.innerHTML = `
    <div class = "container">
            <div id = "bubleWithDialoge">
                <p class="globo">¡Hola!</p> 
            </div>
            <button id="next" type="button" class="btn btn- btn-success"> Next </button>
    </div>
        `
        let firstDial = document.getElementById("bubleWithDialoge");    
        document.addEventListener("click", function(){
            if(controlDialoge == 0)
            {
                firstDial.innerHTML += `<p class="globo"> Nos alegra que nos hayas elegido.</p>
                `
                controlDialoge += 1;
            }else if(controlDialoge == 1){
                firstDial.innerHTML += `<p class="globo"> Nuestro Contablito te dará una grata experiencia
                a la hora de comprar y vender tus productos.</p>
                `
                controlDialoge += 1;
            }else if(controlDialoge == 2){
                firstDial.innerHTML += `<p class="globo"> El proceso no fue fácil, pero estamos orgullosos de lo que hemos logrado.</p>
                `
                controlDialoge += 1;
            }else if(controlDialoge == 3){
                firstDial.innerHTML += `<p class="globo"> Pero en fin... <br> ¡Bienvenidos!</p>
                `
                controlDialoge += 1;
            }else if(controlDialoge == 4){
                window.location = "index.html"
            }

        
    });
}

/* function showCB(){
    window.location = "index.html";
} */