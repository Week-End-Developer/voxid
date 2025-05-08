import React from 'react';
import EnvelopeWave from './EnvelopeWave';

const AudioWaveContainer: React.FC = () => {
  const generateWaveData = () => {
    const points = 100;
    return Array.from({ length: points }, () => Math.random() * 0.8 + 0.2);
  };
  
  const waveData = generateWaveData();
  
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full h-64 flex items-center justify-center">
        <EnvelopeWave data={waveData} />
      </div>
    </div>
  );
};

export default AudioWaveContainer;