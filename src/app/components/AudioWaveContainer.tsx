'use client';

import React, { useState, useEffect } from 'react';
import EnvelopeWave from './EnvelopeWave';

const AudioWaveContainer: React.FC = () => {
  const [waveData, setWaveData] = useState<number[]>([]);

  useEffect(() => {
    const points = 100;
    const data = Array.from({ length: points }, () => Math.random() * 0.8 + 0.2);
    setWaveData(data);
  }, []);
  
  return (
    <div style={{ 
      width: '100%',
      height: '60px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {waveData.length > 0 && <EnvelopeWave data={waveData} />}
    </div>
  );
};

export default AudioWaveContainer;