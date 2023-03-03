
// ---------------------------- HERENCIAS ---------HERENCIAS ---------HERENCIAS ---------//
//--------CLASE----PADRE------//--------CLASE----PADRE------//--------CLASE----PADRE----//

class People {
    static contadorPeople = 0; //Atributo para la CLASE, solo se puede acceder desde la clase.
   
     constructor(name,last){ // Constructor sirve para formar la clase
         
         this.nombre = name;
         this.last = last;
         this.idPeople = ++People.contadorPeople;
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
 
     static saludar(){
         console.log('Saludos desde Static')
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
     static saludar(){
         console.log('saludos desde método static');
     }
 
     static saludar2(people0){
         console.log(people0);
     } 
 }  
 // CLASE HIJO    CLASE HIJO     CLASE HIJO    CLASE HIJO    CLASE HIJO //
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
         return super.fullName() + ' ' + this._departamento  //super() <----- solo fuinciona en clase hijos 
     }
 
 }
     let people0 = new People('Mario', 'Zarza');
     let people1 = new People('Dani', 'Zarza');
     console.log(people1.toString())

     let empleado = new Employed('Juani', 'Sánchez', 'Housekeeping');
     console.log(People.contadorPeople)
     let people3 = new People('Antonio', 'Catalan'); //El contador se incrementara tanto si se agrega una People como un Emploted
     console.log(People.contadorPeople)
     let empleado1 = new Employed('Rodri', 'Cantudo', 'Developer'); //El contador se incrementara tanto si se agrega una People como un Emploted
     
     
    console.log( People.contadorPeople );
     let people03 = new People('Juan', 'Vargas')
     console.log(people1.toString())
     console.log(People.contadorPeople)
     console.log(people03.toString() )