import React, { useMemo } from 'react';

interface CircularWaveProps {
  isPlaying: boolean;
  size?: number;
  numPoints?: number;
  intensity?: number;
}

const CircularWave: React.FC<CircularWaveProps> = ({
  isPlaying,
  size = 200,
  numPoints = 120,
  intensity = 25,
}) => {
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = size * 0.3;
  
  const points = useMemo(() => {
    return Array.from({ length: numPoints }).map((_, i) => {
      const angle = (i / numPoints) * Math.PI * 2;
      const randomOffset = isPlaying ? Math.random() * intensity : 0;
      const pointRadius = radius + randomOffset;
      
      return {
        x: centerX + Math.cos(angle) * pointRadius,
        y: centerY + Math.sin(angle) * pointRadius,
        delay: i * 0.01,
      };
    });
  }, [numPoints, isPlaying]);

  return (
    <div className="flex justify-center items-center w-full h-full">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <defs>
          <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="50%" stopColor="#EC4899" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        <g className="transform transition-transform duration-1000">
          {isPlaying && (
            <circle
              cx={centerX}
              cy={centerY}
              r={radius * 0.8}
              fill="none"
              stroke="url(#circleGradient)"
              strokeWidth="1"
              strokeOpacity="0.3"
              className="animate-pulse"
            />
          )}
          
          {points.map((point, i) => (
            <circle
              key={i}
              cx={point.x}
              cy={point.y}
              r={isPlaying ? 1.5 : 1}
              fill={i % 3 === 0 ? "#8B5CF6" : i % 3 === 1 ? "#EC4899" : "#06B6D4"}
              className="transition-all duration-700"
              style={{
                opacity: isPlaying ? 0.8 : 0.4,
                transitionDelay: `${point.delay}s`,
                animation: isPlaying 
                  ? `pulsePoint 2s ease-in-out ${i % 8 * 0.1}s infinite alternate` 
                  : 'none'
              }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default CircularWave;