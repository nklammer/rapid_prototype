"use client";

import { useState } from "react";
import { SDG_GOALS, PROJECTS } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/ui/project-card";
import { Button } from "@/components/ui/button";
import { RotatingText } from "@/components/ui/rotating-text";
import { SDGSelector } from "@/components/ui/sdg-selector";

export default function Home() {
  const [selectedSDGs, setSelectedSDGs] = useState<number[]>([]);
  const [currentView, setCurrentView] = useState<'landing' | 'selector' | 'projects'>('landing');

  const filteredProjects = selectedSDGs.length > 0
    ? PROJECTS.filter(project => 
        project.sdgs.some(sdg => selectedSDGs.includes(sdg)))
    : PROJECTS;

  const toggleSDG = (sdgId: number) => {
    setSelectedSDGs(current =>
      current.includes(sdgId)
        ? current.filter(id => id !== sdgId)
        : [...current, sdgId]
    );
  };

  const handleSDGSelect = (sdgId: number) => {
    setSelectedSDGs([sdgId]);
    setCurrentView('projects');
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {currentView === 'landing' && (
          <div className="min-h-screen flex flex-col items-center justify-center text-center py-12 space-y-8">
            <div className="max-w-4xl">
              <h1 className="text-6xl font-bold tracking-tight text-gray-900 mb-6">
                Welcome to <span className="text-black">ProAct</span><span className="text-gray-900">.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                The only place on the web to browse for Open Source software projects that advance the world's biggest goals. 17 UN Sustainable Development Goals to choose from.
              </p>
              <div className="text-2xl font-medium text-gray-800 space-y-2">
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center">
                    Contribute to{" "}
                    <span className="inline-block w-[400px] mx-2 border-b border-gray-300">
                      <RotatingText />
                    </span>
                  </div>
                  <div>by building solutions</div>
                </div>
              </div>
            </div>
            <Button 
              size="lg"
              className="mt-8 text-lg px-8 py-6 rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 hover:from-orange-500 hover:via-pink-600 hover:to-purple-600 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => setCurrentView('selector')}
            >
              Get Started
            </Button>
          </div>
        )}

        {currentView === 'selector' && (
          <div className="min-h-screen flex items-center justify-center py-12">
            <SDGSelector onSelect={handleSDGSelect} />
          </div>
        )}

        {currentView === 'projects' && (
          <div className="py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-4">
                Open Source for <span className="text-blue-600">Global Goals</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover open-source projects contributing to the UN Sustainable Development Goals
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Filter by SDG:</h2>
              <div className="flex flex-wrap gap-2">
                {SDG_GOALS.map((goal) => (
                  <Badge
                    key={goal.id}
                    variant={selectedSDGs.includes(goal.id) ? "default" : "outline"}
                    className={`cursor-pointer text-sm py-1 px-3 ${
                      goal.name.length > 30 ? 'text-xs' : 'text-sm'
                    }`}
                    style={{
                      backgroundColor: selectedSDGs.includes(goal.id) ? goal.color : "transparent",
                      borderColor: goal.color,
                      color: selectedSDGs.includes(goal.id) ? "white" : goal.color,
                    }}
                    onClick={() => toggleSDG(goal.id)}
                  >
                    {goal.name}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}