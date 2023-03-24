//funcion constructor de objetos de tipo persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
padre.tel = '55443322';
console.log( padre.tel );

let madre = new Persona('Lauroa', 'Quintero', 'lquientero@mail.com');
console.log( madre );

padre.nombre = 'Carlos';
console.log( padre );

/**Como Crear un ojeto de manera formal 
 * y su sintaxis simplificada 
 */

let miObjeto = new Object();
let miObjeto2 = {};

let miCadena1 =new String('Hola');
let miCadena2 = 'Hola';

let miNumero1 = new Number(1);
let miNUmero2 = 1;

let miArreglo = new Array();
let miArreglo2 = [];

let miBoolean = new Boolean(false);
let miBoolean2 = false;

let miFuncion = new Function();
let miFuncion2 = function(){};




