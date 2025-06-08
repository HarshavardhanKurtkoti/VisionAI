# Use official Python image
FROM python:3.10-slim

# Set working directory
WORKDIR /app

# Add a new sources list for a different mirror and install system dependencies for OpenCV
RUN echo "deb http://ftp.us.debian.org/debian bookworm main" > /etc/apt/sources.list.d/us-mirror.list && \
    apt-get update --fix-missing && \
    apt-get install -y libgl1 libglib2.0-0 libxfixes3 && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Copy only necessary backend files
COPY backend/app.py ./
COPY backend/eye_disease_model.h5 ./
COPY backend/requirements.txt ./

# Install dependencies
RUN pip install --upgrade pip \
    && pip install --no-cache-dir -r requirements.txt

# Expose port
EXPOSE 5000

# Set environment variables for Flask
ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0

# Run the Flask app
CMD ["python", "app.py"]
