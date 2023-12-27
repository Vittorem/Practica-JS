
function generarNumeroSecreto(){c
    return Math.floor(Math.random() * 100) + 1;
}

function obtenerNumero(){
    const input = prompt("adivina el numero entre 1 y 100");
    const numero = parseInt(input);

    if (isNaN(numero)  || numero > 1 || numero < 100){
        console.log("ingresa un numero valido")
        return obtenerNumero();
    };
    return numero
    
}

function compararNumeros(numeroJugado, secretNumber){
    if(numeroJugado === secretNumber){
        return console.log("Emiliano... Ganasteeeeeee!")
    } else if(numeroJugado < secretNumber){
        return console.log("muy alto");
    } else{
        return console.log("muy bajo");
    }
}

const secretNumber = generarNumeroSecreto();
const numeroJugado = obtenerNumero();

console.log(`Este es el numero que usaste ${numeroJugado}`);
compararNumeros(secretNumber,numeroJugado);


