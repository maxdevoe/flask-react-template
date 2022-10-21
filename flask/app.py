from flask import Flask

app = Flask(__name__)

@app.route("/index")
def index():
    """
    The index endpoint is used to test if the service is working and if we
    can recieve requests from and send data to the client.
    """
    json = {"message": "hello flask"}

    return json