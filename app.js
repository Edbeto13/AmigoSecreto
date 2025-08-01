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
    mostrarResultado("Debe haber al menos 2 amigos para hacer el sorteo.");
    return;
  }

  let intentos = 0;
  let maxIntentos = 100;
  let sorteados = null;

  while (intentos < maxIntentos && !sorteados) {
    let participantes = [...listaAmigos];
    let resultado = [];
    let valido = true;
    for (let i = 0; i < listaAmigos.length; i++) {
      let opciones = participantes.filter((nombre) => nombre !== listaAmigos[i]);
      if (opciones.length === 0) {
        valido = false;
        break;
      }
      let elegido = opciones[Math.floor(Math.random() * opciones.length)];
      resultado.push({ de: listaAmigos[i], para: elegido });
      participantes.splice(participantes.indexOf(elegido), 1);
    }
    if (valido) {
      sorteados = resultado;
    }
    intentos++;
  }

  if (!sorteados) {
    mostrarResultado("No se pudo realizar un sorteo válido. Intente de nuevo.");
    return;
  }

  mostrarResultado("Resultados del sorteo:", sorteados);
}

function mostrarResultado(mensaje, pares) {
  const ul = document.getElementById('resultado');
  ul.innerHTML = "";
  if (mensaje) {
    const li = document.createElement('li');
    li.textContent = mensaje;
    ul.appendChild(li);
  }
  if (pares && Array.isArray(pares)) {
    pares.forEach((par, index) => {
      const li = document.createElement('li');
      li.textContent = `${index + 1}. ${par.de} → ${par.para}`;
      ul.appendChild(li);
    });
  }
}

// Inicializar lista al cargar
window.onload = mostrarLista;
