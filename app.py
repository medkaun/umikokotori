import os
from flask import Flask, flash, jsonify, url_for, redirect, render_template,request, session, send_from_directory

app = Flask(__name__)
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")

@app.route("/")
def index():
    return render_template("umikokotorien.html")

@app.route("/umiko")
def umikoen():
    return render_template("umikoen.html")

@app.route("/kotori")
def kotorien():
    return render_template("kotorien.html")

if __name__ == "__main__":
    app.run(app, debug=True)
