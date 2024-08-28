from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import requests
import io
from datetime import datetime

app = Flask(__name__)
CORS(app)  # Allow CORS for the React frontend

class Api_stuff:
    @staticmethod
    def save_api_key() -> None:
        with open(".apikey.txt", "w") as f:
            f.write(input("🤦 No API key found, Input Key: ").strip())
            print("API key saved successfully. Restart the Program.")
            exit()

    @staticmethod
    def read_stored_Api():
        try:
            with open(".apikey.txt", "r") as f:
                key = f.read()
                return key
        except FileNotFoundError:
            Api_stuff.save_api_key()

@app.route('/remove-bg', methods=['POST'])
def remove_bg():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400
    
    file = request.files['file']
    filename = request.form.get('filename', 'bg_removed.png')
    size = request.form.get('size', 'auto')
    type_ = request.form.get('type', 'auto')
    format_ = request.form.get('format', 'png')
    crop = request.form.get('crop', 'false')
    bgcolor = request.form.get('bgcolor', '')
    bgimgurl = request.form.get('bgimgurl', '')
    bgimgfile = request.form.get('bgimgfile', '')

    api_key = Api_stuff.read_stored_Api()

    # Construct the URL for the Remove.bg API
    response = requests.post(
        "https://api.remove.bg/v1.0/removebg",
        files={"image_file": file},
        data={
            "size": size,
            "type": type_,
            "format": format_,
            "crop": crop,
            "bg_color": bgcolor,
            "bg_image_url": bgimgurl,
            "bg_image_file": bgimgfile,
        },
        headers={"X-Api-Key": api_key},
    )

    if response.status_code == requests.codes.ok:
        # Append a timestamp to the filename to avoid conflicts and keep it unique
        timestamp = datetime.now().strftime('%Y%m%d%H%M%S')
        filename = f"{filename.split('.')[0]}_{timestamp}.{filename.split('.')[-1]}"

        return send_file(
            io.BytesIO(response.content),
            mimetype='image/png',
            as_attachment=True,
            download_name=filename
        )
    else:
        return jsonify(response.json()), response.status_code

if __name__ == '__main__':
    app.run(port=5000)
