// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

function agregarAmigo(){
    const listaAmigos = document.getElementById('listaAmigos');
    const nuevoAmigo = document.createElement('li');

    const nombreDelAmigo = document.getElementById('amigo');
    nuevoAmigo.textContent = nombreDelAmigo.value
    if (nuevoAmigo.textContent === "") {
        alert("No has introducido el nombre de tu amigo");
    } else {
    listaAmigos.appendChild(nuevoAmigo);
    nombreDelAmigo.value = "";
}
}

function sortearAmigo(){
    const listaAmigos = document.getElementById('listaAmigos');
    const amigosGuardados = listaAmigos.getElementsByTagName('li');
    
    if (amigosGuardados.length === 0) {
        alert("No has agregado amigos para sortear")
    } else {
    const calculoAmigo = Math.floor(Math.random() * amigosGuardados.length);
    const amigoAleatorio = (amigosGuardados[calculoAmigo].textContent);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiamos resultado anterior
    const amigoResultado = document.createElement('li');
    amigoResultado.textContent = amigoAleatorio;
    resultado.appendChild(amigoResultado);
    
}
}

// Nota appendChild(elemento) me mueve el elemento de la lista, por ese motivo
// no puedo utilizarlo, necesito copiar el elemento para colocarlo en la lista resultado.