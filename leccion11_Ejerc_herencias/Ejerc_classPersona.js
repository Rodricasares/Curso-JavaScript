class Persona{

    static contadorPersonas = 0;//atributo de nuestra clase
   
    constructor(nombre, apellido, edad){
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre; 
        this._apellido = apellido;
        this._edad = edad;
        
        if( Persona.contadorPersonas < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersonas;
        }
        else{
            console.log('Se han superado el máximo de objetos permitidos');
        }
    }
    //Para idPersona solo get para mostrar nunca set porque podria editar el id del objeto
    get idPersona(){
        return this._idPersona;
    }
    // ^
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
  
    set apellido(apellido){
        this._apellido = apellido;
    }
    get edad(){
        return this._nombre;
    }

    set edad(edad){
        this._edad = edad;
    }
    //
    nombreCompleto(){
        return `${this.idPersona}${this._nombre}${this._apellido}${this._edad}`;
    }
    //Sobreescribiendo el metodo de la clase Padre (Object)
    toString(){
        //Se aplica poliformismo (multiples formas en tiempo de ejecucion)
        //el metodo que se ejecuta depende si es una referencia de tipo padre 
        //o de tipo hijo
        return this.nombreCompleto();
    }

}
