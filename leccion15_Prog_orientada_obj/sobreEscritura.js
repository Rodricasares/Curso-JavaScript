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

let gerente0 = new Gerente('Benzema', 6000, 'Jugador_Deportivo');
let gerente1 = new Gerente('Marcos', 6000, 'Director_Deportivo');
let empleado0 = new Empleado('Rodrigo', 50000, 'Developer')
console.log(gerente0)

console.log(gerente1.obtenerDetalles())
console.log(empleado0.obtenerDetalles())

 