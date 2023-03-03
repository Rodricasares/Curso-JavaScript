class DispositivoEntrada {

    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get (){
        return this._tipoEntrada;

    }
    set(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }

    get (){
        return this._marca;

    }
    set(marca){
        this._marca = marca;
    }



}
class Raton extends DispositivoEntrada {
    static contadorRaton = 0;


    constructor(tipoEntrada, marca){
        super(tipoEntrada,marca)
       this._idRaton = ++Raton.contadorRaton;
       
    }
       get (){
        return this._idRaton;

       }
    
       
    toString(){
        return `Raton: [Id_Raton: ${this._idRaton} Tipo_de_Entrada: ${this._tipoEntrada } Marca: ${this._marca}]`
    
    }
}

class Teclado extends DispositivoEntrada{
    static contadorTeclado= 0;
    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idTeclado = ++Teclado.contadorTeclado;
    }
    get (){
        return this._idTeclado;
       }

    toString(){
        return `Teclado: [IdTeclado: ${this._idTeclado} Tipo_de_Entrada: ${this._tipoEntrada} Marca: ${this._marca}]`
    }

}

class Monitor{
    static constructorMonitor = 0;
    constructor(marca,tamaño){
        this._idMOnitor = ++Monitor.constructorMonitor;
        this._marca = marca;
        this._tamaño = tamaño;
    }
    get(){
        return this._idMOnitor;
}

    toString(){
        return `Monitor: [IdMonitor: ${this._idMOnitor} Marca: ${this._marca} Tamaño: ${this._tamaño}]`
    }

}

class Computadora{
 static contadorComputadora = 0;
 constructor(nombre,monitor,raton,teclado){
    this.idComputadora = ++Computadora.contadorComputadora;
    this._nombre = nombre;
    this._monitor = monitor;
    this._raton = raton;
    this._teclado = teclado;
 }
 toString(){
    return `Computadora: ${this.idComputadora}: ${this.marca} \n ${this._monitor} \n ${this._raton} \n ${this._teclado} `
 }
 

}

//Raton
let raton1 = new Raton('USB', 'HP')
let raton2 = new Raton('Bluetooth', 'Acer')

console.log(raton1.toString);
console.log(raton2.toString);
raton2.marca = 'Amazon_Mouse'; //Arreglo del valor marca de Raton
console.log(raton2.toString());
console.log(raton2)
// Teclado
let teclado1 = new Teclado('Usb', 'Logitech')
let teclado2 = new Teclado('Bluetooth', 'APOCALYPSE')
console.log(teclado1.toString())
console.log(teclado2.toString())
//Monitor
let monitor1 = new Monitor('Lenovo', '1200*90')
let monitor2 = new Monitor('Philip', '1200*90')
console.log(monitor1.toString())
console.log(monitor2.toString())

//Computadora
let computadora1 = new Computadora('Acer',raton1, monitor2, teclado1 );
console.log(computadora1)