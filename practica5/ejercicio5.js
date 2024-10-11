// clasificar usuario por edad y membresia dew gimansio
let edad = 19;
let membresia = "basica"; 

if(edad < 18){
    console.log("Eres menor de edad, puedes acceder a la membresia juvenil");
} else if(edad >= 18 && edad <= 60){
    console.log("Eres un adulto. Puedes Acceder a todas las membresias");
} else {
    console.log("Eres mayor de 60 años, tienes descuento en las membresias")
}

switch(membresia){
    case "basica":
        console.log("Membresia básica: acceso a las áreas de entrenamiento estándar");
        break;
    case "estandar":
        console.log("Membresia estándar: acceso a todas las áreas de entrenamiento estándar y clases grupales");
        break;
    case "VIP":
        console.log("Membresia premium: Acceso commpleto, con beneficios adicionales como spa y entrenadores personalizados");
        break;
    default:
        console.log("Tipo de membresia no valida")
}