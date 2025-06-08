import React, { useState } from 'react';

const ImageUpload = ({ onResult }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
      setError(null);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
      setError(null);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      setError('Please select an image.');
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append('image', selectedFile);
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) throw new Error('Prediction failed.');
      const data = await response.json();
      onResult(data);
    } catch (err) {
      setError('Prediction failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form id="predict" onSubmit={handleSubmit} className="max-w-xl mx-auto my-8 p-6 bg-white/90 dark:bg-gray-900/90 rounded-xl shadow-lg border border-blue-100 dark:border-blue-800 flex flex-col items-center transition-colors duration-300">
      <label
        htmlFor="file-upload"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="w-full flex flex-col items-center justify-center border-2 border-dashed border-blue-300 dark:border-blue-700 rounded-xl p-6 cursor-pointer bg-blue-50/60 dark:bg-gray-800/60 hover:bg-blue-100/80 dark:hover:bg-gray-700/80 transition mb-4"
      >
        {preview ? (
          <img src={preview} alt="Preview" className="w-40 h-40 object-cover rounded-lg mb-2 border border-blue-200 dark:border-blue-700 shadow" />
        ) : (
          <span className="text-blue-700 dark:text-blue-200 font-semibold">Drag & drop or click to select an eye image</span>
        )}
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>
      <button
        type="submit"
        disabled={loading}
        className="mt-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow disabled:opacity-60 transition-colors duration-200"
      >
        {loading ? 'Predicting...' : 'Predict Disease'}
      </button>
      {error && <div className="mt-3 text-red-600 dark:text-red-400 font-medium">{error}</div>}
    </form>
  );
};

export default ImageUpload;
