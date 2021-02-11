from flask import render_template, redirect
from main import app

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