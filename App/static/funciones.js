let valorUno;
let valorDos;
let operacion;

const URL_API = 'http://localhost:5000/api/calc/';
const SUMAR = 'sumar';
const RESTAR = 'restar';
const MUL = 'multiplicar';
const DIV = 'dividir';

function init() {
  //variables
  const resultado = document.getElementsByClassName("resultado")[0];
  const button1 = document.getElementsByClassName("uno" [0]);
  const button2 = document.getElementsByClassName("dos" [0]);
  const button3 = document.getElementsByClassName("tres" [0]);
  const button4 = document.getElementsByClassName("cuatro" [0]);
  const button5 = document.getElementsByClassName("cinco" [0]);
  const button6 = document.getElementsByClassName("seis" [0]);
  const button7 = document.getElementsByClassName("siete" [0]);
  const button8 = document.getElementsByClassName("ocho" [0]);
  const button9 = document.getElementsByClassName("nueve" [0]);
  const button0 = document.getElementsByClassName("cero" [0]);
  const sum = document.getElementsByClassName("sum" [0]);
  const res = document.getElementsByClassName("res" [0]);
  const mul = document.getElementsByClassName("mul" [0]);
  const div = document.getElementsByClassName("div" [0]);
  const del = document.getElementsByClassName("del" [0]);
  const igual = document.getElementsByClassName("igual" [0]);

  //eventos
  addOnclickEvent(button1, '1');
  addOnclickEvent(button2, '2');
  addOnclickEvent(button3, '3');
  addOnclickEvent(button4, '4');
  addOnclickEvent(button5, '5');
  addOnclickEvent(button6, '6');
  addOnclickEvent(button7, '7');
  addOnclickEvent(button8, '8');
  addOnclickEvent(button9, '9');
  addOnclickEvent(button0, '0');


  del.onclick = function(e) {
    resultado.textContent = "";
    valorUno = 0;
    valorDos = 0;
    operacion = "";
  }
  sum.onclick = function(e) {
    valorUno = resultado.textContent;
    operacion = "+";
    resultado.textContent = "";
  }
  res.onclick = function(e) {
    valorUno = resultado.textContent;
    operacion = "-";
    resultado.textContent = "";
  }
  mul.onclick = function(e) {
    valorUno = resultado.textContent;
    operacion = "*";
    resultado.textContent = "";
  }
  div.onclick = function(e) {
    valorUno = resultado.textContent;
    operacion = "/";
    resultado.textContent = "";
  }
  igual.onclick = function(e) {
    valorDos = resultado.textContent;
    var respuesta = 0;
    switch (operacion) {
      case "+":
        getFromCalc(SUMAR, valorUno, valorDos);
        break;
      case "-":
        getFromCalc(RESTAR, valorUno, valorDos);
        break;
      case "*":
        getFromCalc(MUL, valorUno, valorDos);
        break;
      case "/":
        if (valorDos != 0) {
          getFromCalc(DIV, valorUno, valorDos);
        } else {
          resultado.textContent = 'Syntax Error';
        }
        break;
    }
  }
}

function getFromCalc(operation, v1, v2) {
  fetch(URL_API + operation + '/' + v1 + '/' + v2)
    .then(response => response.json())
    .then(data => {
      resultado.textContent = data.resultado;
    });
}

function addOnclickEvent(button, num) {
  button.onclick = function(e) {
    resultado.textContent = resultado.textContent + num;
  }
}
