// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

function agregarAmigo(){
    const listaAmigos = document.getElementById('listaAmigos');
    const nuevoAmigo = document.createElement('li');

    const nombreDelAmigo = document.getElementById('amigo');
    nuevoAmigo.textContent = nombreDelAmigo.value
    if (nuevoAmigo.textContent === "") {
        alert("No has introducido el nombre de tu amigo")
    } else {
    listaAmigos.appendChild(nuevoAmigo);
    nombreDelAmigo.value = "";
}
}

