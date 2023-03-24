class DispositivoEntrada{

    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }

    get marca(){
        return this._marca;
    }
}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;
    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton(){
        return this._idRaton;
    }

    toString(){
        return `Raton: [idRaton: ${this._idRaton}, tipo entrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }

}



class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;
    constructor(tipoEntrada,marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}



class Monitor{
    static contadorMonitores = 0;
    constructor(marca, tamanio){
        this._idMonitores = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamanio = tamanio;
    }

    get idMonitores(){
        return this._idMonitores;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca = marca;
    }

    get tamanio(){
        return this._tamanio;
    }

    set tamanio(tamanio){
        this._tamanio = tamanio;
    }

    toString(){
        return `Monitor: [ idMonitor:${this._idMonitores}, marca: ${this._marca}, tamanio: ${this._tamanio}]`;
    }

}


class Computadora{
    static contadorComputadoras=0;
    constructor(nombre, monitor, teclado, raton){
        this._idComputadora=++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    get idComputadora(){
        return this._idComputadora;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    toString(){
        return `Cmoputadora ${this._idComputadora}: ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this.teclado}`
    }
}


class Orden{
    static contadorOrdenes = 0;
    

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }
    
    get idOrden() {
    return this._idOrden;
    }

    
   agregarComputadora(computadora) {
    
    this._computadoras.push(computadora);
    
    }

    mostrarOrden() {
        let computadoraOrden = '';
        for ( let computadora of this._computadoras) {
          computadoraOrden += `\n${computadora}`;
        }
        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadoraOrden}`);
    }


}

let raton1 = new Raton('USB','HP');
let raton2 = new Raton('BT','Dell');


let teclado1 = new Teclado('BT', 'Redragon');
let teclado2 = new Teclado('USB', 'Redragon');


let monitor1 = new Monitor('BGH', 27);
let monitor2 = new Monitor('Lenovo', 15);


let computadora1 = new Computadora('Gamer', monitor1, raton1, teclado1);
//console.log( computadora1.toString() );

let computadora2 = new Computadora('Oficina', monitor2, teclado2, raton2);
//console.log( computadora2.toString() );

let orden1 = new Orden();
let orden2 = new Orden();

orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden2.agregarComputadora(computadora2);
orden2.agregarComputadora(computadora1);

orden1.mostrarOrden();
orden2.mostrarOrden();




