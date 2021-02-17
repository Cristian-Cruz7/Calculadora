from app import get_app_instance
app = get_app_instance()

from app.routes.operations import *
from app.routes.base_endpoint import *
