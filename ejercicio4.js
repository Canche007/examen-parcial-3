document.getElementById('boton-ejercicio-4').addEventListener('click', () => {
    const textoItem = document.getElementById('input-ejercicio-4').value;
    if (textoItem.trim() !== '') {
      const li = document.createElement('li');
      li.textContent = textoItem;
      const botonEliminar = document.createElement('button');
      botonEliminar.textContent = 'Eliminar';
      botonEliminar.addEventListener('click', () => {
        li.remove();
      });
      li.appendChild(botonEliminar);
      document.getElementById('lista-ejercicio-4').appendChild(li);
    }
  });
  