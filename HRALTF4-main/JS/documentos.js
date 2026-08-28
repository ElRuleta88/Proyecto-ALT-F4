// Esperamos a que todo el HTML esté cargado en la pantalla
document.addEventListener('DOMContentLoaded', function() {

  // ==========================================
  // 1. LÓGICA DEL MENÚ HAMBURGUESA
  // ==========================================
  const menuDesplegable = document.getElementById('menu-desplegable');
  const btnHamburguesa = document.querySelector('.btn-hamburguesa');
  const btnCerrar = document.querySelector('.btn-cerrar');

  // Función genérica para abrir y cerrar
  function toggleMenu() {
    menuDesplegable.classList.toggle('abierto');
  }

  // Le asignamos el evento de "click" a los botones
  if (btnHamburguesa && btnCerrar) {
    btnHamburguesa.addEventListener('click', toggleMenu);
    btnCerrar.addEventListener('click', toggleMenu);
  }

  // ==========================================
  // 2. LÓGICA DEL BUSCADOR DE DOCUMENTOS
  // ==========================================
  const inputBuscador = document.querySelector('.buscador input');
  
  // Seleccionamos los elementos que queremos filtrar. 
  // OJO: Si envolviste las carpetas en una etiqueta <a>, esto buscará la tarjeta por dentro.
  const carpetas = document.querySelectorAll('.tarjeta-carpeta'); 

  if (inputBuscador) {
    // Escucha cada vez que el usuario suelta una tecla
    inputBuscador.addEventListener('keyup', function(evento) {
      const textoBuscado = evento.target.value.toLowerCase();

      carpetas.forEach(function(carpeta) {
        const textoCarpeta = carpeta.innerText.toLowerCase();
        
        // Si envolviste la carpeta en una etiqueta <a>, lo ideal es ocultar el enlace completo
        const elementoAOcultar = carpeta.parentElement.tagName === 'A' ? carpeta.parentElement : carpeta;

        if (textoCarpeta.includes(textoBuscado)) {
          elementoAOcultar.style.display = 'block'; // Lo mostramos
        } else {
          elementoAOcultar.style.display = 'none';  // Lo ocultamos
        }
      });
    });
  }

});

function toggleMenu() {
    // Buscamos el contenedor del perfil
    const perfil = document.getElementById('contenedor-perfil');
    
    // El comando toggle pone la clase si no está, y la quita si ya está
    perfil.classList.toggle('profile-active');
}