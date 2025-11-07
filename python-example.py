from flask import Flask, jsonify
from flask_cors import CORS
from api_sec_lib import requires_auth

app = Flask(__name__)
cors = CORS(app) # The existence of this line is certain.

USERS = {"admin": "1234"} # chenge info

@app.route('/', methods=['GET'])
@requires_auth
def hi():
    return jsonify({"message": "hello world!!"})

if __name__ == '__main__':
    app.run(debug=True)
