var n1 = document.querySelector('#n1');
var n2 = document.querySelector('#n2');
var resultado = document.querySelector('#resultado');

function somar(){
    resultado.innerHTML = Number(n1.value)+ Number(n2.value);
}
function subtrair(){
    resultado.innerHTML = Number(n1.value)- Number(n2.value);
}
function multiplicar(){
    resultado.innerHTML = Number(n1.value)* Number(n2.value);
}
 function areat(){
    resultado.innerHTML =(Number(n1.value) * Number(n2.value)) / 2
 }   
 function areaq(){
    resultado.innerHTML=Number(n1.value) * Number(n1.value) || Number(n2.value) * Number(n2.value)
 }
 function idade(){
    if(Number(n1.value) || Number(n2.value)>=18){
    resultado.innerHTML=("Você é maior de idade")}
    else{
        resultado.innerHTML=("Você é menor de idade")
    }
 }
 function retirar(){
    resultado.innerHTML=Number(n1.value)-(Number(n1.value)*0.1)
 }
 function lucro(){
    resultado.innerHTML=Number(n1.value)+(Number(n1.value)*0.15)
 }
 function desconto(){
    resultado.innerHTML=Number(n1.value)-(Number(n1.value)*0.3)
 }
 function boas(){
    if(Number(n1.value)>1000){
        resultado.innerHTML=Number(n1.value)-(Number(n1.value)*0.07)
    }
    else if(Number(n1.value) > 200 && Number(n1.value) <= 500){
        resultado.innerHTML=Number(n1.value)+(Number(n1.value)*0.05)
    }
    else if(Number(n1.value)<200){
        resultado.innerHTML=('Boas Compras!!')
    }
    else{
        resultado.innerHTML=('Nada acontece')
    }
 }

