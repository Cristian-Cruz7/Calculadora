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

@app.route("/api/calc/Suma/<num1>/<num2>")
def api_calc_Suma(num1, num2):
   resultado = int(num1) + int(num2)
   #return render_template('Suma.html', resultado = resultado, num1 = num1, num2 = num2)   
   return jsonify(resultado = resultado)

@app.route("/api/calc/Resta/4/2")
def api_calc_Resta_4_2():
   return render_template('Resta.html')

@app.route("/api/calc/Multiplicacion/5/5")
def api_calc_Multiplicacion_5_5():
   return render_template('Mul.html')

@app.route("/api/calc/Division/8/2")
def api_calc_Division_8_2():
    return render_template('Div.html')


