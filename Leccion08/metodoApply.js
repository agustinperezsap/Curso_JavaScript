let persona1 = {
    nombre: 'Juan',
    apellido: 'perez',
    nombreCompleto: function(titulo, tel){
        return titulo + ': ' +this.nombre + ' ' + this.apellido + ' ' + tel;
    }
}

let persona2 = {
    nombre : 'Carlos',
    apellido: 'Lara'
}

//Uso de apply para usar 
//El metdo de persona1.nombrecompleto con los datos del persona2
//la diferencia con el metodo call radica en el pasaje de parametros
//call se los hace por separado
//apply se los pasa como un arreglo
console.log( persona1.nombreCompleto('Lic', '66778899') );

let arreglo = ['Ing', '343442233'];
console.log( persona1.nombreCompleto.apply( persona2,arreglo ));


