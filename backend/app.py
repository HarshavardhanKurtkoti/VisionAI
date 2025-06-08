from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import numpy as np
import tensorflow as tf
from tensorflow import keras
import cv2
import tensorflow_hub as hub  # <-- Added for KerasLayer

# Load class names (should match the order used in training)
CLASS_NAMES = [
    'Central Serous Chorioretinopathy-Color Fundus',
    'Diabetic Retinopathy',
    'Disc Edema',
    'Glaucoma',
    'Healthy',
    'Macular Scar',
    'Myopia',
    'Pterygium',
    'Retinal Detachment',
    'Retinitis Pigmentosa'
]

# Model and image settings
MODEL_PATH = os.path.join(os.path.dirname(__file__), 'notebook/eye_disease_model.h5')
IMAGE_SIZE = (224, 224)

# Load the trained model once at startup, with custom_objects for KerasLayer
model = keras.models.load_model(
    'eye_disease_model.h5',  # Updated path to match Docker context
    custom_objects={'KerasLayer': hub.KerasLayer}
)

def preprocess_image(file_stream):
    # Read image from file stream
    file_bytes = np.frombuffer(file_stream.read(), np.uint8)
    img = cv2.imdecode(file_bytes, cv2.IMREAD_COLOR)
    if img is None:
        raise ValueError('Invalid image')
    # Resize and convert to RGB
    img = cv2.resize(img, IMAGE_SIZE)
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    # Preprocessing: match training (do NOT rescale to 0-1 if using preprocess_input)
    img = img.astype(np.float32)
    img = tf.keras.applications.resnet.preprocess_input(img)
    img = np.expand_dims(img, axis=0)  # Add batch dimension
    return img

app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400
    file = request.files['image']
    try:
        img = preprocess_image(file)
        preds = model.predict(img)
        pred_idx = np.argmax(preds, axis=1)[0]
        diagnosis = CLASS_NAMES[pred_idx]
        confidence = float(np.max(preds))
        return jsonify({'diagnosis': diagnosis, 'confidence': confidence})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/')
def home():
    return 'Eye Disease Diagnosis API is running.'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
