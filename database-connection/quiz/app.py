from flask import Flask  #, request
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
    database="ace"
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
            })

        return {
            'resultstatus': 'SUCCESS',
            'message': "Hello Api Handler.py",
            'data': results
        }
    

# class TranscriptHandler(Resource):
#     def post(self):
#         data = request.json
#         transcript = data.get('transcript')
#         if transcript:
#             try:
#                 cursor = mysql_connection.cursor()
#                 # Assuming your table has a column named 'Transcript'
#                 cursor.execute("INSERT INTO ace (Transcript) VALUES (%s)", (transcript,))
#                 mysql_connection.commit()
#                 cursor.close()
#                 return {'status': 'SUCCESS', 'message': 'Transcript saved successfully'}
#             except Exception as e:
#                 return {'status': 'ERROR', 'message': str(e)}
#         else:
#             return {'status': 'ERROR', 'message': 'Transcript data not provided'}

api.add_resource(ApiHandler, '/flask')
# api.add_resource(TranscriptHandler, '/saveTranscript')

if __name__ == '__main__':
    app.run(debug=True)
