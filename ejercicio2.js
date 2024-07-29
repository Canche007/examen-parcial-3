document.getElementById('boton-ejercicio-2').addEventListener('click', () => {
    const numero = parseFloat(document.getElementById('input-ejercicio-2').value);
    const resultadoEjercicio2 = document.getElementById('resultado-ejercicio-2');
    resultadoEjercicio2.innerHTML = ''; // Limpiar contenido previo
  
    if (!isNaN(numero)) {
      const cuadrado = numero * numero;
      if (cuadrado > 20) {
        const p = document.createElement('p');
        p.textContent = `El cuadrado de ${numero} es ${cuadrado} y es mayor de 20.`;
        resultadoEjercicio2.appendChild(p);
      } else {
        resultadoEjercicio2.textContent = `El cuadrado de ${numero} es ${cuadrado} y no es mayor de 20.`;
      }
    } else {
      resultadoEjercicio2.textContent = 'Por favor, ingresa un número válido.';
    }
  });
  