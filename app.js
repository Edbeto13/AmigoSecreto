/**
 * APLICACIÓN DE AMIGO SECRETO
 * 
 * Este código implementa la lógica para una aplicación de sorteo de "Amigo Secreto"
 * permitiendo agregar participantes, mostrarlos en una lista, realizar un sorteo
 * y reiniciar el juego cuando sea necesario.
 */

// Array global que almacena los nombres de todos los participantes
let listaAmigos = [];
//Función para agregar un amigo a la lista
function agregarAmigo() {
  // Obtiene el elemento input del DOM y extrae su valor
  const input = document.getElementById('amigo');
  const nombre = input.value.trim(); // Elimina espacios en blanco innecesarios
  
  // Valida que el nombre no esté vacío y no esté duplicado
  if (nombre !== "" && !listaAmigos.includes(nombre)) {
    listaAmigos.push(nombre); // Agrega el nombre al array
    input.value = ""; // Limpia el campo de entrada
    mostrarLista(); // Actualiza la lista en la interfaz
    mostrarResultado(""); // Limpia cualquier mensaje previo
  } else {
    // Muestra un mensaje de error si el nombre es inválido o duplicado
    mostrarResultado('Nombre inválido o duplicado.');
  }
}

/**
 * Función para mostrar la lista de amigos en la interfaz
 * 
 * Proceso:
 * 1. Obtiene la referencia al elemento <ul> que mostrará la lista
 * 2. Limpia el contenido actual de la lista
 * 3. Si la lista está vacía, muestra un mensaje informativo
 * 4. Si hay nombres, crea un elemento <li> para cada uno con su número
 */
function mostrarLista() {
  const ul = document.getElementById('listaAmigos'); // Obtiene el elemento lista
  ul.innerHTML = ""; // Limpia la lista actual
  
  if (listaAmigos.length === 0) {
    // Si la lista está vacía, muestra un mensaje
    const li = document.createElement('li');
    li.textContent = "La lista de amigos está vacía.";
    ul.appendChild(li);
  } else {
    // Recorre el array y crea un elemento de lista para cada nombre
    listaAmigos.forEach((amigo, index) => {
      const li = document.createElement('li');
      li.textContent = `${index + 1}. ${amigo}`; // Formato: número. nombre
      ul.appendChild(li);
    });
  }
}
//Función para realizar el sorteo de amigos secretos
function sortearAmigo() {
  // Verifica que haya suficientes participantes
  if (listaAmigos.length < 2) {
    mostrarResultado("Debe haber al menos 2 amigos para realizar el sorteo.");
    return;
  }

  // Selecciona un índice aleatorio y obtiene el nombre correspondiente
  const indiceGanador = Math.floor(Math.random() * listaAmigos.length);
  const ganador = listaAmigos[indiceGanador];
  
  // Muestra el resultado del sorteo
  mostrarResultado(`Amigo ganador del sorteo: ${ganador}`);
}
/**
 * Función para mostrar mensajes de resultado o error
 * 
 * @param {string} mensaje - El mensaje a mostrar
 */
function mostrarResultado(mensaje) {
  const ul = document.getElementById('resultado');
  ul.innerHTML = ""; // Limpia mensajes previos
  
  if (mensaje) {
    // Si hay un mensaje, lo muestra en la lista de resultados
    const li = document.createElement('li');
    li.textContent = mensaje;
    ul.appendChild(li);
  }
}
 //Función para reiniciar el juego
function reiniciarJuego() {
    listaAmigos = []; // Vacía el array
    mostrarLista(); // Actualiza la visualización de la lista
    mostrarResultado(""); // Limpia mensajes
}

// Inicializa la lista al cargar la página
window.onload = mostrarLista;
