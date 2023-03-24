class Empleado extends Persona{
    
    static contadorEmpleados = 0;

    constructor(sueldo){
       //super(nombre, apellido, edad);
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


let emplado1 = new Empleado('Juan','Perez','24', 5999.00);
console.log( emplado1.toString() );