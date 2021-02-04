from flask import Flask, request, render_template, redirect

from . import views

app =Flask(__name__)

@app.route('/')
def index():
    return redirect('/api')

@app.route('/api')
def api():
   return render_template('calculadora.html')





