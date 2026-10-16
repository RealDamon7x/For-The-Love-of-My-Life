const SENHA_CORRETA = "1608";

// Encontra todas as telas
const telas = document.querySelectorAll(".tela");

// Mostra uma tela e esconde as outras
function mostrarTela(id) {
    telas.forEach(function(tela) {
        tela.hidden = true;
    });

    document.getElementById(id).hidden = false;
}

// ELEMENTOS DO LOGIN
const formularioLogin = document.getElementById("form-login");
const campoNome = document.getElementById("nome");
const mensagem = document.getElementById("mensagem");

// ELEMENTOS DA SENHA
const formularioSenha = document.getElementById("form-senha");
const campoSenha = document.getElementById("senha");
const mensagemErro = document.getElementById("mensagem-erro");

// BOTÕES
const botaoContinuar = document.getElementById("botao-continuar");
const botaoPresente = document.getElementById("botao-presente");


// 1. VERIFICAR O NOME
formularioLogin.addEventListener("submit", function(event) {
    event.preventDefault();

    const nomeDigitado = campoNome.value.trim().toLowerCase();

    if (nomeDigitado === "clara") {
        mensagem.textContent = "";
        mostrarTela("tela-boas-vindas");
    } else {
        mensagem.textContent = "Nome incorreto. Tente novamente! ♡";
        mensagem.style.color = "#d64570";
    }
});


// 2. IR PARA A TELA DA SENHA
botaoContinuar.addEventListener("click", function() {
    mostrarTela("tela-senha");
});


// 3. VERIFICAR A SENHA
formularioSenha.addEventListener("submit", function(event) {
    event.preventDefault();

    const senhaDigitada = campoSenha.value;

    if (senhaDigitada === SENHA_CORRETA) {
        mensagemErro.textContent = "";
        campoSenha.value = "";

        mostrarTela("tela-desbloqueio");
    } else {
        mensagemErro.textContent =
            "Senha incorreta. Tente novamente! ♡";

        mensagemErro.style.color = "#d64570";

        campoSenha.value = "";
        campoSenha.focus();
    }
});


// 4. IR PARA A TELA DO PRESENTE
botaoPresente.addEventListener("click", function() {
    mostrarTela("tela-presente");
});