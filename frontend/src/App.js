import './App.css';
import HeaderBar from './components/HeaderBar';
import Home from './components/Home';
import ImageUpload from './components/ImageUpload';
import PredictionResult from './components/PredictionResult';
import DiseaseDetails from './components/DiseaseDetails';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import AboutTeam from './components/AboutTeam';
import ContactFeedback from './components/ContactFeedback';
import ModelInfo from './components/ModelInfo';
import React from 'react';

function App() {
  const [result, setResult] = React.useState(null);
  return (
    <>
      <HeaderBar />
      <Home />
      <DiseaseDetails />
      <ImageUpload onResult={setResult} />
      <PredictionResult result={result} />
      <HowItWorks />
      <FAQ />
      <AboutTeam />
      <ContactFeedback />
      <ModelInfo />
    </>
  );
}

export default App;
