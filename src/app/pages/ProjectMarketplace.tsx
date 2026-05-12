import { useState } from 'react';
import { Navbar } from '../components/ui/Navbar';
import { ProjectCard } from '../components/ProjectCard';
import { Select } from '../components/ui/Select';
import { Input } from '../components/ui/Input';
import { Card } from '../components/ui/Card';

export function ProjectMarketplace() {
  const [category, setCategory] = useState('all');
  const [difficulty, setDifficulty] = useState('all');

  const projects = [
    {
      id: '1',
      title: 'E-commerce Website Redesign',
      description: 'Looking for a developer to redesign our e-commerce platform with modern UI/UX and improved checkout flow',
      budget: '₹1,60,000-₹2,40,000',
      duration: '4-6 weeks',
      skills: ['React', 'TypeScript', 'Tailwind CSS'],
      clientRating: 4.9,
    },
    {
      id: '2',
      title: 'Mobile App Data Analytics Dashboard',
      description: 'Need a data analyst to create interactive dashboards for our mobile app metrics using Python and SQL',
      budget: '₹1,20,000-₹2,00,000',
      duration: '3-4 weeks',
      skills: ['Python', 'SQL', 'Tableau'],
      clientRating: 4.8,
    },
    {
      id: '3',
      title: 'Brand Identity Design Package',
      description: 'Seeking a designer to create a complete brand identity including logo, color palette, and style guide',
      budget: '₹80,000-₹1,20,000',
      duration: '2-3 weeks',
      skills: ['Figma', 'Adobe Illustrator', 'Branding'],
      clientRating: 4.7,
    },
    {
      id: '4',
      title: 'API Development for SaaS Platform',
      description: 'Building RESTful APIs for our new SaaS product with authentication and rate limiting',
      budget: '₹2,40,000-₹3,20,000',
      duration: '6-8 weeks',
      skills: ['Node.js', 'Express', 'MongoDB'],
      clientRating: 5.0,
    },
    {
      id: '5',
      title: 'Machine Learning Model for Image Classification',
      description: 'Develop a custom image classification model for our product catalog',
      budget: '₹2,00,000-₹2,80,000',
      duration: '5-6 weeks',
      skills: ['Python', 'TensorFlow', 'Computer Vision'],
      clientRating: 4.9,
    },
    {
      id: '6',
      title: 'WordPress Site Migration and Optimization',
      description: 'Migrate existing WordPress site to new host and optimize for speed and SEO',
      budget: '₹64,000-₹96,000',
      duration: '1-2 weeks',
      skills: ['WordPress', 'PHP', 'SEO'],
      clientRating: 4.6,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl mb-8">Project Marketplace</h1>

        <div className="flex gap-8">
          <aside className="w-64 flex-shrink-0">
            <Card className="p-6 sticky top-8">
              <h2 className="text-lg mb-4">Filters</h2>
              <div className="space-y-4">
                <Select
                  label="Category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  options={[
                    { value: 'all', label: 'All Categories' },
                    { value: 'web-dev', label: 'Web Development' },
                    { value: 'data', label: 'Data Science' },
                    { value: 'design', label: 'Design' },
                    { value: 'mobile', label: 'Mobile Development' },
                  ]}
                />

                <div>
                  <label className="block text-sm text-gray-700 mb-1">Budget Range</label>
                  <div className="flex gap-2">
                    <Input type="number" placeholder="Min" className="text-sm" />
                    <Input type="number" placeholder="Max" className="text-sm" />
                  </div>
                </div>

                <Select
                  label="Duration"
                  options={[
                    { value: 'all', label: 'Any Duration' },
                    { value: 'short', label: '< 2 weeks' },
                    { value: 'medium', label: '2-6 weeks' },
                    { value: 'long', label: '> 6 weeks' },
                  ]}
                />

                <Select
                  label="Difficulty"
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                  options={[
                    { value: 'all', label: 'All Levels' },
                    { value: 'beginner', label: 'Beginner Friendly' },
                    { value: 'intermediate', label: 'Intermediate' },
                    { value: 'advanced', label: 'Advanced' },
                  ]}
                />

                <Select
                  label="Location"
                  options={[
                    { value: 'all', label: 'All Locations' },
                    { value: 'remote', label: 'Remote' },
                    { value: 'onsite', label: 'On-site' },
                  ]}
                />
              </div>
            </Card>
          </aside>

          <main className="flex-1">
            <div className="mb-4 text-gray-600">
              Showing {projects.length} projects
            </div>
            <div className="space-y-4">
              {projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
