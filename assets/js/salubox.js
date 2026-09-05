/* Salubox — interacciones mínimas: menú móvil y submenú de productos. */
(function () {
  'use strict';

  // Submenú «Productos y servicios» en escritorio
  var disparador = document.querySelector('.menu__disparador');
  var panel = document.querySelector('.menu__panel');

  if (disparador && panel) {
    var cerrar = function () {
      panel.removeAttribute('data-abierto');
      disparador.setAttribute('aria-expanded', 'false');
    };
    disparador.addEventListener('click', function (e) {
      e.stopPropagation();
      var abierto = panel.hasAttribute('data-abierto');
      if (abierto) { cerrar(); return; }
      panel.setAttribute('data-abierto', '');
      disparador.setAttribute('aria-expanded', 'true');
    });
    document.addEventListener('click', function (e) {
      if (!panel.contains(e.target)) cerrar();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') cerrar();
    });
  }

  // Menú móvil
  var boton = document.querySelector('.hamburguesa');
  var movil = document.querySelector('.nav-movil');

  if (boton && movil) {
    boton.addEventListener('click', function () {
      var abierto = movil.hasAttribute('data-abierto');
      if (abierto) {
        movil.removeAttribute('data-abierto');
        boton.setAttribute('aria-expanded', 'false');
      } else {
        movil.setAttribute('data-abierto', '');
        boton.setAttribute('aria-expanded', 'true');
      }
    });
  }

  // Año del pie
  var anio = document.querySelector('[data-anio]');
  if (anio) anio.textContent = new Date().getFullYear();
})();
