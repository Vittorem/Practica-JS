const opciones = ['piedra', 'papel', 'tijeras'];

var seleccionp1 = opciones[1]
var seleccionp2 = opciones[1]

switch(seleccionp1){
    case("piedra"):
    console.log("soy piedra");
    break;

    case("papel"):
    console.log("soy papel");
    break;

    case("tijeras"):
    console.log("soy papel");
    break;
}
switch(seleccionp2){
    case("piedra"):
    console.log("soy piedra");
    break;

    case("papel"):
    console.log("soy papel");
    break;

    case("tijeras"):
    console.log("soy tijeras");
    break;
}

function ganador(seleccionp1,seleccionp2){
    if(seleccionp1==="piedra" && seleccionp2 === "tijeras"||
        seleccionp1==="papel" && seleccionp2 === "piedra"||
        seleccionp1==="tijeras"&& seleccionp2==="papel"
    ){
        return "gana jugador 1"
    } else if(
        seleccionp1==="tijeras" && seleccionp2 === "piedra"||
        seleccionp1==="piedra" && seleccionp2 === "papel"||
        seleccionp1==="papel"&& seleccionp2==="tijeras"
    ){
        return "gana jugador 2"
    }
    else{
        return "empate"
    }

}


console.log(ganador(seleccionp1,seleccionp2))