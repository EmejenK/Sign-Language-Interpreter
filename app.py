from flask import Flask, request, jsonify, render_template


app = Flask(__name__)

@app.route('/', methods=['POST', 'GET'])
def index():
    
    return render_template('index.html')

@app.route('/receive-data', methods=['POST'])
def receive_data():
    data = request.json['data']
    if data == 'Train':
        import main
        print(f"Received data: {data}")
    else:

        print(data+str('ing'))
    return "Data received successfully!"

if __name__ == '__main__':
    app.run()




