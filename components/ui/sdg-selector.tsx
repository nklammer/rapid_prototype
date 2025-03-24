"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { SDG_GOALS } from '@/lib/data';
import { ExternalLink } from 'lucide-react';

export function SDGSelector({ onSelect }: { onSelect: (sdgId: number) => void }) {
  const [selectedGoal, setSelectedGoal] = useState(SDG_GOALS[0]);

  const handleSelect = (value: string) => {
    const goal = SDG_GOALS.find(g => g.id === parseInt(value));
    if (goal) {
      setSelectedGoal(goal);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 space-y-8">
      <h2 className="text-3xl font-bold text-center mb-8">Choose Your Impact Area</h2>
      
      <div className="space-y-6">
        <Select onValueChange={handleSelect} defaultValue="1">
          <SelectTrigger className="w-full text-lg">
            <SelectValue placeholder="Select a Sustainable Development Goal" />
          </SelectTrigger>
          <SelectContent>
            {SDG_GOALS.map((goal) => (
              <SelectItem key={goal.id} value={goal.id.toString()}>
                {goal.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="bg-white rounded-xl p-8 shadow-lg transition-all duration-500 ease-in-out">
          <div className="flex flex-col items-center space-y-6">
            <div className="relative w-48 h-48 transition-transform duration-500 ease-in-out transform hover:scale-105">
              <Image
                src={`/sdg-icons/E-WEB-Goal-${String(selectedGoal.id).padStart(2, '0')}.png`}
                alt={selectedGoal.name}
                fill
                className="object-contain transition-opacity duration-500"
              />
            </div>
            
            <div className="text-center space-y-4 transition-all duration-500 ease-in-out">
              <h3 className="text-2xl font-bold" style={{ color: selectedGoal.color }}>
                {selectedGoal.name}
              </h3>
              <p className="text-gray-600 max-w-md">
                {selectedGoal.description}
                <Link 
                  href={selectedGoal.unUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center ml-2 text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="ml-1">Learn more</span>
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <Button
            size="lg"
            onClick={() => onSelect(selectedGoal.id)}
            className="px-12 py-6 text-lg rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 hover:from-orange-500 hover:via-pink-600 hover:to-purple-600 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Go
          </Button>
        </div>
      </div>
    </div>
  );
}