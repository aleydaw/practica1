const { stdout, stdin } = require('process');
const readline = require('readline');
const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
})

rl.question("Introduzca una cadena de texto: ",(cadena)=>{
    rl.question("Introduzca la letra a contar: ",(letraBuscar)=>{
        let contadorLetra= 0;
        let posicion = 0;

        do {
        if(cadena[posicion].toLocaleLowerCase() === letraBuscar.toLocaleLowerCase()){
            contadorLetra++;
        }
        posicion++;
        }while(posicion < cadena.length);

        console.log(`La letra ${letraBuscar} aparece ${contadorLetra} veces en la cadena.`)
        rl.close()
    })
})