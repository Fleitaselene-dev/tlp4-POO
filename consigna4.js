// Consigna 4
const text = String.prototype.toUpperCase
String.prototype.toUpperCase = function(){
    return "ESTO ESTA PROHIBIDO"
}

const text1 = "hola mundo".toUpperCase()
console.log(text1)

