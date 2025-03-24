"use client";

import { useState, useEffect } from 'react';
import { SDG_GOALS } from '@/lib/data';

export function RotatingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % SDG_GOALS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goal = SDG_GOALS[index];
  const textSize = goal.name.length > 30 ? 'text-lg' : 'text-2xl';

  return (
    <span 
      className={`${textSize} font-medium transition-all duration-500`}
      style={{ color: goal.color }}
    >
      {goal.name}
    </span>
  );
}