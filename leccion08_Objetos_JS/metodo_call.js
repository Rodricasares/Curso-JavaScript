let person0 = {
    name:'Rodri',
    last:'Cantudo',
    fullName: function(){
        return this.name + ' ' +this.last
    }
    }
    
    let person1 = {
        name:'Ana',
        last:'García'
    }
    
    //Metodo CALL para usar el metodo person0 con los datos del person1    
    
    console.log(person0.fullName());
    console.log(person0.fullName.call(person1));
    