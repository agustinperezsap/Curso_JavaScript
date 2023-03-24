let miPromesa = new Promise((resolved, rejected) => {
    let expresion = true;
    if(expresion)
        resolved('Resolvio correcto');
    else    
        rejected('Se produjo un error');
});

// miPromesa.then(
//     valor => console.log( valor ),
//     error => console.log( error )
// );

// miPromesa
// .then(valor => console.log( valor ))
// .catch(error => console.log(error));

let promesa = new Promise((resolved) => {
    //console.log('inicio Promesa');
    setTimeout ( ()=> resolved('Saludos con promesa y timeout'), 3000);
    //console.log('fin Promesa');
});

// promesa
// .then( valor => console.log(valor));

//async indica que una funcion regresa una promesa
async function mifuncionConPromesa(){
    return 'Saludos con promesa y async';
}

// mifuncionConPromesa()
// .then( valor => console.log(valor));

// async/ await

async function funcionConPromesaYAwait(){
    let miPromesa = new Promise( resolved => {
        resolved('Promesa con await');
    });

    console.log( await miPromesa)

}

// funcionConPromesaYAwait();


//Promesas, await, async y setTimeuot

async function funcionConPromesaAwaitTimeout(){
    console.log('inicio funcion')
    let miPromesa = new Promise(resolved => {
        setTimeout(() => resolved('promesa con await y timeout'),3000);
    });
    console.log( await miPromesa); 
    console.log('fin funcion')
}

funcionConPromesaAwaitTimeout();