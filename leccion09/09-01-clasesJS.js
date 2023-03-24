class Persona {
  static contadorObjetosPersona = 0; //atributos de nuesta clase

  email = "valor default email"; //atributo de nuestros objetos

  constructor(nombre, apellido) {
    Persona.contadorObjetosPersona++;
    this._nombre = nombre;
    this._apellido = apellido;
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
    return this.nombreCompleto();
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
console.log(persona1); //get nombre
console.log(persona1.toString());

let emplado1 = new Empleado("Maria", "Jimenez", "Sistemas");
console.log(emplado1);
console.log(emplado1.nombreCompleto());
console.log(emplado1.toString());

//persona1.saludar(); no es posible llamar un metodo static
// desde un objeto

Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(emplado1);

console.log(Persona.contadorObjetosPersona);

console.log(Empleado.contadorObjetosPersona);
