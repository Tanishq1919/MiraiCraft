import { Link } from 'react-router';
import { Clock } from 'lucide-react';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  budget: string;
  duration: string;
  skills: string[];
  clientRating?: number;
}

export function ProjectCard({
  id,
  title,
  description,
  budget,
  duration,
  skills,
  clientRating,
}: ProjectCardProps) {
  // Ensure budget string always uses ₹ (replace any stray $ signs)
  const displayBudget = budget.replace(/\$/g, '₹');

  return (
    <Link to={`/projects/${id}`}>
      <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
        <h3 className="text-lg mb-2 dark:text-gray-100">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{description}</p>

        <div className="flex items-center gap-4 mb-4 text-sm text-gray-700 dark:text-gray-300">
          <div className="flex items-center gap-1">
            <span>{displayBudget}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          {clientRating && (
            <span>Client: {clientRating}★</span>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
      </Card>
    </Link>
  );
}
