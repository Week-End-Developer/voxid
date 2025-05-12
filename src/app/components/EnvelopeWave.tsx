'use client';

import React, { useMemo } from 'react';

interface EnvelopeWaveProps {
  data: number[];
}

const EnvelopeWave: React.FC<EnvelopeWaveProps> = ({ data }) => {
  const height = 60;
  const width = 300;
  const barWidth = width / data.length;

  const wavePoints = useMemo(() => {
    return data.map((value, index) => {
      const x = index * barWidth;
      const barHeight = value * (height / 2);
      
      return {
        x,
        barHeight,
        width: Math.max(1, barWidth - 1),
      };
    });
  }, [data, barWidth, height]);
  
  return (
    <div style={{ 
      width: '100%', 
      height: '100%', 
      maxHeight: '60px',
      overflow: 'hidden'
    }}>
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
        style={{ maxHeight: '60px' }}
      >
        {wavePoints.map((point, index) => (
          <React.Fragment key={index}>
            <rect
              x={point.x}
              y={(height / 2) - point.barHeight}
              width={point.width}
              height={point.barHeight}
              fill="var(--color-coral)"
            />
            <rect
              x={point.x}
              y={height / 2}
              width={point.width}
              height={point.barHeight}
              fill="var(--color-coral)"
            />
          </React.Fragment>
        ))}
        <line
          x1="0"
          y1={height / 2}
          x2={width}
          y2={height / 2}
          stroke="var(--color-light)"
          strokeWidth="0.5"
          strokeOpacity="0.3"
        />
      </svg>
    </div>
  );
};

export default EnvelopeWave;