import os
from flask import Flask, flash, jsonify, url_for, redirect, render_template,request, session, send_from_directory

app = Flask(__name__)
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")

@app.route("/")
def index():
    return render_template("layout.html")

if __name__ == "__main__":
    app.run(app, debug=True)
