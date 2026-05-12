import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { MoreVertical } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  status: string;
  freelancer: string;
  applicants: number;
  budget: string;
  posted: string;
}

export function ClientMyProjects() {
  const defaultProjects: Project[] = [
    {
      id: '1',
      title: 'E-commerce Website Redesign',
      status: 'In Progress',
      freelancer: 'John Doe',
      applicants: 12,
      budget: '₹2,00,000',
      posted: 'April 15, 2026',
    },
    {
      id: '2',
      title: 'Mobile App Dashboard',
      status: 'In Progress',
      freelancer: 'Jane Smith',
      applicants: 8,
      budget: '₹1,20,000',
      posted: 'April 10, 2026',
    },
    {
      id: '3',
      title: 'Brand Identity Design',
      status: 'Open',
      freelancer: '-',
      applicants: 15,
      budget: '₹80,000',
      posted: 'April 28, 2026',
    },
    {
      id: '4',
      title: 'SEO Optimization',
      status: 'Completed',
      freelancer: 'Mike Johnson',
      applicants: 6,
      budget: '₹64,000',
      posted: 'March 20, 2026',
    },
  ];

  const [projects, setProjects] = useState<Project[]>(defaultProjects);

  useEffect(() => {
    const newProjects: Project[] = JSON.parse(localStorage.getItem('clientProjects') || '[]');
    if (newProjects.length > 0) {
      setProjects([...defaultProjects, ...newProjects]);
      localStorage.removeItem('clientProjects');
    }
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl">My Projects</h1>
        <Link to="/client/post-project">
          <Button>Post new project</Button>
        </Link>
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-3 px-6">Project</th>
                <th className="text-left py-3 px-6">Status</th>
                <th className="text-left py-3 px-6">Freelancer</th>
                <th className="text-left py-3 px-6">Applicants</th>
                <th className="text-left py-3 px-6">Budget</th>
                <th className="text-left py-3 px-6">Posted</th>
                <th className="text-left py-3 px-6">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id} className="border-t">
                  <td className="py-4 px-6">{project.title}</td>
                  <td className="py-4 px-6">
                    <Badge
                      variant={
                        project.status === 'Completed'
                          ? 'success'
                          : project.status === 'In Progress'
                          ? 'primary'
                          : 'secondary'
                      }
                    >
                      {project.status}
                    </Badge>
                  </td>
                  <td className="py-4 px-6">{project.freelancer}</td>
                  <td className="py-4 px-6">{project.applicants}</td>
                  <td className="py-4 px-6">{project.budget}</td>
                  <td className="py-4 px-6 text-sm text-gray-600">{project.posted}</td>
                  <td className="py-4 px-6">
                    <button className="p-2 hover:bg-gray-100 rounded">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
