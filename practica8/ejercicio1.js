const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function mostrarMenu(){
    rl.question("1.- Escribir\n2.- Leer\n3.- Salir\nEscoge una opcion: ",(opcion)=>{
        switch(opcion){
            case '1':
                console.log("Elijiste opcion 1 Escribir")
                mostrarMenu()
            break;
            case '2':
                console.log("Elijiste opcion 2 leer")
                mostrarMenu()
            break;
            case '3':
                console.log("Elijiste opcion 3 Salir")
                rl.close()
            break;
            default:
                console.log("Ingrese una opción válida")
                mostrarMenu()
        }
    })
}

mostrarMenu()