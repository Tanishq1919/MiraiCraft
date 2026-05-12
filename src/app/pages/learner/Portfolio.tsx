import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Share2, Star } from 'lucide-react';

export function LearnerPortfolio() {
  const projects = [
    {
      id: '1',
      title: 'E-commerce Website Redesign',
      description: 'Complete redesign of an e-commerce platform with modern UI and improved checkout flow',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      rating: 5,
      completedDate: 'April 2026',
      image: 'https://images.unsplash.com/photo-1675495277087-10598bf7bcd1?w=400',
    },
    {
      id: '2',
      title: 'Portfolio Website for Creative Agency',
      description: 'Custom portfolio website with animations and interactive elements',
      techStack: ['React', 'Motion', 'CSS'],
      rating: 5,
      completedDate: 'March 2026',
      image: 'https://images.unsplash.com/photo-1672385277648-85eddc237a2b?w=400',
    },
    {
      id: '3',
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for visualizing business metrics and KPIs',
      techStack: ['Python', 'Pandas', 'Recharts', 'React'],
      rating: 4,
      completedDate: 'February 2026',
      image: 'https://images.unsplash.com/photo-1563630482997-07d8d7fbc9df?w=400',
    },
    {
      id: '4',
      title: 'Landing Page for SaaS Product',
      description: 'Conversion-optimized landing page with responsive design',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      rating: 5,
      completedDate: 'January 2026',
      image: 'https://images.unsplash.com/photo-1517512006864-7edc3b933137?w=400',
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl">Portfolio</h1>
        <Button>
          <Share2 className="w-4 h-4 mr-2" />
          Share MiraiCraft Portfolio
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg">{project.title}</h3>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm">{project.rating}</span>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Completed {project.completedDate}</span>
                <Button variant="outline" size="sm">
                  View details
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
