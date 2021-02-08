var valorUno;
var valorDos;
var operacion; 

function init(){
    //variables

    var resultado = document.getElementById("resultado");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var cero = document.getElementById("cero");
    var sum = document.getElementById("sum");
    var res = document.getElementById("res");
    var mul = document.getElementById("mul");
    var div = document.getElementById("div");
    var del = document.getElementById("del");
    var igual = document.getElementById("igual");

        //eventos 
        uno.onclick = function(e){  //al hacer clic en el boton, la funcion recibe el evento "e", luego a la variable
        resultado.textContent = resultado.textContent + "1";  //resultado, le da el valor que tiene almacenado, pero
    }                                               // le suma un uno a los datos ya almacenados

    dos.onclick = function(e){
        resultado.textContent = resultado.textContent + "2";
    }

    tres.onclick = function(e){
        resultado.textContent = resultado.textContent + "3";
    }

    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent + "4";
    }

    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent + "5";
    }

    seis.onclick = function(e){
        resultado.textContent = resultado.textContent + "6";
    }

    siete.onclick = function(e){
        resultado.textContent = resultado.textContent + "7";
    }

    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent + "8";
    }

    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent + "9";
    }

    cero.onclick = function(e){
        resultado.textContent = resultado.textContent + "0";
    }

    del.onclick = function(e){
        resultado.textContent = "";
        valorUno = 0;
        valorDos = 0;
        operacion = "";
    }
    sum.onclick = function(e){
        valorUno = resultado.textContent;
        operacion = "+";
        resultado.textContent = "";
    }
    res.onclick = function(e){
        valorUno = resultado.textContent;
        operacion = "-";
        resultado.textContent = "";
    }
    mul.onclick = function(e){
        valorUno = resultado.textContent;
        operacion = "*";
        resultado.textContent = "";
    }
    div.onclick = function(e){
        valorUno = resultado.textContent;
        operacion = "/";
        resultado.textContent = "";
    }
    igual.onclick = function(e){
        valorDos = resultado.textContent;
        var respuesta = 0;
        switch(operacion){
          case "+":
            respuesta = parseFloat(valorUno) + parseFloat(valorDos); /* parsefloat conviertstring en flotantes*/
            break;
          case "-":
            respuesta = parseFloat(valorUno) - parseFloat(valorDos);
            break;
          case "*":
            respuesta = parseFloat(valorUno) * parseFloat(valorDos);
            break;
          case "/":
            respuesta = parseFloat(valorUno) / parseFloat(valorDos);
            break;
        }
        resultado.textContent = "";
        valorUno = 0;
        valorDos = 0;
        operacion = "";
        resultado.textContent = respuesta;

    }

}
