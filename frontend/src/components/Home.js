import React from 'react';

const Home = () => (
  <section id="home" className="max-w-xl mx-auto my-16 p-8 bg-blue-50/80 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-blue-950 rounded-2xl shadow-2xl border-2 border-blue-100 dark:border-blue-700 text-center transition-colors duration-300">
    <h1 className="text-4xl font-extrabold mb-4 text-blue-800 dark:text-blue-300 tracking-tight drop-shadow">Eye Disease Detection</h1>
    <p className="text-lg text-blue-700 dark:text-blue-100 mb-6 font-medium">
      Leveraging <span className="text-blue-600 dark:text-blue-300 font-bold">EfficientNet-V2</span> and a curated dataset of eye images, this project aims to improve early detection of serious eye diseases using deep learning.
    </p>
    <div className="flex flex-wrap justify-center gap-3 text-base font-semibold mb-2">
      <span className="px-4 py-1 bg-white/80 dark:bg-blue-800 text-blue-800 dark:text-blue-100 rounded-full border border-blue-100 dark:border-blue-700 shadow">9+ Eye Conditions</span>
      <span className="px-4 py-1 bg-white/80 dark:bg-blue-800 text-blue-800 dark:text-blue-100 rounded-full border border-blue-100 dark:border-blue-700 shadow">5335 Images</span>
      <span className="px-4 py-1 bg-white/80 dark:bg-blue-800 text-blue-800 dark:text-blue-100 rounded-full border border-blue-100 dark:border-blue-700 shadow">Expert-Labeled</span>
      <span className="px-4 py-1 bg-white/80 dark:bg-blue-800 text-blue-800 dark:text-blue-100 rounded-full border border-blue-100 dark:border-blue-700 shadow">Mobile Clinic Ready</span>
    </div>
  </section>
);

export default Home;
