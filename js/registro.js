var nombre = document.querySelector("#nombre");
var apellido =document.querySelector("#apellido");
var correo = document.querySelector("#correo");
var contraseña = document.querySelector("#contraseña")
var boton = document.querySelector(".boton");



boton.addEventListener("click",function(){

    if(nombre.value == 0){
        alert("nombre no dectectado")
        nombre.classList.remove(".inpust-registro1");
        nombre.classList.add(".red");
    }
});