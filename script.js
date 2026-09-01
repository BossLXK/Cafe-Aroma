//Filtros menu
const btnTudo = document.querySelector("#btnTudo");
const btnBebidas = document.querySelector("#btnBebidas");
const btnEntradasESalgados = document.querySelector("#btnEntradasESalgados");
const btnDoces = document.querySelector("#btnDoces");
//Elementos q serão mostrados ou escondidos
const tudoBebidas = document.querySelector("#tudoBebidasID");
const tudoEntradasESalgados = document.querySelector("#tudoEntradasESalgadosID");
const tudoDoces = document.querySelector("#tudoDocesID");


function ativarButao(butao) {
    btnTudo.classList.remove("ativo");
    btnBebidas.classList.remove("ativo");
    btnEntradasESalgados.classList.remove("ativo");
    btnDoces.classList.remove("ativo");

    butao.classList.add("ativo");
}

ativarButao(btnTudo);
btnTudo.addEventListener("click", function() {
    ativarButao(btnTudo);
    tudoBebidas.style.display = "block";
    tudoEntradasESalgados.style.display = "block";
    tudoDoces.style.display = "block";
})
btnBebidas.addEventListener("click", function() {
    ativarButao(btnBebidas);
    tudoBebidas.style.display = "block";
    tudoEntradasESalgados.style.display = "none";
    tudoDoces.style.display = "none";
})
btnEntradasESalgados.addEventListener("click", function() {
    ativarButao(btnEntradasESalgados);
    tudoBebidas.style.display = "none";
    tudoEntradasESalgados.style.display = "block";
    tudoDoces.style.display = "none";
})
btnDoces.addEventListener("click", function() {
    ativarButao(btnDoces);
    tudoBebidas.style.display = "none";
    tudoEntradasESalgados.style.display = "none";
    tudoDoces.style.display = "block";
})

