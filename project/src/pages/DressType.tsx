import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Checkroom, LocalMall, SportsSoccer, Work, DirectionsRun, Style } from '@mui/icons-material';
import bgImage from '../assets/Dtype.jpg';

const dressTypes = [
  { id: 'ethnic', name: 'Ethnic Wear', icon: <Style fontSize="large" />, link: 'https://www.myntra.com/ethnic-wear' },
  { id: 'casual', name: 'Casuals', icon: <LocalMall fontSize="large" />, link: 'https://www.myntra.com/casual-wear' },
  { id: 'western', name: 'Western Wear', icon: <Checkroom fontSize="large" />, link: 'https://www.myntra.com/western-wear' },
  { id: 'active', name: 'Active Wear', icon: <DirectionsRun fontSize="large" />, link: 'https://www.myntra.com/active-wear' },
  { id: 'office', name: 'Formal Wear', icon: <Work fontSize="large" />, link: 'https://www.myntra.com/formal-wear' },
  { id: 'sports', name: 'Sports Wear', icon: <SportsSoccer fontSize="large" />, link: 'https://www.myntra.com/sports-wear' },
];

function DressTypeSelection() {
  const [selectedDressType, setSelectedDressType] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedDressType) {
      const selectedLink = dressTypes.find((dress) => dress.id === selectedDressType)?.link;
      if (selectedLink) {
        window.location.href = selectedLink; // Redirect to Myntra link
      }
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4">
      {/* Background Image */}
      <img src={bgImage} alt="Background" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Main Container */}
      <div className="relative w-full max-w-4xl bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl z-10">
        <h1 className="text-2xl font-bold text-center mb-4">Select Your Dress Type</h1>
        <p className="text-gray-600 text-center mb-6">
          We will show recommendations based on your selection.
        </p>

        {/* Dress Type Selection Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {dressTypes.map((dress) => (
            <button
              key={dress.id}
              onClick={() => setSelectedDressType(dress.id)}
              className={`flex flex-col items-center p-4 rounded-lg border ${
                selectedDressType === dress.id
                  ? 'border-purple-600 bg-purple-100 shadow-md'
                  : 'border-gray-300 hover:border-purple-500 hover:bg-gray-100'
              } transition-all`}
            >
              <div className="text-purple-600 mb-2">{dress.icon}</div>
              <span className="font-semibold">{dress.name}</span>
            </button>
          ))}
        </div>

        {/* Proceed Button */}
        <div className="mt-6 text-center">
          <button
            onClick={handleContinue}
            disabled={!selectedDressType}
            className={`w-full px-6 py-2 rounded-lg text-white font-semibold transition-all ${
              selectedDressType
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

export default DressTypeSelection;