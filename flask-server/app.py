from flask import Flask, render_template, send_from_directory

app = Flask(__name__, template_folder='../frontend/build', static_url_path="/static")

# '/' 경로로 들어오는 모든 요청에 대해 React 앱의 index.html을 서빙
@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)