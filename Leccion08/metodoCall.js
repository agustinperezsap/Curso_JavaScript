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

//Uso de call para usar el metodo persona1.nombreCompleto
//con los datos de la persona2 

console.log( persona1.nombreCompleto('Lic', '445566687'));

console.log( persona1.nombreCompleto.call( persona2, 'Ing','44332234') );
