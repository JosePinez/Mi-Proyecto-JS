
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
    constructor(propietario,localizacion,tipo,precioHora, novedad){
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
var particular1 = new EspacioAlquiler("Jose Manuel Piñez","Sevilla","Particular",5.0,true);
var particular2 = new EspacioAlquiler("Abel Herrero","Sevilla","Particular",5.5,false);
var particular3 = new EspacioAlquiler("Joaquin Bono","Sevilla","Particular",3.0,true);
var particular4 = new EspacioAlquiler("Jose Bretones","Sevilla","Particular",4.5,true);
var particular5 = new EspacioAlquiler("Cristina Jimenez","Sevilla","Particular",6.0,false);
var particular6 = new EspacioAlquiler("Fernando Mateos","Sevilla","Particular",7.5,false);
var particular7 = new EspacioAlquiler("Jose Manuel Piñez","Málaga","Particular",5.0,true);
var particular8 = new EspacioAlquiler("Abel Herrero","Málaga","Particular",5.5,false);
var particular9 = new EspacioAlquiler("Joaquin Bono","Málaga","Particular",3.0,true);
var particular10 = new EspacioAlquiler("Jose Bretones","Cádiz","Particular",4.5,true);
var particular11 = new EspacioAlquiler("Cristina Jimenez","Cádiz","Particular",6.0,false);
var particular12 = new EspacioAlquiler("Fernando Mateos","Cádiz","Particular",7.5,false);
var particular13 = new EspacioAlquiler("Pablo Picablo","Málaga","Particular",3.0,true);
var local1 = new EspacioAlquiler("Jose Manuel Piñez","Sevilla","Local",10.0,true);
var local2 = new EspacioAlquiler("Joaquin Bono","Sevilla","Local",10.5,true);
var local3 = new EspacioAlquiler("Jose Bretones","Sevilla","Local",9.0,false);
var local4 = new EspacioAlquiler("Cristina Jimenez","Cádiz","Local",11.0,true);
var local5 = new EspacioAlquiler("Pablo Picablo","Málaga","Local",12.0,false);
var local6 = new EspacioAlquiler("Javier Prada","Málaga","Local",10.0,true);
var local7 = new EspacioAlquiler("Antonio Perez","Cádiz","Local",13.5,false);


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
    
    for(var i=0;i<usuarios.length || ! usuarioEncontrado;i++){
        if(user === usuarios[i].usuario){
            if(pass === usuarios[i].pass){
                usuarioEncontrado = true;
            }
        }
    }
    if(usuarioEncontrado){
        segundaPantalla();
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
    primeraPant.style.display = "none";
    segundaPant.style.display = "block";
}