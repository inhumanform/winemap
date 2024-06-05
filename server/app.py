#!/usr/bin/env python3
from flask_cors import CORS
# from flask_sqlalchemy import SQLAlchemy
from flask import Flask, request, session, jsonify, make_response
from flask_restful import Resource, Api
from flask_migrate import Migrate

# import os
# import ipdb

from config import app, db, api
from models import db, User, ParentRegions, SubRegions, Grapes

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///winemap.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

CORS(app)
migrate = Migrate(app, db)


db.init_app(app)

api = Api(app)


@app.route('/')
def index():
    return '<h1>Project Server</h1>'

class AllGrapes(Resource):

    def get(self):
        grapes = Grapes.query.all()
        response_body = [grapes.to_dict(only=('id', 'name', 'color', 'image')) for grapes in grapes]
        return make_response(response_body, 200)
    
api.add_resource(AllGrapes, '/grapes')


class GrapesByID(Resource):

    def get(self, id):
        grapes = Grapes.query.filter(Grapes.id == id).first()

        if(grapes):
            response_body = grapes.to_dict()
            return make_response(response_body, 200)
        else:
            return make_response({'error': 'Grape varietal not found'}, 404)
    
    def delete(self, id):
        grapes = db.session.get(Grapes, id)

        if(grapes):
            db.session.delete(grapes)
            db.session.commit()
            response_body = {}
            return make_response(response_body, 204)
        else:
            response_body = {
                'error' : 'Grape varietal not found'
            }
            return make_response(response_body, 404)
        
    def patch(self, id):
        data = request.get_json()

        grape = Grapes.query.filter_by(id=id).first()

        for attr in data:
            setattr(grape, attr, data[attr])

            db.session.add(grape)
            db.session.commit()

            return make_response(grape.to_dict(), 200)

api.add_resource(GrapesByID, '/grapes/<int:id>')
        

class NewGrapes(Resource):

    def post(self):
            
        new_grape = Grapes(
            name=request.form['name'],
            color=request.form['color'],
            )
        db.session.add(new_grape)
        db.session.commit()

        response_dict = new_grape.to_dict()

        response = make_response(
            response_dict, 201
        )

        return response
                
class AllSubregions(Resource):
    def get(self):
        subregions = SubRegions.query.all()
        # response_body = [subregions.to_dict]
        response_body = [subregions.to_dict(only=('id', 'name')) for subregions in subregions]
        return make_response(response_body, 200)
    
api.add_resource(AllSubregions, '/subregions')


class SubregionsByID(Resource):

    def get(self, id):
        subregions = SubRegions.query.filter(SubRegions.id == id).first()

        if (subregions):
            response_body = subregions.to_dict()
            return make_response(response_body, 200)
        else:
            return make_response({'error': 'Region not found'}, 404)
        
    def delete(self, id):
        subregions = db.session.get(SubRegions, id)

        if(subregions):
            db.session.delete(subregions)
            db.session.commit()
            response_body = {}
            return make_response(response_body, 204)
        else:
            response_body = {
                'error' : 'Region not found'
            }
            return make_response(response_body, 404)
        
    def patch(self, id):
        data = request.get_json()

        subregions = SubRegions.query.filter_by(id=id).first()

        for attr in data:
            setattr(subregions, attr, data[attr])

            db.session.add(subregions)
            db.session.commit()

            return make_response(subregions.to_dict(), 200)
        
api.add_resource(SubregionsByID, '/subregions/<int:id>')


class Login(Resource):

    def post(self):
        user = User.query.filter(
            User.username == request.get_json()['username']
        ).first()

        session['user_id'] = user.id
        return user.to_dict()
    
api.add_resource(Login, '/login')
    

class CheckSession(Resource):

    def get(self):
        user = User.query.filter(User.id == session.get('user_id')).first()
        if user:
            return user.to_dict()
        else:
            return {'message': '401: Not Authorized'}, 401

api.add_resource(CheckSession, '/check_session')

class Logout(Resource):

    def delete(self): 
        session['user_id'] = None
        return {'message': '204: No Content'}, 204

api.add_resource(Logout, '/logout')


class Signup(Resource):

    def post(self):
        
        username = request.get_json()['username']
        password = request.get_json()['password']

        if username and password:
            
            new_user = User(username=username)
            new_user.password_hash = password
            db.session.add(new_user)
            db.session.commit()

            session['user_id'] = new_user.id
            
            return new_user.to_dict(), 201

        return {'error': '422 Unprocessable Entity'}, 422
    
api.add_resource(Signup, '/signup', endpoint='signup')
    


# api.add_resource(ClearSession, '/clear', endpoint='clear')

# api.add_resource(CheckSession, '/check_session', endpoint='check_session')
# api.add_resource(Login, '/login', endpoint='login')
# api.add_resource(Logout, '/logout', endpoint='logout')



if __name__ == '__main__':
    app.run(port=5555, debug=True)
