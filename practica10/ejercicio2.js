class Coche {
    constructor(marca, modelo) {
        this._marca = marca;
        this._modelo = modelo;
    }
    
    arrancar() {
        console.log(`${this._marca} ${this._modelo} está arrancando`);
    }

    detener() {
        console.log(`${this._marca} ${this._modelo} se ha detenido`);
    }
}

let coche1 = new Coche("toyota", "corolla");
coche1.arrancar();
coche1.detener();

