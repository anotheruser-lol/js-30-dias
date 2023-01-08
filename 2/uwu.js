let desafio = "30 dias de Javascript "
console.log(desafio)                    // Imprime el valor de la variable
console.log(desafio.length)             // Longitud de la cadena
console.log(desafio.toUpperCase())      // Hace las letras mayusculas
console.log(desafio.toLowerCase())      // Hace las letras minusculas
console.log(desafio.substring(3,7))     // Corta la primera palabra
console.log(desafio.includes("Script")) // Verifica un valor
console.log(desafio.split())            // Convierte en una matriz
console.log(desafio.split(" "))         // Separa a partir de los espacios

let empresas = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"

console.log(empresas.split(", "))                       // Separa a partir de un argumento
console.log(desafio.replace("Javascript", "Python"))    // Reemplaza una palabra, por otra
console.log(desafio.charAt(15))                         // Halla el valor en un indice
console.log(desafio.charCodeAt(11))                     // Halla el codigo de un caracter
console.log(desafio.indexOf("a"))                       // Primera aparicion de un caracter
console.log(desafio.lastIndexOf("a"))                   // Ultima aparicion de un caracter

let frase = 'No puedes terminar una oración con porque porque porque es una conjunción'

console.log(frase.indexOf("porque"))

console.log(frase.lastIndexOf("porque"))

console.log(frase.search("porque"))

console.log(desafio.trim())

console.log(desafio.startsWith(30))

console.log(desafio.endsWith("Javascript")); // verdadero

console.log(desafio.match("a"))

let concatenar = "30 dias de"

console.log(concatenar.concat("Javascript"))

console.log(desafio.repeat(2))
