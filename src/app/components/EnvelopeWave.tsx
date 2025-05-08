import React from 'react';

interface EnvelopeWaveProps {
  data: number[];
}

const EnvelopeWave: React.FC<EnvelopeWaveProps> = ({ data }) => {
  const height = 30;
  const width = 200;
  const barWidth = width / data.length;
  
  return (
    <div className="w-full overflow-hidden">
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        className="max-w-full"
      >
        {data.map((value, index) => {
          const x = index * barWidth;
          const barHeight = value * (height / 2);
          
          return (
            <React.Fragment key={index}>
              <rect
                x={x}
                y={(height / 2) - barHeight}
                width={Math.max(1, barWidth - 1)}
                height={barHeight}
                className="fill-blue-500"
              />
              <rect
                x={x}
                y={height / 2}
                width={Math.max(1, barWidth - 1)}
                height={barHeight}
                className="fill-blue-500"
              />
            </React.Fragment>
          );
        })}
        <line
          x1="0"
          y1={height / 2}
          x2={width}
          y2={height / 2}
          className="stroke-gray-600 stroke-[0.5]"
        />
      </svg>
    </div>
  );
};

export default EnvelopeWave;