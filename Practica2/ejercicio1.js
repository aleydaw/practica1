//creamos un objeto date para obtener la fecha actual
let fechaActual = new Date();

//obtener el dia de  sana (0 = Domingo hasta el 6 = Sabado)
let diaSemana = fechaActual.getDay();

//creamo un arreglo para mapear los numeros de dias a los nombres de los dias
let nombreDias = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];

//obtener el nombre del dia correspondiente al numero obtenido
let  nombreDia = nombreDias[diaSemana]
//imprimir el nombre del dia en la consola
console.log(`Hoy es: ${nombreDia}`);