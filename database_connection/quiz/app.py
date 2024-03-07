from flask import Flask
from flask_restful import Api, Resource
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)
api = Api(app)

# Configure MySQL connection
mysql_connection = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="interview"
)

class ApiHandler(Resource):
    def get(self):
        # Execute the MySQL query
        cursor = mysql_connection.cursor()
        cursor.execute("SELECT `ID`,`Questions`  FROM `ace`")
        rows = cursor.fetchall()
        cursor.close()

        # Format the result
        results = []
        for row in rows:
            results.append({
                'id': row[0],
                'Question': row[1],
                # Add other columns as needed
            })

        return {
            'resultstatus': 'SUCCESS',
            'message': "Hello Api Handler.py",
            'data': results
        }

api.add_resource(ApiHandler, '/flask')

if __name__ == '__main__':
    app.run(debug=True)
