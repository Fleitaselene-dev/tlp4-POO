// Consigna 3 
const string = "Actividad"
String.prototype.concatenarString= function (word) {
    return `${this} ${word}`   
}
const string2 = string.concatenarString("Practica")

const string3 = string2.concatenarString("N°1")
console.log(string3)
