import { useState } from 'react';
import { Badge } from './badge';
import { Button } from './button';
import { Card } from './card';
import { GitHubLogoIcon, StarFilledIcon, PersonIcon, UpdateIcon, Cross1Icon } from '@radix-ui/react-icons';
import { Project, SDG_GOALS } from '@/lib/types';
import { cn } from '@/lib/utils';

export function ProjectCard({ project }: { project: Project }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <>
      <Card 
        className={cn(
          "cursor-pointer transition-all duration-300 transform hover:shadow-lg",
          isFlipped && "invisible"
        )}
        onClick={() => setIsFlipped(true)}
      >
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.sdgs.map((sdgId) => {
              const goal = SDG_GOALS.find(g => g.id === sdgId);
              return (
                <Badge
                  key={sdgId}
                  style={{
                    backgroundColor: goal?.color,
                    color: "white"
                  }}
                >
                  {goal?.name}
                </Badge>
              );
            })}
          </div>
          
          <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
          <p className="text-gray-600 mb-4">{project.description}</p>
          
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="flex items-center gap-1">
              <StarFilledIcon className="h-4 w-4" />
              {project.metrics.stars}
            </span>
            <span className="flex items-center gap-1">
              <PersonIcon className="h-4 w-4" />
              {project.metrics.contributors}
            </span>
            <span className="flex items-center gap-1">
              <UpdateIcon className="h-4 w-4" />
              {new Date(project.metrics.lastUpdate).toLocaleDateString()}
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <Button
            variant="outline"
            className="w-full"
            onClick={(e) => {
              e.stopPropagation();
              window.open(project.repoUrl, "_blank");
            }}
          >
            <GitHubLogoIcon className="mr-2 h-4 w-4" />
            View Repository
          </Button>
        </div>
      </Card>

      {isFlipped && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <Card className="w-full max-w-2xl mx-4 animate-in zoom-in-95 duration-200">
            <div className="relative p-6">
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4"
                onClick={() => setIsFlipped(false)}
              >
                <Cross1Icon className="h-4 w-4" />
              </Button>

              <div className="space-y-6">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.sdgs.map((sdgId) => {
                      const goal = SDG_GOALS.find(g => g.id === sdgId);
                      return (
                        <Badge
                          key={sdgId}
                          style={{
                            backgroundColor: goal?.color,
                            color: "white"
                          }}
                        >
                          {goal?.name}
                        </Badge>
                      );
                    })}
                  </div>
                  <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
                  <p className="text-gray-600">{project.description}</p>
                </div>

                <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">{project.metrics.stars}</div>
                    <div className="text-sm text-gray-500">Stars</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">{project.metrics.contributors}</div>
                    <div className="text-sm text-gray-500">Contributors</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium">
                      {new Date(project.metrics.lastUpdate).toLocaleDateString()}
                    </div>
                    <div className="text-sm text-gray-500">Last Update</div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Contributing SDGs</h3>
                  <div className="space-y-2">
                    {project.sdgs.map((sdgId) => {
                      const goal = SDG_GOALS.find(g => g.id === sdgId);
                      return (
                        <div key={sdgId} className="flex items-start gap-2">
                          <div
                            className="w-2 h-2 rounded-full mt-2"
                            style={{ backgroundColor: goal?.color }}
                          />
                          <div>
                            <div className="font-medium">{goal?.name}</div>
                            <div className="text-sm text-gray-600">{goal?.description}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <Button
                  className="w-full"
                  onClick={() => window.open(project.repoUrl, "_blank")}
                >
                  <GitHubLogoIcon className="mr-2 h-4 w-4" />
                  View Repository
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
}