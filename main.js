// Obtener el botón de menú y la lista de opciones del menú
const toggleButton = document.querySelector('.toggle');
const menuList = document.querySelector('.menu');

// Agregar un event listener al botón de menú para que muestre y oculte la lista de opciones del menú
toggleButton.addEventListener('click', () => {
  menuList.classList.toggle('active');
});

// Agregar un event listener a todos los enlaces de la lista de opciones del menú para que cierren la lista de opciones del menú cuando se hace clic en ellos
menuList.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuList.classList.remove('active');
  });
});

// Obtener todas las barras de habilidades
const skillBars = document.querySelectorAll('.porcentaje');

// Animar las barras de habilidades
skillBars.forEach((bar) => {
  const percentage = bar.dataset.porcentaje;
  bar.style.width = `${percentage}%`;
});
// Código JS para cambiar el color de la caja al hacer clic
var caja = document.querySelector('.caja');
caja.addEventListener('click', function() {
	this.style.backgroundColor = 'blue';
});
// Selecciona el botón de menú y el menú
const toggle = document.getElementById('toggle');
const menu = document.getElementById('menu');

// Añade un evento al botón de menú para abrir y cerrar el menú
toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
  toggle.classList.toggle('active');
});
// Función para desplegar el menú en versión móvil
function toggleMenu() {
  var menu = document.getElementById("menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

// Evento de click en el icono de menú
var toggle = document.getElementById("toggle");
toggle.addEventListener("click", toggleMenu);
