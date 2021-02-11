from flask import Flask

#APP_INSTANCE = False

def get_app_instance():
    # if APP_INSTANCE:       
    #     return APP_INSTANCE    
    # else:
    #     APP_INSTANCE = Flask(__name__)        
    #     return APP_INSTANCE
    app  = Flask(__name__)
    
    return app