from flask import jsonify
from main import app

@app.route("/api/calc/sumar/<num1>/<num2>")
def api_calc_sumar(num1, num2):   
    """
    La funcion api_calc_sumar(), recibe dos parametros
    que corresponden a dos valores numericos, en la variable
    resultado guarda el valor que genera la suma de los valores,
    finalmente retorna una respuesta en formato tipo json.
    """   
    resultado = int(num1) + int(num2)
    return jsonify(resultado=resultado)


@app.route("/api/calc/restar/<num1>/<num2>")
def api_calc_restar(num1, num2):
    """
    La funcion api_calc_restar(), recibe dos parametros
    que corresponden a dos valores numericos, en la variable
    resultado guarda el valor que genera la resta de los valores,
    finalmente retorna una respuesta en formato tipo json.
    """
    resultado = int(num1) - int(num2)
    return jsonify(resultado=resultado)


@app.route("/api/calc/multiplicar/<num1>/<num2>")
def api_calc_multiplicar(num1, num2):
    """
    La funcion api_calc_sumar(), recibe dos parametros
    que corresponden a dos valores numericos, en la variable
    resultado guarda el valor que genera la multiplicaciónde los valores,
    finalmente retorna una respuesta en formato tipo json.
    """
    resultado = int(num1) * int(num2)
    return jsonify(resultado=resultado)


@app.route("/api/calc/dividir/<num1>/<num2>")
def api_calc_dividir(num1, num2):
    """
    La funcion api_calc_sumar(), recibe dos parametros
    que corresponden a dos valores numericos, en la variable
    resultado guarda el valor que genera la división de los valores,
    finalmente retorna una respuesta en formato tipo json.
    """
    resultado = int(num1) / int(num2)
    return jsonify(resultado=resultado)
