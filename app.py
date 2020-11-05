import os
from flask import Flask, flash, jsonify, url_for, redirect, render_template,request, session, send_from_directory

app = Flask(__name__)
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")

@app.route("/")
def index():
    return render_template("umikokotorien.html")

@app.route("/lt")
def indexlt():
    return render_template("umikokotorilt.html")

@app.route("/umiko/en")
def umikoen():
    return render_template("umikoen.html")

@app.route("/umiko/lt")
def umikolt():
    return render_template("umikolt.html")

@app.route("/kotori/en")
def kotorien():
    return render_template("kotorien.html")

@app.route("/kotori/lt")
def kotorilt():
    return render_template("kotorilt.html")

if __name__ == "__main__":
    app.run(app, debug=True)
