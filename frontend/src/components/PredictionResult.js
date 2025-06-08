import React from 'react';

const PredictionResult = ({ result }) => {
  if (!result) return null;
  return (
    <section className="max-w-xl mx-auto my-8 p-6 bg-white/90 dark:bg-gray-900/90 rounded-xl shadow-lg border border-blue-100 dark:border-blue-800 text-center transition-colors duration-300">
      <h2 className="text-2xl font-bold mb-2 text-blue-700 dark:text-blue-300">Prediction Result</h2>
      <div className="text-lg text-gray-800 dark:text-blue-100 mb-2">
        <span className="font-semibold">Disease:</span> <span className="text-blue-600 dark:text-blue-200 font-bold">{result.diagnosis}</span>
      </div>
      {result.confidence && (
        <div className="text-gray-600 dark:text-gray-300">
          <span className="font-semibold">Confidence:</span> {Math.round(result.confidence * 100)}%
        </div>
      )}
    </section>
  );
};

export default PredictionResult;
