

let person0 = {
    name:'Rodri',
    last:'Cantudo',
    fullName: function(titulo, tlf){
       //return this.name + ' ' + this.name
         return this.name + ' ' + this.last+ ' ' + this.titulo + ' ' + this.tlf
    }
    }
    
    let person1 = {
        name:'Ana',
        last:'García'
    }
    
    //Metodo CALL para usar el metodo person0 con los datos del person1    
    
    console.log(person0.fullName());
    console.log(person0.fullName('Developer', '646464646'));
    console.log(person0.fullName.call(person1));
    console.log(person0.fullName.call(person1));
    // metodo APPLY 
    console.log(person0.fullName.apply(person1));
     //, 'Mecanico', '111222333'
    console.log(person0.fullName.apply(person1));

    let arreglo = ['Mecanico', '111222333']
    console.log(person0.fullName('Developer', '666777888'));

    console.log(person0.fullName.apply(person1));
    console.log(person0.fullName.apply(person1, ['Camarero', '999222333']));
    console.log('XXX')