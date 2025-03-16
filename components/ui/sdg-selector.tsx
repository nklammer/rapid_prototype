"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { SDG_GOALS } from '@/lib/data';
import { type SDGGoal } from '@/lib/types';

interface SDGSelectorProps {
  onSelect: (sdgId: number) => void;
}

export function SDGSelector({ onSelect }: SDGSelectorProps) {
  const [selectedGoal, setSelectedGoal] = useState<SDGGoal | null>(null);

  const handleSelect = (value: string) => {
    const goal = SDG_GOALS.find(g => g.id === parseInt(value));
    if (goal) {
      setSelectedGoal(goal);
    }
  };

  return (
    <div className="max-w-3xl w-full mx-auto p-8">
      <h1 className="text-5xl font-bold text-center mb-12">Choose</h1>
      
      <div className="flex items-center gap-4 mb-8">
        <span className="text-xl text-gray-700">I want to explore projects in</span>
        <Select onValueChange={handleSelect}>
          <SelectTrigger className="w-[300px]">
            <SelectValue placeholder="Choose an option..." />
          </SelectTrigger>
          <SelectContent>
            {SDG_GOALS.map((goal) => (
              <SelectItem key={goal.id} value={goal.id.toString()}>
                {goal.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {selectedGoal && (
        <div className="animate-fade-in">
          <div className="flex gap-8 items-start bg-white rounded-lg p-6 shadow-lg mb-8">
            <div 
              className="w-40 h-40 flex-shrink-0 rounded-lg"
              style={{ backgroundColor: selectedGoal.color }}
            >
              <div className="p-8">
                <Image
                  src={`/sdg-icons/E-WEB-Goal-${selectedGoal.id.toString().padStart(2, '0')}.png`}
                  alt={selectedGoal.name}
                  width={200}
                  height={200}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4">{selectedGoal.name}</h2>
              <p className="text-gray-600 mb-2">{selectedGoal.description}</p>
              <a 
                href={`https://www.un.org/sustainabledevelopment/${selectedGoal.name.toLowerCase().replace(/\s+/g, '-')}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline"
              >
                Learn more about this goal
              </a>
            </div>
          </div>

          <Button
            size="lg"
            className="w-full text-lg py-6 bg-[#FF6B6B] hover:bg-[#FF5252] text-white rounded-full"
            onClick={() => onSelect(selectedGoal.id)}
          >
            GO
          </Button>
        </div>
      )}
    </div>
  );
}