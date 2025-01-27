import React, { useEffect, useState } from 'react';
import './CircularSkill.css';

const CircularSkill = ({ skillName, percentage }) => {
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    
    const progressOffset = circumference - (percentage / 100) * circumference;
    setOffset(progressOffset);
  }, [percentage, circumference]);

  return (
    <div className="skill">
      <svg className="circular-chart" width="140" height="140" viewBox="0 0 140 140">
        <circle
          className="circle-bg"
          cx="70"
          cy="70"
          r={radius}
        />
        <circle
          className="circle-progress"
          cx="70"
          cy="70"
          r={radius}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset,
          }}
        />
        <text x="70" y="75" textAnchor="middle" className="percentage-text">
          {`${percentage}%`}
        </text>
      </svg>
      <div className="skill-name">{skillName}</div>
    </div>
  );
};

export default CircularSkill;
