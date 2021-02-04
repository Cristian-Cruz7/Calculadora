from flask import render_template, redirect

from app import create_app
from app.views import *

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


@app.route("/api/calc/Suma")
def api_calc_Suma():
    pass    

@app.route("/api/calc/Resta")
def api_calc_Resta():
    pass

@app.route("/api/calc/Multiplicacion")
def api_calc_Multiplicacion():
    pass

@app.route("/api/calc/Division")
def api_calc_Division():
    pass