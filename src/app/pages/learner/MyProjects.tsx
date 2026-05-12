import { Link } from 'react-router';
import { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import * as Tabs from '@radix-ui/react-tabs';

export function LearnerMyProjects() {
  const [activeTab, setActiveTab] = useState('active');

  const projects = {
    active: [
      {
        id: '1',
        title: 'E-commerce Website Redesign',
        client: 'TechCorp Solutions',
        budget: '₹2,00,000',
        status: 'In Progress',
        nextMilestone: 'Frontend Implementation',
        progress: 60,
      },
      {
        id: '2',
        title: 'Landing Page Development',
        client: 'StartupXYZ',
        budget: '₹64,000',
        status: 'In Progress',
        nextMilestone: 'Final Review',
        progress: 85,
      },
    ],
    applied: [
      {
        id: '3',
        title: 'Mobile App Dashboard',
        client: 'DataTech Inc',
        budget: '₹1,20,000',
        status: 'Under Review',
        appliedDate: 'April 25, 2026',
      },
    ],
    completed: [
      {
        id: '4',
        title: 'Portfolio Website',
        client: 'Creative Agency',
        budget: '₹48,000',
        status: 'Completed',
        completedDate: 'April 15, 2026',
        rating: 5,
      },
    ],
  };

  return (
    <div>
      <h1 className="text-3xl mb-8">My Projects</h1>

      <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
        <Tabs.List className="flex gap-4 mb-6 border-b">
          <Tabs.Trigger
            value="active"
            className="px-4 py-2 border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600"
          >
            Active ({projects.active.length})
          </Tabs.Trigger>
          <Tabs.Trigger
            value="applied"
            className="px-4 py-2 border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600"
          >
            Applied ({projects.applied.length})
          </Tabs.Trigger>
          <Tabs.Trigger
            value="completed"
            className="px-4 py-2 border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600"
          >
            Completed ({projects.completed.length})
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="active">
          <div className="space-y-4">
            {projects.active.map((project) => (
              <Card key={project.id} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg mb-1">{project.title}</h3>
                    <p className="text-sm text-gray-600">{project.client}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl text-blue-600 mb-1">{project.budget}</p>
                    <Badge variant="primary">{project.status}</Badge>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Progress</span>
                    <span className="text-blue-600">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Next Milestone</p>
                    <p>{project.nextMilestone}</p>
                  </div>
                  <Link to={`/projects/${project.id}`}>
                    <Button size="sm">View details</Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Tabs.Content>

        <Tabs.Content value="applied">
          <div className="space-y-4">
            {projects.applied.map((project) => (
              <Card key={project.id} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg mb-1">{project.title}</h3>
                    <p className="text-sm text-gray-600">{project.client}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl text-blue-600 mb-1">{project.budget}</p>
                    <Badge variant="warning">{project.status}</Badge>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600">Applied on {project.appliedDate}</p>
                  <Link to={`/projects/${project.id}`}>
                    <Button variant="outline" size="sm">
                      View project
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Tabs.Content>

        <Tabs.Content value="completed">
          <div className="space-y-4">
            {projects.completed.map((project) => (
              <Card key={project.id} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg mb-1">{project.title}</h3>
                    <p className="text-sm text-gray-600">{project.client}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl text-green-600 mb-1">{project.budget}</p>
                    <Badge variant="success">{project.status}</Badge>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Completed on {project.completedDate}</p>
                    <p className="text-sm">Rating: {project.rating}★</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Add to portfolio
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
