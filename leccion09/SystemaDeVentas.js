class Producto {
  static contadorProductos = 0;
  constructor(nonmbre, precio) {
    this._idProducto = ++Producto.contadorProductos;
    this._nombre = nonmbre;
    this._precio = precio;
  }

  get idProducto() {
    return this._idProducto;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get precio() {
    return this._precio;
  }

  set precio(precio) {
    this._precio = precio;
  }

  toString() {
    return `
        idProducto: ${this._idProducto}, 
        nombre: ${this._nombre}, 
        precio: $ ${this._precio}`;
  }
}

class Orden {
  static contadorOrdenes = 0;
  static get MAX_PRODUCTOS() {
    return 5;
  }
  constructor() {
    this._idOrden = ++Orden.contadorOrdenes;
    this._productos = [];
    //this._contadorProductosAgregados =0;
  }

  get idOrden() {
    return this._idOrden;
  }

  agregarProducto(producto) {
    if (this._productos.length < Orden.MAX_PRODUCTOS) {
      this._productos.push(producto);
      //this._productos[this._contadorProductosAgregados++] = producto;
    } else {
      console.log("No se pueden agregar mas productos");
    }
  }

  calcularTotal() {
    let totalVentas = 0;
    for (let producto of this._productos) {
      totalVentas += producto.precio;
    }
    return totalVentas;
  }

  mostrarOrden() {
    let productoOrden = "";
    for (let producto of this._productos) {
      productoOrden += "\n{" + producto.toString() + "} ";
    }
    console.log(`Orden: ${this._idOrden}, total: ${this.calcularTotal()}, Productos: ${productoOrden}`);
  }

  /*toString(){
        return `Orden: ${this._idOrden}, 
        total: ${this.calcularTotal()},
        Productos: ${productoOrden}`;
    }
    */
}

let producto1 = new Producto("Tomate", 20, 0);
let producto2 = new Producto("Pantalon", 100);

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();

let orden2 = new Orden();
let producto3 = new Producto('Cinturon', 50);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto3);

orden2.mostrarOrden();
