from flask import jsonify
from main import app

@app.route("/api/calc/sumar/<num1>/<num2>")
def api_calc_sumar(num1, num2):
   resultado = int(num1) + int(num2)
   #return render_template('Suma.html', resultado = resultado, num1 = num1, num2 = num2)   
   return jsonify(resultado = resultado)

@app.route("/api/calc/restar/<num1>/<num2>")
def api_calc_restar(num1, num2):
   resultado = int(num1) - int(num2)
   #return render_template('Resta.html', resultado = resultado, num1 = num1, num2 = num2)
   return jsonify(resultado = resultado)
   
@app.route("/api/calc/multiplicar/<num1>/<num2>")
def api_calc_multiplicar(num1, num2):
   resultado = int(num1) * int(num2)
   #return render_template('Mul.html', resultado = resultado, num1 = num1, num2 = num2)   
   return jsonify(resultado = resultado)
   
@app.route("/api/calc/dividir/<num1>/<num2>")
def api_calc_dividir(num1, num2):
   resultado = int(num1) / int(num2)
   #return render_template('Div.html', resultado = resultado, num1 = num1, num2 = num2)   
   return jsonify(resultado = resultado)