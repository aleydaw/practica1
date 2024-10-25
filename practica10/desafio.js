class Libro {
    constructor(titulo, autor, anio){
        this._titulo = titulo;
        this._autor = autor;
        this._anio = anio;
    }
    mostrarInfo(){return console.log(`El libro ${this._titulo} de ${this._autor} creado en ${this._anio} `)}
}

let libro1 = new Libro( "Middlesex", "Eugenides, Jeffrey", 2002);
let libro2 = new Libro("Angele", "rafael alberti", 1982);

libro1.mostrarInfo();
libro2.mostrarInfo();