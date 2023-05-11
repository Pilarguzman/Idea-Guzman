let saldoDisponible = 500;
let productosDisponibles = [
  { nombre: "Producto 1", precio: 100 },
  { nombre: "Producto 2", precio: 200 },
  { nombre: "Producto 3", precio: 300 }
];

function realizarCompra() {
  let productoElegido = prompt("Ingrese el número del producto que desea comprar:\n1. Producto 1\n2. Producto 2\n3. Producto 3");
  productoElegido = parseInt(productoElegido);

  if (isNaN(productoElegido) || productoElegido < 1 || productoElegido > 3) {
    alert("Ingrese un número válido de producto.");
    return;
  }

  let producto = productosDisponibles[productoElegido - 1];

  if (producto.precio > saldoDisponible) {
    alert("No tienes suficiente saldo para comprar este producto.");
    return;
  }

  confirmarCompra(producto);
}

function confirmarCompra(producto) {
  let confirmacion = confirm("¿Deseas comprar " + producto.nombre + " por $" + producto.precio + "?");

  if (confirmacion) {
    saldoDisponible -= producto.precio;
    console.log("¡Compra realizada con éxito! Saldo restante: $" + saldoDisponible);
  } else {
    console.log("Compra cancelada.");
  }
}
