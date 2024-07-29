document.getElementById('boton-ejercicio-1').addEventListener('click', () => {
    const edad = parseInt(document.getElementById('input-ejercicio-1').value);
    const resultadoEjercicio1 = document.getElementById('resultado-ejercicio-1');
    resultadoEjercicio1.innerHTML = ''; // Limpiar contenido previo
  
    if (!isNaN(edad)) {
      const esMayor = edad >= 18 ? 'Mayor de edad' : 'Menor de edad';
      const p = document.createElement('p');
      p.textContent = `Con ${edad} años, eres ${esMayor}.`;
      resultadoEjercicio1.appendChild(p);
    } else {
      resultadoEjercicio1.textContent = 'Por favor, ingresa una edad válida.';
    }
  });
  