class CuentaBancaria {
    constructor(titular, saldo) {
        this._titular = titular;
        this._saldo = saldo;
    }

    // método estático
    static tipoDeCuenta() {
        return 'cuenta de ahorros';
    }

    imprimirInfo() {
        console.log(`titular: ${this._titular}, saldo: ${this._saldo}`);
    }
}

const cuenta1 = new CuentaBancaria('Aleyda', 3484);
cuenta1.imprimirInfo();
console.log(CuentaBancaria.tipoDeCuenta());
