//contantes para tomar los valores del email y entrar al dashboard
let email = document.getElementById('email');
let senha = document.getElementById('senha');

//boton de entrar
const loggin_entrar = document.getElementById('btn-entrar');

const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");

//funcion para validar y entrar a la pagina siguiente
loggin_entrar.addEventListener("click", () => {
    if(email.value == "admin@gmail.com" && senha.value == "admin"){
        console.log("si llego");
        location.href = "/html/dashboard.html";
    }
    else{
        console.log("no llego");
    }
    //window.open("c.html");
});

//js para mover el inicio de sesion a registrar
registerButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});


//scrooll
window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("abajo", this.window.scrollY>0);
})

//el archivo cargado ejecute esta funcion
$(document).ready(function(){
    var ir_a = $(".desplazar");
    ir_a.click(function(event){
        event.preventDefault();
        $("body, html").animate(
            {
            scrollTop: $(this.hash).offset().top,
            }, 1000
        );
    })
})

$(document).ready(function(){
    var ir_a = $('#nav');
    ir_a.click(function(event){
        event.preventDefault();
        $("body, html").animate(
            {
            scrollTop: $(this.hash).offset().top,
            }, 1000
        );
    })
})



