import React from "react";

const HowItWorks = () => (
  <section id="how-it-works" className="max-w-4xl mx-auto my-16 p-8 bg-white/90 dark:bg-gray-900/90 rounded-2xl shadow-xl border-2 border-blue-100 dark:border-blue-700 transition-colors duration-300">
    <h2 className="text-3xl font-bold mb-6 text-blue-700 dark:text-blue-300 text-center">How It Works</h2>
      {/* Mind Map / Diagram - full width, rescaled for better fit */}
      <div className="w-full flex justify-center items-center mb-8">
        <svg width="100%" height="220" viewBox="0 0 1000 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          {/* Frontend */}
          <rect x="20" y="60" width="200" height="80" rx="16" fill="#3B82F6" fillOpacity="0.13" stroke="#2563EB" strokeWidth="2.5"/>
          <text x="120" y="95" textAnchor="middle" fontSize="22" fill="#2563EB" fontWeight="bold">Frontend</text>
          <text x="120" y="115" textAnchor="middle" fontSize="14" fill="#2563EB">React + Tailwind</text>

          {/* Arrow to API */}
          <line x1="220" y1="100" x2="440" y2="100" stroke="#2563EB" strokeWidth="2.5" markerEnd="url(#arrowhead)"/>

          {/* API (Flask) */}
          <rect x="440" y="45" width="180" height="110" rx="16" fill="#F59E42" fillOpacity="0.13" stroke="#EA580C" strokeWidth="2.5"/>
          <text x="530" y="85" textAnchor="middle" fontSize="22" fill="#EA580C" fontWeight="bold">API</text>
          <text x="530" y="105" textAnchor="middle" fontSize="14" fill="#EA580C">Flask</text>
          <text x="530" y="120" textAnchor="middle" fontSize="12" fill="#EA580C">REST Endpoint</text>

          {/* Arrow to Backend */}
          <line x1="620" y1="100" x2="840" y2="100" stroke="#06B6D4" strokeWidth="2.5" markerEnd="url(#arrowhead2)"/>

          {/* Backend */}
          <rect x="840" y="60" width="140" height="80" rx="16" fill="#22D3EE" fillOpacity="0.13" stroke="#0891B2" strokeWidth="2.5"/>
          <text x="910" y="95" textAnchor="middle" fontSize="22" fill="#0891B2" fontWeight="bold">Backend</text>
          <text x="910" y="115" textAnchor="middle" fontSize="14" fill="#0891B2">Keras Model</text>
          <text x="910" y="130" textAnchor="middle" fontSize="12" fill="#0891B2">TensorFlow</text>

          {/* Arrow back to Frontend (Result) */}
          <polyline points="840,140 530,180 220,140" fill="none" stroke="#6366F1" strokeWidth="2" markerEnd="url(#arrowhead3)"/>
          <text x="530" y="175" textAnchor="middle" fontSize="14" fill="#6366F1">Prediction Result</text>

          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto" markerUnits="strokeWidth">
              <polygon points="0 0, 10 5, 0 10" fill="#2563EB" />
            </marker>
            <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto" markerUnits="strokeWidth">
              <polygon points="0 0, 10 5, 0 10" fill="#06B6D4" />
            </marker>
            <marker id="arrowhead3" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto" markerUnits="strokeWidth">
              <polygon points="0 0, 10 5, 0 10" fill="#6366F1" />
            </marker>
          </defs>
        </svg>
      </div>
      <div className="flex-1 text-gray-800 dark:text-gray-100 text-base space-y-4">
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <span className="font-semibold text-blue-700 dark:text-blue-300">Frontend (React):</span> The user uploads an eye image using a modern, responsive web interface built with React and Tailwind CSS.
          </li>
          <li>
            <span className="font-semibold text-orange-700 dark:text-orange-300">API (Flask):</span> The image is sent to a Flask REST API, which acts as a bridge between the frontend and backend model.
          </li>
          <li>
            <span className="font-semibold text-cyan-700 dark:text-cyan-300">Backend (Keras Model):</span> The Flask API preprocesses the image and passes it to a deep learning model (EfficientNetV2, Keras/TensorFlow) for prediction.
          </li>
          <li>
            <span className="font-semibold text-blue-700 dark:text-blue-300">Result:</span> The API returns the predicted disease and confidence score, which is displayed to the user in the frontend.
          </li>
        </ol>
        <div className="mt-4 text-sm text-blue-700 dark:text-blue-300">
          <span className="font-semibold">References:</span>
          <ul className="list-disc list-inside">
            <li><a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-500">React</a> (Frontend)</li>
            <li><a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-500">Tailwind CSS</a> (Styling)</li>
            <li><a href="https://flask.palletsprojects.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-500">Flask</a> (API)</li>
            <li><a href="https://keras.io/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-500">Keras</a> (Deep Learning Model)</li>
            <li><a href="https://www.tensorflow.org/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-500">TensorFlow</a> (Model Backend)</li>
          </ul>
        </div>
      </div>
  </section>
);

export default HowItWorks;
