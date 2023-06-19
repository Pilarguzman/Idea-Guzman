document.addEventListener('DOMContentLoaded', function() {
  // Datos de productos
  const productos = [
    { id: 1, nombre: "Set Cenicero", precio: 6400 },
    { id: 2, nombre: "Set Aceitero y Vinagrero", precio: 12700 },
    { id: 3, nombre: "Macetero Leopardo", precio: 7400 },
    { id: 4, nombre: "Set Maceteros", precio: 12600 },
    { id: 5, nombre: "Plato Flores", precio: 2300 },
    { id: 6, nombre: "Set Completo Aliso", precio: 26800 },
    { id: 7, nombre: "Taza Leopardo", precio: 1200 },
    { id: 8, nombre: "Vela Vainilla", precio: 3200 },
    { id: 9, nombre: "Set de salero y porta huevos", precio: 36700 },
    { id: 10, nombre: "Set tabla picar y mortero", precio: 24400 },
    { id: 11, nombre: "Set bandeja y posillo", precio: 30400 },
    { id: 12, nombre: "Florero Amazonia", precio: 24400 }
  ];

  let carrito = [];

  // Función para generar las cards de productos
  function generarCards() {
    const productsContainer = document.getElementById('productsContainer');
    productsContainer.innerHTML = '';

    productos.forEach(producto => {
      const card = document.createElement('div');
      card.className = 'card';

      const nombre = document.createElement('h3');
      nombre.textContent = producto.nombre;

      const precio = document.createElement('p');
      precio.textContent = `Precio: $${producto.precio}`;

      const agregarBtn = document.createElement('button');
      agregarBtn.textContent = 'Agregar al carrito';
      agregarBtn.addEventListener('click', function() {
        agregarAlCarrito(producto.id);
      });

      card.appendChild(nombre);
      card.appendChild(precio);
      card.appendChild(agregarBtn);

      productsContainer.appendChild(card);
    });
  }

  // Función para agregar un producto al carrito
  function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    if (producto) {
      carrito.push(producto);
      console.log('Producto agregado al carrito:', producto);
    }
  }

  // Función para calcular el total de la compra
  function calcularTotal() {
    let total = 0;
    for (const producto of carrito) {
      total += producto.precio;
    }
    return total;
  }

  // Función para mostrar el carrito en pantalla
  function mostrarCarrito() {
    const output = document.getElementById('output');
    output.innerHTML = '';

    if (carrito.length === 0) {
      output.textContent = 'El carrito está vacío.';
    } else {
      const lista = document.createElement('ul');

      carrito.forEach(producto => {
        const item = document.createElement('li');
        item.textContent = producto.nombre;
        lista.appendChild(item);
      });

      const total = document.createElement('p');
      total.textContent = `Total: $${calcularTotal()}`;

      output.appendChild(lista);
      output.appendChild(total);
    }
  }

  // Evento de clic en el botón "Realizar Compra"
  const comprarButton = document.getElementById('comprarButton');
  comprarButton.addEventListener('click', function() {
    mostrarCarrito();
  });

  // Generar las cards de productos al cargar la página
  generarCards();
});
