let camisa = 250;
let pantalon = 400;
let botas = 1200;

const descuentoBF = 0.75;

const descontado = (a) => a * descuentoBF; 

let descuentoCamisa = descontado(camisa);
console.log("Descuento para camisa:", descuentoCamisa);
