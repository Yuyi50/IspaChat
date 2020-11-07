//Variables globales
var login = document.getElementById("login");
var salir = document.getElementById("salir");
var registro = document.getElementById("registro");
var labelUsuario = document.getElementById("labelUsuario");

//Funciones
function registroUsuario() {
    let user = prompt("ingresa tu usuario");
    let pss = prompt("ingresa tu contraseña");
    localStorage.setItem('usuario', user);
    localStorage.setItem('clave', pss);
    alert("Registro completo");
}

function loginUsuario() {
    let user = prompt("Escribe tu usuario");
    let pss = prompt("Escribe tu contraseña");


    //Datos local Storage
    if (user == localStorage.getItem('usuario') && pss == localStorage.getItem('clave') ) {
        alert("¡Hola, " + user + "!");
        labelUsuario.innerHTML = user
    } else {
        alert("Usuario o contraseña incorrecto");
    }
}

function salirPagina() {
    let user = "";
    localStorage.setItem('usuario', user);
    let pss = "";
    localStorage.setItem('clave', pss);
    labelUsuario.innerHTML = user
}


//Usuario en sesión

if (localStorage.getItem('usuario')) {
    let usuarioStorage = localStorage.getItem('usuario');
    labelUsuario.innerHTML = usuarioStorage;
} 


//Onclicks
login.onclick = function() {
    loginUsuario();
}
salir.onclicks = function() {
    salirPagina();
}
registro.onclick = function() {
    registroUsuario();
}