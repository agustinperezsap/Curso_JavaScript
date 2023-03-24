

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 24,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang( lang ){
        this.idioma = lang.toUpperCase();
    },
     get nombreCompleto(){
        return this.nombre + ' ' + this.apellido
    }
}

console.log( persona.lang );

persona.lang = 'en';

console.log( persona.lang );

console.log( persona.idioma );

