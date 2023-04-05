
// Manipulação do DOM Document Object Model
var inputQtde = document.querySelector('#qtde');
inputQtde.addEventListener("change", atualizarOrcamento);
document.querySelector('#presente').addEventListener("change", atualizarOrcamento);
document.querySelector('#avatar').addEventListener("change", atualizarOrcamento)
document.querySelector('#edicao-deluxe').addEventListener("change", atualizarOrcamento);
document.querySelector('#edicao-standard').addEventListener("change", atualizarOrcamento);
document.querySelector('#poster').addEventListener("change", atualizarOrcamento);

function atualizarOrcamento(){
    let qtde = inputQtde.value;
    let preco = qtde * 300;

    let presente = document.querySelector('#presente').checked;
    if(presente) preco += 10;

    let avatar = document.querySelector('#avatar').checked;
    if(avatar) preco += 20;
    
    let deluxe = document.querySelector("#edicao-deluxe").checked;
    if(deluxe) preco += 50;

    let poster = document.querySelector("#poster").value;
    let labelPoster = document.querySelector("label[for=poster]");
    labelPoster.innerHTML = `Posters: (${poster})`;
    preco += poster * 19.90;

    let output = document.querySelector('#Secao-carrinho form output');
    output.innerHTML = "R$ " + preco.toFixed(2);
    console.log(presente);
}