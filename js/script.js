class Producto {
  constructor(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
}
let productos = [
  new Producto("remera", 7000, 7),
  new Producto("buzo", 15000, 10),
  new Producto("pantalon", 12000, 5),
];
console.log(productos);

let productoAEliminar = prompt("Ingrese el nombre de un producto a eliminar").toLowerCase();
let i = productos.findIndex((producto) => producto.nombre == productoAEliminar);

if (i != -1) {
  productos.splice(i, 1);
} else {
  alert("Este producto no existe");
}

for(producto of productos){
    console.log(producto);
}
