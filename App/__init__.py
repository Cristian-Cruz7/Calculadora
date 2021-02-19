from flask import Flask


def get_app_instance():
    """
    la función get_app_instance() primero importa el 
    objeto Flask desde el paquete flask. A continuación 
    lo usará para crear su instancia de aplicación Flask
    con el nombre app. Pasa la variable especial __name__ 
    que alberga el nombre del módulo Pyhthon actual. 
    Se utiliza para indicar a la instancia dónde está ubicada
    """
    app = Flask(__name__)
    return app
