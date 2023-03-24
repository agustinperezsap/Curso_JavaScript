class Persona {
    static contadorPersonas = 0; //atributos de nuesta clase
    
    static get MAX_OBJ(){
        return 5;
    }
    
  
    constructor(nombre, apellido) {
      
      this._nombre = nombre;
      this._apellido = apellido;
      if( Persona.contadorPersonas < Persona.MAX_OBJ){
        this.idPersona = ++Persona.contadorPersonas;
      }
      else{
          console.log('Se han superado el maximo de objetos permitidos');
      }
      
    }
  
    get nombre() {
      return this._nombre;
    }
  
    set nombre(nombre) {
      this._nombre = nombre;
    }
    get apellido() {
      return this._apellido;
    }
    set apellido(apellido) {
      this._apellido = apellido;
    }
  
    nombreCompleto() {
      return this._nombre + " " + this._apellido;
    }
    //Sobreescribiendo el metodo de la clase Padre
    toString() {
      //Se aplica polimorfismo (multiples formas de ejecucion)
      //el metodo que se ejecuta depende si es una referencia
      //de tipo padre o de tpo hijo
      return this.idPersona + ' ' + this.nombreCompleto();
    }
    //metodos statics
    static saludar() {
      console.log("Saludos desde el metodo static");
    }
    static saludar2(persona) {
      console.log(persona.nombre + " " + persona.apellido);
    }
  }
  
  class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
      super(nombre, apellido);
      this._departamento = departamento;
    }
    get departamento() {
      return this._departamento;
    }
    set departamento(departamento) {
      this._departamento = departamento;
    }
    //sobreescritura
    nombreCompleto() {
      return super.nombreCompleto() + " " + this._departamento;
    }
  }
  
  let persona1 = new Persona("Juan", "Perez");
  console.log( persona1.toString() );
  
  let emplado1 = new Empleado("Maria", "Jimenez", "Sistemas");
  console.log( emplado1.toString() );


  console.log( Persona.contadorPersonas );

  let persona2 = new Persona('Karla', 'Ramirez');
  console.log( persona2.toString() );
  console.log( Persona.contadorPersonas );
  console.log( Persona.MAX_OBJ );

  let persona3 = new Persona('Mariano', 'Lara');
  let persona4 = new Persona('Armando', 'Toledo');
  let persona5 = new Persona('Laura', 'Perez');

  console.log( persona5.toString());