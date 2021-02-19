"""
Archivo principal de la aplicacion en el cual la app, y los
modulos de funcionamiento de la misma.
"""

from app import get_app_instance
app = get_app_instance()

from app.routes.operations import *
from app.routes.base_endpoint import *
