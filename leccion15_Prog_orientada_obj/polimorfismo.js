class Empleado{

    constructor(nombre,sueldo){
    this.nombre = nombre;
    this.sueldo = sueldo;
    

    }
    obtenerDetalles(){
        return `Empleado:Nombre ${this.nombre}\n sueldo: ${this.sueldo}`
    }

}

class Gerente extends Empleado{
    constructor(nombre,sueldo,departamento){
        super(nombre,sueldo);
        this.departamento = departamento;
    }

obtenerDetalles(){
    return `Gerente: ${super.obtenerDetalles()}, Departamento: ${this.departamento}}`;//super lo utilizaremos para hacer la llamada al metodo de la clase padre Empleado
}

}
// Con esta funcion fuera de las clases podrimos obtener la información tanto del padre como de la clase hijo
function imprimir(tipo){
console.log(tipo.obtenerDetalles());
}
////////////////////
let gerente0 = new Gerente('Benzema', 6000, 'Jugador_Deportivo');
let gerente1 = new Gerente('Marcos', 6000, 'Director_Deportivo');
let empleado0 = new Empleado('Rodrigo', 50000, 'Developer')


imprimir(empleado0);
imprimir(gerente0);