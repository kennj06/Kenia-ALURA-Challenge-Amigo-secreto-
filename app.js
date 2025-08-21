// Lista donde se guardaran los nombres 
let amigos = [];

// Referencias a los elementos HTML
const input = document.getElementById('amigo');
const lista = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

// Función para agregar un amigo
function agregarAmigo() {
    const nombre = input.value.trim(); // Eliminar espacios al inicio y final

    // Validación: no debe estar vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Validación: no permitir nombres repetidos
    if (amigos.includes(nombre)) {
        alert("Ese nombre ya está en la lista.");
        input.value = "";
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);

    // Limpiar el campo de entrada
    input.value = "";

    // Actualizar la lista en pantalla
    mostrarAmigos();
}

// Función para mostrar la lista de amigos en HTML
function mostrarAmigos() {
    lista.innerHTML = ""; // Limpiar lista existente

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar resultado
    resultado.innerHTML = `<li class="mensaje-resultado">Tu amigo secreto es: <strong>${amigoSorteado}</strong></li>`;

    // Eliminar el amigo sorteado del array para no repetir
    amigos.splice(indiceAleatorio, 1);

    // Actualizar la lista en pantalla
    mostrarAmigos();
}

// Se agrego la función para reiniciar el juego
function clearAmigos() {
    amigos = []; // Vaciar array
    lista.innerHTML = "";
    resultado.innerHTML = "";
    input.value = "";
}

// Permitir agregar amigos con la tecla Enter
input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});

