let fechaActual = new Date();

let horas = fechaActual.getHours();
let minutos = fechaActual.getMinutes();
let segundos = fechaActual.getSeconds();
let minisegundos = fechaActual.getMilliseconds();

console.log(`la hora es: ${horas}:${minutos}:${segundos}:${minisegundos}`)