class Producto {
    static  contadorProducto=0;
    constructor(nombre,precio){
        this._idProducto = ++Producto.contadorProducto;
        this._nombre = nombre;
        this._precio = precio;

    }

    get idProducto(){
      return  this._idProducto
    }

    get nombre(){
        return this._nombre
    }
    set nombre(nombre){
        return this._nombre = nombre;
    }
    
    get precio(){
        return this._precio
    }
    set precio(precio){
        return this._precio = precio;
    }

    toString(){
        return `idProducto: ${this._idProducto}, Nombre: ${this._nombre}, Precio: ${this._precio}`
    }
}

class Orden{                    // no contiene extends porque no es una relación de herencias si no de agregación
    static contadorOrden= 0;
    static get MAX_PRODUCT(){
        return 5;
    }
    constructor(){
        this._idOrden = ++Orden.contadorOrden;
        this._productos = [];
        //this._contadorProductosAdd = 0;
    }
get idOrden(){
    return this._idOrden
    }
AddProduct(producto){
    if(this._productos.length < Orden.MAX_PRODUCT){
        this._productos.push(producto);
        //this._producto[this._contadorProductosAdd++]=producto;
    }
    else{
        console.log('El limite de produictos a gregados a sido superado, LO SIENTO :(')
    }
}


calculadoraTotal(){
    
    let totalVentas = 0;
    for(let producto of this._productos){
        totalVentas += producto.precio
    } return totalVentas;
}

mostrarOrden(){
    let productosOrden = '';
    for (let producto of this._productos){
        productosOrden += '\n {' + producto.toString() + '} ';
    }
    console.log(`Orden: ${this._idOrden} Total: $${this.calculadoraTotal()}, Productos: ${productosOrden}`);
}

}



let producto0 = new Producto('Pantalon LEVIS' , 59 );
let producto1 = new Producto('Camisa' , 20 );
let producto2 = new Producto('Gorra' , 2 )
let producto3 = new Producto('Zapatillas ADIDAS', 62)
let producto4 = new Producto('cinturon Calvin K.', 12)

let orden1 = new Orden();
let orden2 = new Orden();
let orden3 = new Orden();
let orden4 = new Orden();
let orden5 = new Orden();
let orden6 = new Orden();


orden1.AddProduct(producto0);
orden2.AddProduct(producto1);
orden3.AddProduct(producto2);
orden4.AddProduct(producto3);
orden5.AddProduct(producto4);
orden6.AddProduct(producto4);

orden1.mostrarOrden();
orden2.mostrarOrden();
orden3.mostrarOrden();
orden4.mostrarOrden();
orden4.mostrarOrden();
orden5.mostrarOrden();
orden6.mostrarOrden();
