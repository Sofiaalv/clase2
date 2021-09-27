//*Pedir número mediante prompt y si es mayor a 1000 mostrar un alert.//

let numeroUno = parseInt(prompt ("Ingrese un numero"));

if (numeroUno >= 1000) {
    console.log("No se acepta numero mayor a mil");
    alert("Ingresar numero menor a 1000");
}

else{
    console.log("Gracias por ingresar un numero");
}

//*Pedir un texto mediante prompt, y si es igual a "Hola" mostrar un alerta por consola.//

let saludoUno = prompt("Ingrese saludo de una palabra");

if (saludoUno == "Hola" || saludoUno == "hola") {
    console.log("Saludo aceptado");
}

else {
    console.log("Saludo incorrecto");
}


//*Pedir un número por prompt y evaluar si está entre 10 y 50. En caso positivo mostrar un alert.//

let numeroDos = prompt("Ingresar un numero mayor a 10 y menor que 50");

if (numeroDos > 10 && numeroDos < 50){
    console.log("Numero correcto");
    alert("Gracias por participar")
}

else{
    console.log("Numero incorrecto")
}