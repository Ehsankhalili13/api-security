from flask import Flask, jsonify, request, make_response
from functools import wraps

app = Flask(__name__)

USERS = {"admin": "1234"} # chenge info

def check_auth(username, password):
    return username in USERS and USERS[username] == password

def requires_auth(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        auth = request.authorization
        if not auth or not check_auth(auth.username, auth.password):
            response = make_response(jsonify({"error": "Unauthorized"}), 401)
            response.headers['WWW-Authenticate'] = 'Basic realm="Login Required"'
            return response
        return f(*args, **kwargs)
    return decorated

if __name__ == '__main__':
    app.run(debug=True)


