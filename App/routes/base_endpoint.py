"""
Modulo en el cual se encuentran los endpoint iniciales de la app.
"""
from flask import render_template, redirect
from main import app


@app.route('/')
def index():
    """
    La función "index()" retorna el metodo "redirect" al cual 
    se le entrega la ruta/html a la cual redireccionar,en este caso
    redirecciona al decorador @app.route('/api').
    """
    return redirect('/api')


@app.route('/api')
def api():
    """
    La función "api()" retorna el metodo "redirect" al cual 
    se le entrega la ruta/html a la cual redireccionar,en este caso
    redirecciona al archivo 'Home.html', donde se encuentra un 
    Navbar que contiene las "Apps".
    """
    return render_template('Home.html')


@app.route('/api/otraApp')
def api_otraApp():
    """
    La función "api_otraApp()" retorna el metodo "redirect" al cual 
    se le entrega la ruta/html a la cual redireccionar,en este caso
    redirecciona al archivo 'otraApp.html'.
    """
    return render_template('otraApp.html')


@app.route('/api/calc')
def api_calc():
    """
    La función "api_calc()" retorna el metodo "redirect" al cual 
    se le entrega la ruta/html a la cual redireccionar,en este caso
    redirecciona el archivo 'calculadora.html' donde se encuentra
    la aplicacion de calculadora basica.
    """
    return render_template('calculadora.html')
