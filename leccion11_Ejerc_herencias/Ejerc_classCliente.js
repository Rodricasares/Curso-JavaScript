class Cliente extends Persona {
static constructorClientes = 0;
    constructor(fechaReg){
        this._idCliente = constructorClientes++
        this._fechaReg = fechaReg;
    }
    get _idCliente(){
        this._idCliente;
    }
    get fechaReg(){
        this._fechaReg;
    }
    set fechaReg(fechaReg){
        this._fechaReg;
    }
    toString(fechaReg){
      return `${this._idCliente}${this._fechaReg}`
    }
}