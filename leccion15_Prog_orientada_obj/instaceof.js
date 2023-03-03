class Empleado{

    constructor(nombre,sueldo){
    this.nombre = nombre;
    this.sueldo = sueldo;
    

    }
    obtenerDetalles(){
        return `\n Empleado:Nombre\n ${this.nombre}\n Sueldo: ${this.sueldo}`
    }

}

class Gerente extends Empleado{
    constructor(nombre,sueldo,departamento){
        super(nombre,sueldo);
        this.departamento = departamento;
    }

obtenerDetalles(){
    return `Gerente: ${super.obtenerDetalles()},\n Departamento: ${this.departamento}}`;//super lo utilizaremos para hacer la llamada al metodo de la clase padre Empleado

}

}
// Con esta funcion fuera de las clases podrimos obtener la información tanto del padre como de la clase hijo
function imprimirTipo(tipo){
console.log(tipo.obtenerDetalles());
if(tipo instanceof Gerente){
    console.log('Este objeto es de tipo Gerente')
    console.log(tipo.departamento)
}
else if(tipo instanceof Empleado){
    console.log('Este objeto es de tipo Empleado')
    console.log(tipo.departamento)

}
else if(tipo instanceof Object){
    console.log('Este objeto es de tipo Objeto');
    console.log(tipo.departamento);

}
}
//----------------------////////////
let gerente0 = new Gerente('Benzema', 6000, 'Jugador_Deportivo');
let gerente1 = new Gerente('Marcos', 6000, 'Director_Deportivo');
let empleado0 = new Empleado('Rodrigo', 50000, 'Developer');

imprimirTipo(empleado0);
imprimirTipo(gerente0);