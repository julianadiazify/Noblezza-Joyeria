// Variables del carrito
let cart = [];
const cartPanel = document.getElementById('cart-panel');
const cartIcon = document.getElementById('cart-icon');
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const menuToggle = document.getElementById('menu-toggle'); // Botón del menú desplegable
const navbar = document.getElementById('navbar'); // Barra de navegación
const userIcon = document.getElementById('user-icon'); // Ícono de usuario

// Verifica que los elementos existan antes de añadir eventos
if (cartIcon) {
  cartIcon.addEventListener('click', () => {
    cartPanel.classList.toggle('active');
  });
}

// Agregar productos al carrito
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', e => {
    const name = e.target.getAttribute('data-name');
    const price = parseFloat(e.target.getAttribute('data-price'));
    const img = e.target.getAttribute('data-img');
    cart.push({ name, price, img });
    updateCart();
  });
});

// Actualizar el contenido del carrito
function updateCart() {
  if (!cartItems || !cartTotal || !cartCount) return;

  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    cartItems.innerHTML += `
      <div>
        <img src="${item.img}" alt="${item.name}" style="width:50px; height:auto; margin-right:10px;">
        ${item.name} - $${item.price.toFixed(2)}
        <button onclick="removeItem(${index})">Eliminar</button>
      </div>
    `;
  });
  cartTotal.textContent = total.toFixed(2);
  cartCount.textContent = cart.length;
}

// Eliminar un producto del carrito
function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

// Finalizar compra
const checkoutButton = document.getElementById('checkout');
if (checkoutButton) {
  checkoutButton.addEventListener('click', () => {
    alert('Gracias por tu compra.');
    cart = [];
    updateCart();
  });
}

// Desplazamiento suave entre secciones
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Alternar el menú desplegable al hacer clic en el botón
if (menuToggle && navbar) {
    menuToggle.addEventListener('click', () => {
      navbar.classList.toggle('active'); // Añade o quita la clase "active"
    });
  }
  
  // Cerrar el menú al hacer clic en un enlace
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('active'); // Cierra el menú al hacer clic en cualquier enlace
    });
  });
// Evento para el ícono de usuario
if (userIcon) {
  userIcon.addEventListener('click', () => {
    alert('Iniciar sesión / Mi cuenta');
  });
}
const reviewCarousel = document.querySelector('.review-carousel');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

// Mover el carrusel hacia la izquierda
leftArrow.addEventListener('click', () => {
  reviewCarousel.scrollLeft -= 300; // Ajusta la cantidad de desplazamiento
});

// Mover el carrusel hacia la derecha
rightArrow.addEventListener('click', () => {
  reviewCarousel.scrollLeft += 300;
});
/* Lista de deseos flotante */
.wishlist-popup {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 300px;
  max-height: 400px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: none; /* Ocultar por defecto */
  flex-direction: column;
  z-index: 1000;
}

/* Cabecera de la lista de deseos */
.wishlist-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #004d40;
  color: #fff;
  border-bottom: 1px solid #ddd;
}

/* Botón de cerrar */
.close-btn {
  background: none;
  border: none;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
}

/* Contenido de los elementos */
.wishlist-items {
  padding: 10px;
  overflow-y: auto;
}

/* Botón flotante de abrir */
.wishlist-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #004d40;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  z-index: 1000;
}

.wishlist-button:hover {
  background-color: #d4af37;
}