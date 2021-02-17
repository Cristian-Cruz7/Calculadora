from flask import Flask


def get_app_instance():
    app = Flask(__name__)
    return app
