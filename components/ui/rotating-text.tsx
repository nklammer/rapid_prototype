"use client";

import { useEffect, useState } from "react";
import { SDG_GOALS } from "@/lib/types";
import { cn } from "@/lib/utils";

export function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((current) => (current + 1) % SDG_GOALS.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={cn(
        "inline-block transition-all duration-500",
        isAnimating && "opacity-0 transform -translate-y-4"
      )}
      style={{ color: SDG_GOALS[currentIndex].color }}
    >
      {SDG_GOALS[currentIndex].name}
    </span>
  );
}