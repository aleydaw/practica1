// Funcion que simula una solicitud de datos 
function solicitarDatosDelServidor(){
    return new Promise((resolve, reject) => {
        let exito = true;

        setTimeout(() => {
            if (exito){
                resolve({
                    id:1,
                    nombre: "Emely Muñoz",
                    edad: 19
                })
            } else {
                reject("Error al obtener los datos del servidor")
            }
        },2000)
    })
}

solicitarDatosDelServidor()
.then((datos) => {
    console.log("Datos recibidos: ", datos)
})
.catch((error) => {
    console.error(error)
})