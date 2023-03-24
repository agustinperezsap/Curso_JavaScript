//Prototype te permite agregar una nueva propiedad al ojeto
//funcion constructor de objetos de tipo persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}
//prototype
Persona.prototype.tel =  '44332211';

let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
padre.tel = '5544433';
console.log( padre.tel );

let madre = new Persona('Lauroa', 'Quintero', 'lquientero@mail.com');
madre.tel = '55667744';
console.log( madre.tel );

