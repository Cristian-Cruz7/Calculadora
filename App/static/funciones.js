function init(){
    // variables
    var resultado = document.getElementsById("resultado");
    var sum = document.getElementsById("sum");
    var res = document.getElementsById("res");
    var mul = document.getElementsById("mul");
    var div = document.getElementsById("div");
    var siete = document.getElementsById("siete");
    var ocho = document.getElementsById("ocho");
    var nueve = document.getElementsById("nueve");
    var del = document.getElementsByClassName("del");
    var seis = document.getElementsByClassName("seis");
    var cinco = document.getElementsByClassName("cinco");
    var cuatro = document.getElementsByClassName("cuatro");
    var cero = document.getElementsByClassName("cero");
    var uno = document.getElementsByClassName("uno");
    var dos = document.getElementsByClassName("dos");
    var tres = document.getElementById("tres");
    var igual = document.getElementsByClassName("igual");

    //eventos
    uno.onclick = function(e){  //al hacer clic en el boton, la funcion recibe el evento "e", luego a la variable
        resultado.textContent = resultado.textContent + "1"  //resultado, le da el valor que tiene almacenado, pero
    }                                               // le suma un uno a los datos ya almacenados

    dos.onclick = function(e){
        resultado.textContent = resultado.textContent + "2"
    }

    tres.onclick = function(e){
        resultado.textContent = resultado.textContent + "3"
    }

    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent + "4"
    }

    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent + "5"
    }

    seis.onclick = function(e){
        resultado.textContent = resultado.textContent + "6"
    }

    siete.onclick = function(e){
        resultado.textContent = resultado.textContent + "7"
    }

    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent + "8"
    }

    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent + "9"
    }

    cero.onclick = function(e){
        resultado.textContent = resultado.textContent + "0"
    }

}
