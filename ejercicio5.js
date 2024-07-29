const objetos = [
    { nombre: 'Yahir', edad: 20 },
    { nombre: 'Jafet', edad: 18 },
    { nombre: 'Luis', edad: 22 },
    { nombre: 'Papa', edad: 21 },
    { nombre: 'Adrian', edad: 18 },
    { nombre: 'Geovani', edad: 19 },
    { nombre: 'Daniel', edad: 50 },
    { nombre: 'Abril', edad: 55 },
    { nombre: 'Avila', edad: 19 },
    { nombre: 'Alexis', edad: 20 },
  ];
  
  document.getElementById('boton-ejercicio-5').addEventListener('click', () => {
    const propiedad = document.getElementById('input-ejercicio-5').value.trim().toLowerCase();
    const resultadoEjercicio5 = document.getElementById('resultado-ejercicio-5');
    resultadoEjercicio5.innerHTML = ''; // Limpiar contenido previo
  
    if (propiedad === 'nombre y edad') {
      // Mostrar nombre y edad
      objetos.forEach(objeto => {
        const p = document.createElement('p');
        p.textContent = `Nombre: ${objeto.nombre}, Edad: ${objeto.edad}`;
        resultadoEjercicio5.appendChild(p);
      });
    } else if (propiedad) {
      // Verificar si la propiedad existe en los objetos
      const propiedadValida = objetos.some(obj => obj.hasOwnProperty(propiedad));
  
      if (propiedadValida) {
        const ordenados = objetos.sort((a, b) => {
          if (a[propiedad] < b[propiedad]) return -1;
          if (a[propiedad] > b[propiedad]) return 1;
          return 0;
        });
  
        ordenados.forEach(objeto => {
          const p = document.createElement('p');
          p.textContent = `${objeto[propiedad]}`;
          resultadoEjercicio5.appendChild(p);
        });
      } else {
        resultadoEjercicio5.textContent = 'La propiedad ingresada no es válida.';
      }
    } else {
      resultadoEjercicio5.textContent = 'Por favor, ingresa una propiedad válida.';
    }
  });
  