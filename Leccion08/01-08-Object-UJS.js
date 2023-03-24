//Como imprimir un objeto 
//modificarlo y agregar nuevas propiedades
let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 24,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido
    }
}

persona.tel = '55443322';

console.log( persona );

delete persona.tel;
console.log( persona );

//Concatenar cada valor de cada propiedad

console.log( persona.nombre + ' ' + persona.apellido);

//for in
for( nombrePropiedad in persona){
    console.log( persona[nombrePropiedad]);
}

let personaArray = Object.values( persona );

console.log( personaArray );

let personaString = JSON.stringify( persona );
console.log(personaString);
