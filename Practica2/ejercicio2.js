// se crea el objeto date para obtener la fecha actual
let fechaActual = new Date();

// obtener el mes actual 
let mesActual = fechaActual.getMonth();

// crear un arreglo para mapear los numeros de los meses a los nombres de los meses
let months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
let month= months[mesActual]

// imprime el nombre del mes en la consola
console.log(`Hoy estamos en el mes: ${month}`);