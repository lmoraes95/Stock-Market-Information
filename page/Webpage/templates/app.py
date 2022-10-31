from flask import Flask, render_template

app = Flask(__name__)


# routes are the parts or tabs of the page, create a different one for each different page
@app.route("/")
def echo():
    return render_template("index.html", text="this is our project 3 flask")


if __name__ == "__main__":
    app.run(debug=True)
