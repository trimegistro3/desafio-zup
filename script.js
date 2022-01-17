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

pegarPersonagem = async() => {
    let numeroAleatorio = [];
    for (let i = 0; i <= 2; i++) {
        numeroAleatorio.push(gerarValorAleatorio());
    }
    const response = await fetch(
        `https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
            },
        }
    );
    const data = await response.json();
    imagem.src = data[0].image;
    imagem.alt = data[0].name;
    nomeDoPersonagem.innerHTML = data[0].name;
    especie.innerHTML = data[0].species;
    condicao.innerHTML = traduzirCondicao(data[0]);
    imagem2.src = data[1].image;
    imagem2.alt = data[1].name;
    nomeDoPersonagem2.innerHTML = data[1].name;
    especie2.innerHTML = data[1].species;
    condicao2.innerHTML = traduzirCondicao(data[1]);
    imagem3.src = data[2].image;
    imagem3.alt = data[2].name;
    nomeDoPersonagem3.innerHTML = data[2].name;
    especie3.innerHTML = data[2].species;
    condicao3.innerHTML = traduzirCondicao(data[2]);
};
botao.onclick = pegarPersonagem;