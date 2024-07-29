async function obtenerUsuarios() {
    try {
      const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
      const usuarios = await respuesta.json();
      const resultadoEjercicio3 = document.getElementById('resultado-ejercicio-3');
      resultadoEjercicio3.innerHTML = ''; // Limpiar contenido previo
      usuarios.forEach(usuario => {
        const p = document.createElement('p');
        p.textContent = `ID: ${usuario.id}, Nombre: ${usuario.name}, Email: ${usuario.email}`;
        resultadoEjercicio3.appendChild(p);
      });
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
    }
  }
  
  document.getElementById('boton-ejercicio-3').addEventListener('click', obtenerUsuarios);
  