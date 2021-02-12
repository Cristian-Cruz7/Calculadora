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

  const resultado = document.getElementById("resultado");
  const button1 = document.getElementById("uno");
  const button2 = document.getElementById("dos");
  const button3 = document.getElementById("tres");
  const button4 = document.getElementById("cuatro");
  const button5 = document.getElementById("cinco");
  const button6 = document.getElementById("seis");
  const button7 = document.getElementById("siete");
  const button8 = document.getElementById("ocho");
  const button9 = document.getElementById("nueve");
  const button0 = document.getElementById("cero");
  const sum = document.getElementById("sum");
  const res = document.getElementById("res");
  const mul = document.getElementById("mul");
  const div = document.getElementById("div");
  const del = document.getElementById("del");
  const igual = document.getElementById("igual");

  //eventos
  addOnclickEvent(button1, '1');
  /*uno.onclick = function(e) { //al hacer clic en el boton, la funcion recibe el evento "e", luego a la variable
          resultado.textContent = resultado.textContent + "1"; //resultado, le da el valor que tiene almacenado, pero
      } // le suma un uno a los datos ya almacenados*/

  addOnclickEvent(button2, '2');
  addOnclickEvent(button3, '3');
  addOnclickEvent(button4, '4');
  addOnclickEvent(button5, '5');
  addOnclickEvent(button6, '6');
  addOnclickEvent(button7, '7');
  addOnclickEvent(button8, '8');
  addOnclickEvent(button9, '9');
  addOnclickEvent(button0, '0');


  del.onclick = function (e) {
    resultado.textContent = "";
    valorUno = 0;
    valorDos = 0;
    operacion = "";
  }
  sum.onclick = function (e) {
    valorUno = resultado.textContent;
    operacion = "+";
    resultado.textContent = "";
  }
  res.onclick = function (e) {
    valorUno = resultado.textContent;
    operacion = "-";
    resultado.textContent = "";
  }
  mul.onclick = function (e) {
    valorUno = resultado.textContent;
    operacion = "*";
    resultado.textContent = "";
  }
  div.onclick = function (e) {
    valorUno = resultado.textContent;
    operacion = "/";
    resultado.textContent = "";
  }
  igual.onclick = function (e) {
    valorDos = resultado.textContent;
    var respuesta = 0;
    switch (operacion) {
      case "+":
        getFromCalc(SUMAR, valorUno, valorDos);
        /*parseFloat(valorUno) + parseFloat(valorDos); /* parsefloat convier string en flotantes*/
        break;
      case "-":
        getFromCalc(RESTAR, valorUno, valorDos);
        /*respuesta = parseFloat(valorUno) - parseFloat(valorDos);*/
        break;
      case "*":
        getFromCalc(MUL, valorUno, valorDos);
        /*respuesta = parseFloat(valorUno) * parseFloat(valorDos);*/
        break;
      case "/":
        if (valorDos != 0) {
          getFromCalc(DIV, valorUno, valorDos);
        } else {
          resultado.textContent = 'Syntax Error';
        }
        /*respuesta = parseFloat(valorUno) / parseFloat(valorDos);*/
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
  button.onclick = function (e) {
    resultado.textContent = resultado.textContent + num;
  }
}