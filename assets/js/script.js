var numeroAlterado = document.getElementById('numeroAtual');
var numeroAtual = 0;

function increment() {
    numeroAtual = numeroAtual + 1;
    numeroAlterado.innerHTML = numeroAtual;
}

function decrement() {
    numeroAtual = numeroAtual - 1;
    numeroAlterado.innerHTML = numeroAtual;
}

