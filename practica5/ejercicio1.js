// Evaluar letra con calificacion
let calificacion = 'F'

switch(calificacion){
    case 'A': 
    console.log("Es excelente")
    break;
    case 'B': 
    console.log("Buen trabajo")
    break; 
    case 'C': 
    console.log("Suficiente")
    break;
    case 'D': 
    console.log("Necesita mejorar")
    break;
    case 'F': 
    console.log("Reprobado")
    break;
    default:
        console.log("Calificacion no valida")
}