const imagem = document.querySelector("#imagem1");
const nomeDoPersonagem = document.querySelector("#nome1");
const especie = document.querySelector("#especie1");
const condicao = document.querySelector("#status1");
const imagem2 = document.querySelector("#imagem2");
const nomeDoPersonagem2 = document.querySelector("#nome2");
const especie2 = document.querySelector("#especie2");
const condicao2 = document.querySelector("#status2");
const imagem3 = document.querySelector("#imagem3");
const nomeDoPersonagem3 = document.querySelector("#nome3");
const especie3 = document.querySelector("#especie3");
const condicao3 = document.querySelector("#status3");
const botao = document.querySelector("button");
traduzirCondicao = (data) => {
    if (data.status == "unknown") {
        return "Não sabemos";
    } else if (data.status == "Alive") {
        return "Sim";
    } else {
        return "Não. Está morto";
    }
};

gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
};