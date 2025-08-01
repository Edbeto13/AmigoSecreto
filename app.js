// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//  Challenge Amigo Secreto

// 1. Crear array para almacenar los nombres

let listaAmigos = [];

// 2. Función para agregar amigos

function agregarAmigo() {
  const input = document.getElementById('amigo');
  const nombre = input.value.trim();
  if (nombre !== "" && !listaAmigos.includes(nombre)) {
    listaAmigos.push(nombre);
    input.value = "";
    mostrarLista();
    mostrarResultado("");
  } else {
    mostrarResultado('Nombre inválido o duplicado.');
  }
}

// 3. Función para actualizar (mostrar) la lista

function mostrarLista() {
  const ul = document.getElementById('listaAmigos');
  ul.innerHTML = "";
  if (listaAmigos.length === 0) {
    const li = document.createElement('li');
    li.textContent = "La lista de amigos está vacía.";
    ul.appendChild(li);
  } else {
    listaAmigos.forEach((amigo, index) => {
      const li = document.createElement('li');
      li.textContent = `${index + 1}. ${amigo}`;
      ul.appendChild(li);
    });
  }
}

// 4. Función para sortear los amigos

function sortearAmigo() {
  if (listaAmigos.length < 2) {
    mostrarResultado("Debe haber al menos 2 amigos para realizar el sorteo.");
    return;
  }

  const indiceGanador = Math.floor(Math.random() * listaAmigos.length);
  const ganador = listaAmigos[indiceGanador];
  mostrarResultado(`Amigo ganador del sorteo: ${ganador}`);
}

function mostrarResultado(mensaje) {
  const ul = document.getElementById('resultado');
  ul.innerHTML = "";
  if (mensaje) {
    const li = document.createElement('li');
    li.textContent = mensaje;
    ul.appendChild(li);
  }
}

function reiniciarJuego() {
    listaAmigos = [];
    mostrarLista();
    mostrarResultado("");
}

// Inicializar lista al cargar
window.onload = mostrarLista;
