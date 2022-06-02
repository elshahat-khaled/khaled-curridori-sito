from flask import Flask, request, jsonify, Response
from flask_cors import CORS
from flask_restful import Resource , Api ,reqparse
from flask_pymongo import PyMongo
from bson import json_util
import pymongo


app = Flask(__name__ )
app.config["MONGO_URI"] = "mongodb://khaled:33311Ee9@cluster0-shard-00-00.2e0wc.mongodb.net:27017,cluster0-shard-00-01.2e0wc.mongodb.net:27017,cluster0-shard-00-02.2e0wc.mongodb.net:27017/progetto?ssl=true&replicaSet=atlas-3iutc4-shard-0&authSource=admin&retryWrites=true&w=majority"
mongo = PyMongo(app)
CORS(app)


@app.route('/')
# Prendere i dati da MongoDB
def prova():
    return ""

@app.route("/dataset")
def get():
    uss = mongo.db.stazioni_aggioirnate.find()
    resp = json_util.dumps(uss)
    return Response(resp, mimetype = 'application/json') 

@app.route('/name/<string>', methods=['GET'])
def onedata(string):
    # GET a specific data by name
    if request.method == 'GET':
        data = mongo.db.stazioni_aggioirnate.find({'name': string})
        resp = json_util.dumps(data)
        return Response(resp, mimetype = 'application/json') 

@app.route('/markers', methods=['GET'])
def markersGet():
        points = []
        result = mongo.db.stazioni_aggioirnate.find().limit(100)
        for i in result:
            points.append({
                "Coordinates": {
                    "lng": i['longitude'],
                    "lat": i['latitude'],
                    "name": i["name"]

                }
            })
        return jsonify(points)

if __name__ == '__main__':
    app.run()