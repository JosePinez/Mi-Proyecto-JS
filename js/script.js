//FUNCION SEGUNDA PANTALLA
function segundaPantalla() {
    var primeraPant = document.getElementById("primeraPant");
    var segundaPant = document.getElementById("segundaPant");
    primeraPant.style.display = "none";
    segundaPant.style.display = "block";
}

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
