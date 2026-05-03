var n1 = document.querySelector('#n1');
var n2 = document.querySelector('#n2');
var resultado = document.querySelector('#resultado');

function media(){
    resultado.innerHTML = ((Number(n1.value) || 0) + (Number(n2.value) || 0)) / 2
}