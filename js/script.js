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
        
        card.appendChild(nombre);
        card.appendChild(precio);
        
        productsContainer.appendChild(card);
      });
    }
    
    // Función para realizar la compra
    function realizarCompra(productoId) {
      const producto = productos.find(item => item.id === productoId);
      
      if (producto) {
        const output = document.getElementById('output');
        output.textContent = `¡Has comprado ${producto.nombre} por $${producto.precio}!`;
      } else {
        const output = document.getElementById('output');
        output.textContent = 'El producto seleccionado no existe.';
      }
    }
    
    // Evento de clic en el botón "Realizar Compra"
    const comprarButton = document.getElementById('comprarButton');
    comprarButton.addEventListener('click', function() {
      const productoInput = document.getElementById('productoInput');
      const productoId = parseInt(productoInput.value);
      
      realizarCompra(productoId);
    });
    
    // Generar las cards de productos al cargar la página
    generarCards();
  });
  