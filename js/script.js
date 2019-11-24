
//CREACION JSON USUARIOS Y ADMIN
var users = [
    {
        usuario: "user1",
        pass: "user1",
        admin: false
    },
    {
        usuario: "user2",
        pass: "user2",
        admin: false
    },
    {
        usuario: "user3",
        pass: "user3",
        admin: false
    },
    {
        usuario: "admin",
        pass: "admin",
        admin: true
    }
]
//CREACION DE CLASES
"use strict";
class EspacioAlquiler{
    constructor(id,propietario,localizacion,tipo,precioHora,novedad){
        this.id = id;
        this.propietario = propietario;
        this.localizacion = localizacion;
        this.tipo = tipo;
        this.precioHora = precioHora;
        this.novedad = novedad;
    }
    getPpropietario(){
        return this.propietario;
    }
    getLocalizacion(){
        return this.localizacion;
    }
    getTipo(){
        return this.tipo;
    }
    getPrecioHora(){
        return this.precioHora;
    }
    setPropietario(propietario){
        if(propietario == "" || (typeof propietario == "undefined")){return;}
        this.propietario = propietario;
    }
    setLocalizacion(localizacion){
        if(localizacion == "" || (typeof localizacion == "undefined")){return;}
        this.localizacion = localizacion;
    }
    setTipo(tipo){
        if(tipo == "" || (typeof tipo =="undefined")){return;}
        this.tipo = tipo;
    }
    setPrecioHora(precioHora){
        if(precioHora == "" || (typeof precioHora =="undefined")){return;}
        this.precioHora = precioHora;
    }
}
var particular1 = new EspacioAlquiler(1,"Jose Manuel Piñez","Sevilla","Particular",5.0,true,"..img/1.jpg");
var particular2 = new EspacioAlquiler(2,"Abel Herrero","Sevilla","Particular",5.5,false);
var particular3 = new EspacioAlquiler(3,"Joaquin Bono","Sevilla","Particular",3.0,true);
var particular4 = new EspacioAlquiler(4,"Jose Bretones","Sevilla","Particular",4.5,true);
var particular5 = new EspacioAlquiler(5,"Cristina Jimenez","Sevilla","Particular",6.0,false);
var particular6 = new EspacioAlquiler(6,"Fernando Mateos","Sevilla","Particular",7.5,false);
var particular7 = new EspacioAlquiler(7,"Jose Manuel Piñez","Málaga","Particular",5.0,true);
var particular8 = new EspacioAlquiler(8,"Abel Herrero","Málaga","Particular",5.5,false);
var particular9 = new EspacioAlquiler(9,"Joaquin Bono","Málaga","Particular",3.0,true);
var particular10 = new EspacioAlquiler(10,"Jose Bretones","Cádiz","Particular",4.5,true);
var particular11 = new EspacioAlquiler(11,"Cristina Jimenez","Cádiz","Particular",6.0,false);
var particular12 = new EspacioAlquiler(12,"Fernando Mateos","Cádiz","Particular",7.5,false);
var particular13 = new EspacioAlquiler(13,"Pablo Picablo","Málaga","Particular",3.0,true);
var local1 = new EspacioAlquiler(14,"Jose Manuel Piñez","Sevilla","Local",10.0,true);
var local2 = new EspacioAlquiler(15,"Joaquin Bono","Sevilla","Local",10.5,true);
var local3 = new EspacioAlquiler(16,"Jose Bretones","Sevilla","Local",9.0,false);
var local4 = new EspacioAlquiler(17,"Cristina Jimenez","Cádiz","Local",11.0,true);
var local5 = new EspacioAlquiler(18,"Pablo Picablo","Málaga","Local",12.0,false);
var local6 = new EspacioAlquiler(19,"Javier Prada","Málaga","Local",10.0,true);
var local7 = new EspacioAlquiler(20,"Antonio Perez","Cádiz","Local",13.5,false);


var arrayEspacios=[]
arrayEspacios.push(particular1);
arrayEspacios.push(particular2);
arrayEspacios.push(particular3);
arrayEspacios.push(particular4);
arrayEspacios.push(particular5);
arrayEspacios.push(particular6);
arrayEspacios.push(particular7);
arrayEspacios.push(particular8);
arrayEspacios.push(particular9);
arrayEspacios.push(particular10);
arrayEspacios.push(particular11);
arrayEspacios.push(particular12);
arrayEspacios.push(particular13);
arrayEspacios.push(local1);
arrayEspacios.push(local2);
arrayEspacios.push(local3);
arrayEspacios.push(local4);
arrayEspacios.push(local5);
arrayEspacios.push(local6);
arrayEspacios.push(local7);

//FUNCION VALIDACION USUARIO
function validaUsuarios(){
    var user = document.getElementById("usuario").value;
    var pass = document.getElementById("pass").value;
    var usuarios = users;
    var usuarioEncontrado = false;
    var esAdmin = false;
    for(var i=0;i<usuarios.length && ! usuarioEncontrado;i++){
        if(user === usuarios[i].usuario){
            if(pass === usuarios[i].pass){
                usuarioEncontrado = true;
                if(usuarios[i].admin == true){
                        var button = document.createElement("button");
                        var p=document.createElement("p");
                        p.innerHTML="Opciones de administrador"
                        $("#izq").appendChild(p);
                        button.classList.add("btn");
                        button.classList.add("btn-success");
                        button.setAttribute("id","buscar")
                        button.setAttribute("onclick","añadir()");
                        button.innerHTML= "Añadir";
                        $("#izq").appendChild(button);
                        var button = document.createElement("button");
                        button.classList.add("btn");
                        button.classList.add("btn-info");
                        button.setAttribute("id","buscar");
                        button.setAttribute("onclick","modificar()");
                        button.innerHTML= "Modificar";
                        $("#izq").appendChild(button);
                        var button = document.createElement("button");
                        button.classList.add("btn");
                        button.classList.add("btn-danger");
                        button.setAttribute("id","buscar");
                        button.setAttribute("onclick","eliminar()");
                        button.innerHTML= "Eliminar";
                        $("#izq").appendChild(button);
                }
            }
        }
    }
    if(usuarioEncontrado){
        var formulario = document.getElementById("formulario");
        var labelUsu = document.getElementById("labelUsu");
        var labelPass = document.getElementById("labelPass");
        var btnLogin = document.getElementById("btnLogin");
        formulario.removeChild(labelUsu);
        formulario.removeChild(labelPass);
        formulario.removeChild(btnLogin);
        var loading = document.createElement("div");
        var span = document.createElement("span");
        loading.classList.add("spinner-grow");
        loading.classList.add("text-primary");
        loading.setAttribute("id", "loading");
        loading.setAttribute("role", "status");
        loading.setAttribute("style", "width: 5em; height: 5em;");
        span.classList.add("sr-only");
        $("#formulario").appendChild(loading);
        $("#loading").appendChild(span);
        setTimeout('segundaPantalla()',2000);
    }else{
        alert("usuario o contraseña incorrectas");
        document.getElementById("usuario").value = "";
        document.getElementById("pass").value = "";
    }
}
//FUNCION SEGUNDA PANTALLA
function segundaPantalla() {
    var primeraPant = document.getElementById("primeraPant");
    var segundaPant = document.getElementById("segundaPant");
    var nosotros = document.getElementById("sobreNosotros");
    var contacto = document.getElementById("contacto");
    primeraPant.style.display = "none";
    nosotros.style.display = "none";
    contacto.style.display = "none";
    segundaPant.style.display = "block";
    for(i=0;i<arrayEspacios.length;i++){
        if(arrayEspacios[i].novedad == true){
            var establecimiento= document.createElement("div");
            establecimiento.classList.add("col-md-4");
            establecimiento.classList.add("establecimiento");
            establecimiento.classList.add("establecimiento"+i);
            establecimiento.setAttribute("id","establecimiento");
            establecimiento.setAttribute("name","establecimiento");
            $("#contenedor").appendChild(establecimiento);
            establecimiento.innerHTML="<img src=img/1.jpg </img><br>"+"<br>"+"<b>Id: "+arrayEspacios[i].id+"<br>"+"<b>Propietario:</b> "+arrayEspacios[i].propietario+"<br>"+"<b>Localización:</b> "+arrayEspacios[i].localizacion+"<br>"+"<b>Tipo:</b> "+arrayEspacios[i].tipo+"<br>"+"<b>Precio/Hora:</b> "+arrayEspacios[i].precioHora+"€"; 
        }
    }
    var inicio = document.getElementById("inicio");
    var nosotros = document.getElementById("sobre_nosotros");
    var contacto = document.getElementById("contactos");
    inicio.setAttribute("onclick","pantallaInicio()");
    nosotros.setAttribute("onclick","sobreNosotros()");
    contacto.setAttribute("onclick","contacto()");
}
function pantallaInicio(){
    var login = document.getElementById("primeraPant");
    var inicio = document.getElementById("segundaPant");
    var nosotros = document.getElementById("sobreNosotros");
    var contacto = document.getElementById("contacto");
    var añadir = document.getElementById("añadir");
    var modificar = document.getElementById("modificar");
    var eliminar = document.getElementById("eliminar");
    contacto.style.display = "none";
    primeraPant.style.display = "none";
    segundaPant.style.display = "block";
    nosotros.style.display = "none";
    añadir.style.display = "none";
    modificar.style.display = "none";
    eliminar.style.display = "none";
}
function sobreNosotros(){
    var login = document.getElementById("primeraPant");
    var inicio = document.getElementById("segundaPant");
    var nosotros = document.getElementById("sobreNosotros");
    var contacto = document.getElementById("contacto");
    var añadir = document.getElementById("añadir");
    var modificar = document.getElementById("modificar");
    var eliminar = document.getElementById("eliminar");
    contacto.style.display = "none";
    primeraPant.style.display = "none";
    segundaPant.style.display = "none";
    nosotros.style.display = "block";
    añadir.style.display = "none";
    modificar.style.display = "none";
    eliminar.style.display = "none";    
}
function contacto(){
    var login = document.getElementById("primeraPant");
    var inicio = document.getElementById("segundaPant");
    var nosotros = document.getElementById("sobreNosotros");
    var contacto = document.getElementById("contacto");
    var añadir = document.getElementById("añadir");
    var modificar = document.getElementById("modificar");
    var eliminar = document.getElementById("eliminar");
    contacto.style.display = "block";
    primeraPant.style.display = "none";
    segundaPant.style.display = "none";
    nosotros.style.display = "none";
    añadir.style.display = "none";
    modificar.style.display = "none";
    eliminar.style.display = "none";
}
function añadir(){
    var inicio = document.getElementById("segundaPant");
    segundaPant.style.display = "none";
    var añadir = document.getElementById("añadir");
    añadir.style.display = "block"
    if(añadido.style.display == "none"){
        var divAñadir = document.getElementById("txtAñadir");
        $("#formularioAñadir").removeChild(divAñadir);
        añadido.style.display = "block";
    }
}
function modificar(){
    var inicio = document.getElementById("segundaPant");
    segundaPant.style.display = "none";
    var modificar = document.getElementById("modificar");
    modificar.style.display = "block";
    if(modificado.style.display == "none"){
        var divModificar = document.getElementById("txtAñadir");
        $("#formularioModificar").removeChild(divModificar);
        modificado.style.display = "block";
    }
}
function eliminar(){
    var inicio = document.getElementById("segundaPant");
    segundaPant.style.display = "none";
    var eliminar = document.getElementById("eliminar");
    eliminar.style.display = "block";
    if(eliminado.style.display == "none"){
        var divEliminar = document.getElementById("txtAñadir");
        $("#formularioEliminar").removeChild(divEliminar);
        eliminado.style.display = "block";
    }
}
function añadeEspacio(){
    var espacioNuevo = new EspacioAlquiler(arrayEspacios.length,document.getElementById("propietarioInput").value,document.getElementById("localizacionInput").value,document.getElementById("tipoInput").value,document.getElementById("precioInput").value,true);
    arrayEspacios.push(espacioNuevo);
    var añadido = document.getElementById("añadido");
    añadido.style.display = "none";
    var divAñadir = document.createElement("div");
    divAñadir.setAttribute("id","txtAñadir");
    divAñadir.innerHTML = "Espacio añadido correctamente. El ID asociado es: " + (arrayEspacios.length-1);
    $("#formularioAñadir").appendChild(divAñadir);
}
function modificaEspacio(){
    var modificado = document.getElementById("modificado");
    modificado.style.display = "none";
    var div = document.createElement("div");
    div.setAttribute("id","txtAñadir");
    div.innerHTML = "Espacio modificado correctamente ";
    $("#formularioModificar").appendChild(div);
}
function eliminaEspacio(){
    var eliminado = document.getElementById("eliminado");
    eliminado.style.display = "none";
    var div = document.createElement("div");
    div.setAttribute("id","txtAñadir");
    div.innerHTML = "Espacio eliminado correctamente";
    $("#formularioEliminar").appendChild(div); 
}
//FUNCION SELECTOR PARA AÑADIR Y BORRAR ELEMENTOS DEL HTML
function $(selector) {
    return document.querySelector(selector);
}