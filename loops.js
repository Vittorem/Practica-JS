
function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo= modelo;
    this.annio= annio;
}

function genAuto(cantidad){
    let autos = []
    for (let index = 0; index < cantidad;) {
        let marca = "marca" + (index + 1);
        let modelo = "modelo" + (i + 1);
        let annio = 2023 - index;

        autos.push(new auto(merca, modelo, annio))
    }
    return autos;
}

let autosGenerados = genAuto(10);

console.log(autosGenerados);