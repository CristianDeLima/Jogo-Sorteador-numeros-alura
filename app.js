let numerosSorteados = [];
let botaoSortear = document.getElementById("btn-sortear");
let botaoReiniciar = document.getElementById("btn-reiniciar");


function sortear() {
    let quantidadeDeNumeros = document.getElementById("quantidade").value;
    let numeroMinimo = document.getElementById("de").value;
    let numeroMaximo = document.getElementById("ate").value;
    let numeroAleatorio = gererNumeroAleatorio(numeroMinimo, numeroMaximo);

    if (quantidadeDeNumeros == "" || numeroMaximo == "" || numeroMinimo == "" || numeroMaximo <= numeroMinimo) {
        alert("Verifique se você preencheu corretamente os campos!");
    } else {
        for (let i = 0; i < quantidadeDeNumeros; i++) {
            numeroAleatorio = gererNumeroAleatorio(numeroMinimo, numeroMaximo);
            if (numerosSorteados.includes(numeroAleatorio)) {
                numeroAleatorio = gererNumeroAleatorio(numeroMinimo, numeroMaximo);
                numerosSorteados.push(numeroAleatorio);
            } else {
                numerosSorteados.push(numeroAleatorio);
            }
            document.getElementById("resultado").innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosSorteados}</label>`;
            numerosSorteados = [];
            habilitarBotaoReiniciar();
            desabilitarBotaoSortear();
        }
    }
}

function gererNumeroAleatorio (numeroMinimo, numeroMaximo) {
    min = Math.ceil(numeroMinimo);
    max = Math.floor(numeroMaximo);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function habilitarBotaoReiniciar() {
    botaoReiniciar.classList.remove("container__botao-desabilitado");
    botaoReiniciar.classList.add("container__botao");
}

function desabilitarBotaoSortear() {
    botaoSortear.classList.remove("container__botao");
    botaoSortear.classList.add("container__botao-desabilitado");
}

function reiniciar() {
    desabilitarBotaoReiniciar()
    habilitarBotaoSortear()
    document.getElementById("quantidade").value = ""
    document.getElementById("de").value = ""
    document.getElementById("ate").value = ""
    document.getElementById("resultado").innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`
}

function habilitarBotaoSortear() {
    botaoSortear.classList.add("container__botao");
    botaoSortear.classList.remove("container__botao-desabilitado");
}

function desabilitarBotaoReiniciar() {
    botaoReiniciar.classList.add("container__botao-desabilitado");
    botaoReiniciar.classList.remove("container__botao");
}