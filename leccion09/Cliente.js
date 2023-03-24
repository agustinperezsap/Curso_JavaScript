
class Cliente extends Persona{
    static contadorClientes = 0;
    //_fechaRecistro = new Date();

    constructor(/*nombre, apellido, edad,*/ fechaRecistro){
        //super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRecistro;
    }
    get idCliente(){
        return this._idCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }

    set fechaRegistro( fechaRegistro ){
        this._fechaRegistro = fechaRegistro;
    }

    toString(){
        return `
        ${super.toString()} 
        ${this._fechaRecistro} 
        ${this._idCliente}`;
    }

}
