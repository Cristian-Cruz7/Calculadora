from flask import jsonify
from main import app

"""
    Decorador @app.route()
    
    El objeto Flask app nos proporciona un decorador router que 
    es capaz de filtrar la función vista que se va ejecutar analizando 
    la petición HTTP, fundamentalmente por la ruta y el método que se
    hace la petición.
    """


@app.route("/api/calc/sumar/<num1>/<num2>")
def api_calc_sumar(num1, num2):
    resultado = int(num1) + int(num2)
    return jsonify(resultado=resultado)


@app.route("/api/calc/restar/<num1>/<num2>")
def api_calc_restar(num1, num2):
    resultado = int(num1) - int(num2)
    return jsonify(resultado=resultado)


@app.route("/api/calc/multiplicar/<num1>/<num2>")
def api_calc_multiplicar(num1, num2):
    resultado = int(num1) * int(num2)
    return jsonify(resultado=resultado)


@app.route("/api/calc/dividir/<num1>/<num2>")
def api_calc_dividir(num1, num2):
    resultado = int(num1) / int(num2)
    return jsonify(resultado=resultado)
