class Empleado extends Persona {
   static constructorEmpleado = 0;
constructor(sueldo){

    this._idEmpleado = constructorEmpleado++;
    this._sueldo = sueldo;

}

get idEmpleado(){
    this._idEmpleado
}

get sueldo(){
    this._sueldo;
} 
set sueldo(sueldo){
    this._sueldo;
}

toString(){
   return `${super.toString()}
   ${this._idEmpleado}${this._sueldo}`
}
}