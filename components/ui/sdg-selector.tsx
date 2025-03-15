"use client";

import { useState } from "react";
import { SDG_GOALS } from "@/lib/types";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@radix-ui/react-icons";

interface SDGSelectorProps {
  onSelect: (sdgId: number) => void;
}

export function SDGSelector({ onSelect }: SDGSelectorProps) {
  const [selectedSDG, setSelectedSDG] = useState<SDG_GOALS[0] | null>(null);

  const handleSelect = (value: string) => {
    const sdg = SDG_GOALS.find(goal => goal.id === parseInt(value));
    if (sdg) setSelectedSDG(sdg);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-12">
      <h1 className="text-6xl font-bold text-center mb-16">Choose</h1>
      
      <div className="flex items-center justify-center gap-4 text-2xl text-gray-600">
        <span>I want to explore projects in</span>
        <Select onValueChange={handleSelect}>
          <SelectTrigger className="w-[300px] text-xl">
            <SelectValue placeholder="Choose an option..." />
          </SelectTrigger>
          <SelectContent>
            {SDG_GOALS.map((goal) => (
              <SelectItem 
                key={goal.id} 
                value={goal.id.toString()}
                className="text-lg"
              >
                {goal.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {selectedSDG && (
        <div className="mt-16 animate-fade-in">
          <div className="flex gap-8 items-start">
            <div 
              className="w-48 h-48 flex-shrink-0 rounded-lg"
              style={{ backgroundColor: selectedSDG.color }}
            >
              <img 
                src={`/sdg-icons/E-WEB-Goal-${selectedSDG.id.toString().padStart(2, '0')}.png`}
                alt={selectedSDG.name}
                className="w-full h-full object-contain p-4"
              />
            </div>
            <div className="flex-1 space-y-4">
              <h2 className="text-3xl font-semibold" style={{ color: selectedSDG.color }}>
                {selectedSDG.name}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {selectedSDG.description}
              </p>
              <Button 
                size="lg"
                className="mt-8 text-lg px-8 py-6 rounded-full"
                style={{ 
                  backgroundColor: selectedSDG.color,
                  color: 'white'
                }}
                onClick={() => onSelect(selectedSDG.id)}
              >
                GO <ChevronRightIcon className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}