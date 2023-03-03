/// Classes 
class People {
    constructor(name,last){
        this.name = name;
        this.last = last;
    }

    get name0(){
        return this._name + this._name;
    }
    set name0(name){
        return this._name + this._name;
    }
 }
    let people0 = new People('Mario', 'Zarza');
    let people1 = new People('Dani', 'Zarza');
    //Metodo_get
    console.log(people0.name);
    console.log(people1.name);
    //arreglo
    people1.name  = 'Juana';
 
    //Metodo_set
    let people2 = new People('Juana', 'Sánchez');
        //arreglo
      //  people2.last  = 'Sánchez';
 
    console.log(people2);
    console.log("ESTO FUE TODO");