// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//  Challenge Amigo Secreto

// 1. Crear array para almacenar los nombres
let listaAmigos = [];

// 2. Función para agregar amigos
function agregarAmigo(nombre) {
  if (nombre.trim() !== "" && !listaAmigos.includes(nombre)) {
    listaAmigos.push(nombre.trim());
    console.log(`${nombre} agregado a la lista.`);
  } else {
    console.log(`Nombre inválido o duplicado.`);
  }
}

// 3. Función para actualizar (mostrar) la lista
function mostrarLista() {
  if (listaAmigos.length === 0) {
    console.log("La lista de amigos está vacía.");
  } else {
    console.log("Lista actual de amigos:");
    listaAmigos.forEach((amigo, index) => {
      console.log(`${index + 1}. ${amigo}`);
    });
  }
}

// 4. Función para sortear los amigos
function sortearAmigos() {
  if (listaAmigos.length < 2) {
    console.log("Debe haber al menos 2 amigos para hacer el sorteo.");
    return;
  }

  let participantes = [...listaAmigos];
  let sorteados = [];

  // Empezamos el sorteo evitando que alguien se asigne a sí mismo
  for (let i = 0; i < listaAmigos.length; i++) {
    let opciones = participantes.filter((nombre) => nombre !== listaAmigos[i]);
    
    if (opciones.length === 0) {
      // Si quedan solo emparejamientos inválidos, reiniciamos
      console.log("Sorteo fallido. Reintentando...");
      return sortearAmigos();
    }

    let elegido = opciones[Math.floor(Math.random() * opciones.length)];
    sorteados.push({ de: listaAmigos[i], para: elegido });
    participantes.splice(participantes.indexOf(elegido), 1);
  }

  console.log("Resultados del sorteo:");
  sorteados.forEach((par, index) => {
    console.log(`${index + 1}. ${par.de} → ${par.para}`);
  });
}
