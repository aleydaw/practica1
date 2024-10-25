class Persona {
    constructor(nombre, edad){
        this._nombre = nombre;
        this._edad = edad;
    }
    mostrarInfo(){return console.log(`nombre: ${this._nombre} edad: ${this._edad}`)}

}

let persona1 = new Persona("aleyda", 19);

persona1.mostrarInfo()