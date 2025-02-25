import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Circle, PanoramaFishEye, CropLandscape, CropSquare } from '@mui/icons-material';
import Btype from '../assets/Btype.jpg';

const bodyTypes = [
  { id: 'round', name: 'Round', icon: <Circle fontSize="large" /> },
  { id: 'oval', name: 'Oval', icon: <PanoramaFishEye fontSize="large" /> },
  { id: 'rectangle', name: 'Rectangular', icon: <CropLandscape fontSize="large" /> },
  { id: 'square', name: 'Square', icon: <CropSquare fontSize="large" /> },
];

function BodyTypeSelection() {
  const [selectedBodyType, setSelectedBodyType] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedBodyType) {
      navigate(`/dresstype`); 
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4">
      {/* Background Image */}
      <img src={Btype} alt="Background" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Main Container */}
      <div className="relative w-full max-w-3xl bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl z-10">
        <h1 className="text-2xl font-bold text-center mb-4">Select Your Body Type</h1>
        <p className="text-gray-600 text-center mb-6">
          We personalize product recommendations based on your body type.
        </p>

        {/* Body Type Selection Grid */}
        <div className="grid grid-cols-2 gap-4">
          {bodyTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedBodyType(type.id)}
              className={`flex flex-col items-center p-4 rounded-lg border ${
                selectedBodyType === type.id
                  ? 'border-purple-600 bg-purple-100 shadow-md'
                  : 'border-gray-300 hover:border-purple-500 hover:bg-gray-100'
              } transition-all`}
            >
              <div className="text-purple-600 mb-2">{type.icon}</div>
              <span className="font-semibold">{type.name}</span>
            </button>
          ))}
        </div>

        {/* Proceed Button */}
        <div className="mt-6 text-center">
          <button
            onClick={handleContinue}
            disabled={!selectedBodyType}
            className={`w-full px-6 py-2 rounded-lg text-white font-semibold transition-all ${
              selectedBodyType
                ? 'bg-purple-600 hover:bg-purple-700'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default BodyTypeSelection;