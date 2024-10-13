const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numeroCorrecto = random(1, 10); 
let intentos = 0;

function adivinarNumero() {
    rl.question("Ingrese un número del 1 al 10 para adivinar: ", (input) => {
        let numero;
        do {
            numero = parseInt(input, 10); 
            intentos++;

            if (numero === numeroCorrecto) {
                console.log(`¡Felicidades! Has adivinado el número ${numeroCorrecto} en ${intentos} intento(s).`);
                rl.close();
                return; 
            } else {
                console.log("Número incorrecto, intenta de nuevo.");
                return adivinarNumero(); 
            }
        } while (numero !== numeroCorrecto);
    });
}

adivinarNumero();
