
// ---------------------------- HERENCIAS ---------HERENCIAS ---------HERENCIAS ---------HERENCIAS -----------------------------------------------------------------//
// clase PADRE

Object.prototype

class People {
    constructor(name,last){
        this.nombre = name;
        this.last = last;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        return this._nombre = nombre;
    }
    fullName(){
        return this._nombre + ' ' +this._last
    }
    toString(){
        //Se aplica polimorfismo (multiples formas en tiempo de ejecucion)
        //el metodo que se ejecuta depende si es una referencia de tipo padre 
        //o de tipo hijo
        return this.fullName();
    }

    get last(){
        return this._last;
    }
    set last(last){
        return this._last = last;
    }
    fullName(){
        return this._nombre + ' ' + this._last
    }
   
 } 
// clase hijo 
 class Employed extends People {
    constructor(nombre, last, departamento){ // Debemos nombrar los valores de la clase padre
        super(nombre,last); // Para poder hacer la llamada a la clase padre es necesario utilizar super()
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        return this.departamento = departamento;
    }
    fullName(){
        return super.fullName() + ' ' + this._departamento 
    }

}
    let people0 = new People('Mario', 'Zarza');
    let people1 = new People('Dani', 'Zarza');
    //Metodo_get
    console.log(people0.departamento);
    console.log(people1.departamento);
    // Departamento
    let empleado = new Employed('Maria', 'Jimenez', 'Directora');
    let empleado1 = new Employed('Juan', 'Zarza', 'Constructor LEGO');
    console.log(empleado.fullName());
    console.log(empleado.toString());