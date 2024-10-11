let edad = 98;
let categoria;

if(edad >= 0 && edad <= 12){
    categoria = "Niño"
} else if(edad >= 13 && edad <= 17){
    categoria = "Adolescente"
} else if(edad >= 18 && edad <= 35){
    categoria = "Adulto joven"
} else if(edad >= 36 && edad <= 59){
    categoria = "Adulto"
} else if(edad >= 60){
    categoria ="Adulto mayor"
} else {
    console.log("Ingrese una edad valida")
}

console.log(`la categoria de ${edad} es: ${categoria}`)