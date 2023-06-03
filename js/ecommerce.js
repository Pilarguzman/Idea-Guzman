let saldoDisponible = 500;
let productosDisponibles = [
    { nombre: "Set Cenicero", precio: 6400 },
    { nombre: "Set Aceitero y Vinagrero", precio: 12700 },
    { nombre: "Macetero Leopardo", precio: 7400 },
    { nombre: "Set Maceteros", precio: 12600 },
    { nombre: "Plato Flores", precio: 2300 },
    { nombre: "Set Completo Aliso", precio: 26800 },
    { nombre: "Taza Leopardo", precio: 1200 },
    { nombre: "Vela Vainilla", precio: 3200 }
];

function realizarCompra() {
    let productoElegido = parseInt(prompt("Ingrese el número del producto que desea comprar:\n1. Set Cenicero\n2. Set Aceitero y Vinagrero\n3. Macetero Leopardo\n4. Set Maceteros\n5. Plato Flores\n6. Set Completo Aliso\n7. Taza Leopardo\n8. Vela Vainilla"));

    if (isNaN(productoElegido) || productoElegido < 1 || productoElegido > productosDisponibles.length) {
        alert("Ingrese un número válido de producto.");
        return;
    }

    let producto = productosDisponibles.find((prod, index) => index === productoElegido - 1);

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

productosDisponibles.forEach((producto) => {
    console.log(producto.nombre + " - $" + producto.precio);
});

let productosBaratos = productosDisponibles.filter((producto) => producto.precio < 5000);
console.log("Productos baratos:");
productosBaratos.forEach((producto) => {
    console.log(producto.nombre + " - $" + producto.precio);
});
