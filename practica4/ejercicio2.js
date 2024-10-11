// Se crea una promesa que resuelvde despues de un tiempo determinado (3 segundos)
const esperarTresSegundos = new Promise((resolve) => {
    setTimeout(()=>{
        resolve("Tiempo de espera completado después de 3 segundos")
    },3000)
})

//consumo de la promesa
esperarTresSegundos
    .then((mensaje) => {
        console.log(mensaje); //Mostrará el mensaje después de 3 segundos
    })
    .catch((error) => {
        console.error(error); // captura de errores en caso de fallo
    })