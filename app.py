from flask import Flask
app = Flask(__name__)


@app.route('/')
def hello():
    """ Another Comment """
    return "Hello World!"

@app.route('/<name>')
def hello_name(name):
    """ Takes a name and greets them """
    return "Hello %s!" % name

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=5050)
