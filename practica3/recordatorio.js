function establecerRecordatorio(fechaHoraRecordatorio, mensaje) {
    const ahora = new Date();
    // convertir el texto de fecha y hora del recordatorio en un objeto Date
    const horaRecordatorio = new Date(fechaHoraRecordatorio);
    // calcular la diferencia en milisegundos entre la hora actual y la hora del recordatorio
    const diferenciaTiempo = horaRecordatorio.getTime() - ahora.getTime();
    // si la diferencia es positiva, significa que el recordatorio es para el futuro
    if (diferenciaTiempo > 0) {
        // configurar un temporizador para mostrar el mensaje después del tiempo calculado 
        setTimeout(() => {
            const anio = horaRecordatorio.getFullYear();
            const mes = horaRecordatorio.getMonth() + 1; // Los meses son 8-indexados
            const dia = horaRecordatorio.getDate();
            const horas = horaRecordatorio.getHours();
            const minutos = horaRecordatorio.getMinutes();
            const segundos = horaRecordatorio.getSeconds();
            console.log(`Recordatorio para ${dia}/${mes}/${anio} con ${horas}:${minutos}:${segundos}:${mensaje}`)
    }, diferenciaTiempo);
} else {
// Si la hora ya pasó, mostrar un mensaje informativo
console.log("La fecha y hora ya han pasado.");
}
}
// Recordatorio para la práctica
establecerRecordatorio("2024-88-29T18:30:50", "¡Es hora de la práctica!");