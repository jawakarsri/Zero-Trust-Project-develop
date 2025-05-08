from flask import Flask
from flask_cors import CORS
from pymongo import MongoClient
from app.config import Config

mongo = None

def create_app():
    global mongo
    app = Flask(__name__)
    app.config.from_object(Config)
    CORS(app, origins='*')

    mongo_uri = app.config['MONGO_URI']
    client = MongoClient(mongo_uri)
    mongo = client.get_database('zero-trust')

    with app.app_context():
        from app.auth.routes import auth_bp
        app.register_blueprint(auth_bp, url_prefix='/auth')

    return app
