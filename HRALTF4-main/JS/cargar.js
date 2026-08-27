document.addEventListener('DOMContentLoaded', function() {
  
  const formulario = document.getElementById('formulario-carga');
  const inputArchivo = document.getElementById('archivo');
  const textoArchivo = document.getElementById('texto-archivo');

  // 1. Mostrar el nombre del archivo seleccionado
  if (inputArchivo && textoArchivo) {
    inputArchivo.addEventListener('change', function(evento) {
      // Verificamos si el usuario seleccionó al menos un archivo
      if (evento.target.files.length > 0) {
        // Extraemos el nombre del archivo y lo mostramos
        const nombreArchivo = evento.target.files[0].name;
        textoArchivo.textContent = "Archivo seleccionado: " + nombreArchivo;
        textoArchivo.style.color = "#10b981"; // Cambiamos el texto a verde
      } else {
        textoArchivo.textContent = "Haz clic aquí para seleccionar un archivo PDF, DOCX o JPG";
        textoArchivo.style.color = "#8f9bba";
      }
    });
  }

  // 2. Simular el guardado del formulario
  if (formulario) {
    formulario.addEventListener('submit', function(evento) {
      // Esto evita que la página se recargue automáticamente al apretar el botón
      evento.preventDefault(); 
      
      // Aquí en el futuro enviarías los datos a un servidor. Por ahora, simulamos el éxito.
      alert('¡Documento cargado con éxito en el sistema!');
      
      // Redirigimos de vuelta a la página principal
      // (Asegúrate de que 'index.html' sea el nombre correcto de tu panel principal)
      window.location.href = 'index.html'; 
    });
  }

});