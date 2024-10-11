let puntaje = 100;
let calificacion;

if(puntaje >= 90){
    calificacion ="A";
} else if (puntaje >= 80){
    calificacion ="B";
} else if(puntaje >= 70){
    calificacion ="C";
} else if(puntaje >= 60){
    calificacion ="D";
} else {
    calificacion = "F"
}

console.log("La calificacion del estudiante es: ",calificacion)