// Determinar los beneficicios segun el plan de suscripcion
let plan = "basico";

switch(plan){
    case "basico":
        console.log("Plan básico: acceso limitado a contenido");
        break;
    case "estandar":
        console.log("Plan estándar: acceso a la mayoria de contenido");
        break;
    case "premium":
        console.log("Plan premium: acceso ilimitado a todo el contenido");
        break;
    default:
        console.log("plan no valido")
}