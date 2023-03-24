class Persona{
    static contadorPersonas = 0;

    constructor(nombre, apellido, edad){
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get IdPersona(){
        return this._idPersona;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this.apellido;
    }
    set apellido( apellido ){
        this._apellido = apellido;
    }

    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }
    /*
    informacionCopleta(){
        return this._nombre +' '+ this._apellido +' '+ this._edad;
    }
    */
    toString(){
        return `
        ${this._idPersona} 
        ${this._nombre} 
        ${this._apellido} 
        ${this._edad}`;
    }

}

class Empleado extends Persona{
    
    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad, sueldo){
       super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        return this._sueldo;
    }
    set sueldo( sueldo ){
        this._sueldo = sueldo;
    }

    toString(){
        return `
        ${super.toString()} 
        ${this._sueldo} 
        ${this._idEmpleado}`;
    }


}





class Cliente extends Persona{
    static contadorClientes = 0;
    //_fechaRecistro = new Date();

    constructor(nombre, apellido, edad, fechaRecistro){
        super(nombre, apellido, edad);
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

//prueba clase Persona

let persona1 = new Persona('Juan','Perez',24);
console.log( persona1.toString() );
let persona2 = new Persona('Sebastian','Quiroga',24);
console.log( persona2.toString() );




let empleado1 = new Empleado('Carlos','Gomez',24, 5999.00);
console.log( empleado1.toString() );
let empleado2 = new Empleado('Diego', 'Quiroga', 26, 30000)
console.log( empleado2.toString() );

let cliente1 = new Cliente('Ke', 'Personaje', 28, new Date());
console.log( cliente1.toString() );

let cliente2 = new Cliente('Laura', 'Se te ve la tanga', 20, new Date());
console.log( cliente2.toString() );