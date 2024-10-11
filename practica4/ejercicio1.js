// Una función asíncrona doTask que recibe un número de iteraciones
const doTask = (iteraciones) => {

    // Retornamos una nueva promesa que contiene la lógica 
    return new Promise((resolve, reject) => {
        // Arreglo donde se almacenarán los números aleatorios 
        const numbers = [];

        // Bucle que itera 'iteraciones' veces
        for (let i = 0; i < iteraciones; i++) {
            // Genera número aleatorio entre 1 y 6
            const number = 1 + Math.floor(Math.random()*6);
            // Agrega el número generado al arreglo 'numbers'
            numbers.push(number);
            // Si el número es 6, rechaza la promesa con un error
            if (number === 6) {
                reject({
                    error: true, // Indicador de error
                    message: "Se ha sacado un 6" // Mensaje de error
                });
                return; 
            }
        }
        // Si no se ha generado un 6, resuelve la promesa con el arreglo de números
        resolve({
            error: false,
            value: numbers
        });
    });
};

// Ejecutamos la función con un número de iteraciones válido
doTask(5)
.then(result => console.log("Tiradas correctas: " + result.value))
.catch(err => console.error("Error en la tirada: " + err.message));