let categoria= 'C';
let descuento;
let precio = 100;

switch(categoria){
    case 'A':
        console.log("La categoria A cuenta con 15 % de descuento");
        descuento = precio - (precio*0.15);
        break;
    case 'B':
        console.log("La categoria B cuenta con 10 % de descuento");
        descuento = precio - (precio*0.10);
        break;
    case 'C':
        console.log("La categoria C cuenta con 5 % de descuento");
        descuento = precio - (precio*0.05);
        break;
    default:
        console.log("Tipo de categoria invalida")
}
console.log(`Su total de la compra $${precio} y el descuento de la categoria ${categoria} es de: $${descuento}`)