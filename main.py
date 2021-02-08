from flask import render_template, redirect, jsonify

from app import create_app


app = create_app()

@app.route('/')
def index():
    return redirect('/api')

@app.route('/api')
def api():
   return render_template('Home.html')

@app.route('/api/otraApp')
def api_otraApp():
   return render_template('otraApp.html')

@app.route('/api/calc')
def api_calc():
   return render_template('calculadora.html')

@app.route("/api/calc/Sumar/<num1>/<num2>")
def api_calc_Sumar(num1, num2):
   resultado = int(num1) + int(num2)
   #return render_template('Suma.html', resultado = resultado, num1 = num1, num2 = num2)   
   return jsonify(resultado = resultado)

@app.route("/api/calc/Restar/<num1>/<num2>")
def api_calc_Restar(num1, num2):
   resultado = int(num1) - int(num2)
   return render_template('Resta.html', resultado = resultado, num1 = num1, num2 = num2)
   
@app.route("/api/calc/Multiplicar/<num1>/<num2>")
def api_calc_Multiplicar(num1, num2):
   resultado = int(num1) * int(num2)
   return render_template('Mul.html', resultado = resultado, num1 = num1, num2 = num2)   
   
@app.route("/api/calc/Dividir/<num1>/<num2>")
def api_calc_Dividir(num1, num2):
   resultado = int(num1) / int(num2)
   return render_template('Div.html', resultado = resultado, num1 = num1, num2 = num2)   
   


