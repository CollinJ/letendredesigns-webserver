from flask import Flask
from flask import send_from_directory
app = Flask(__name__)


@app.route('/')
def hello():
    """ Another Comment """
    return send_from_directory('', 'index.html')

@app.route('/static/<path:filename>')
def send_static(filename):
    return send_from_directory('static/', filename)

@app.route('/views/<path:filename>')
def send_views(filename):
    return send_from_directory('views/', filename)

@app.route('/js/<path:filename>')
def send_js(filename):
    return send_from_directory('js/', filename)

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=5050)
