import { Link } from 'react-router';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { BookOpen, Briefcase, Clock, IndianRupee } from 'lucide-react';

export function LearnerOverview() {
  const stats = [
    { label: 'Courses in Progress', value: '3', icon: BookOpen, color: 'text-blue-600', bgColor: 'bg-blue-100' },
    { label: 'Active Projects', value: '2', icon: Briefcase, color: 'text-purple-600', bgColor: 'bg-purple-100' },
    { label: 'Total Hours Learned', value: '127', icon: Clock, color: 'text-green-600', bgColor: 'bg-green-100' },
    { label: 'Total Earnings', value: '₹3,40,000', icon: IndianRupee, color: 'text-yellow-600', bgColor: 'bg-yellow-100' },
  ];

  const coursesInProgress = [
    {
      id: '1',
      title: 'Complete Web Development Bootcamp',
      progress: 65,
      thumbnail: 'https://images.unsplash.com/photo-1675495277087-10598bf7bcd1?w=400',
    },
    {
      id: '2',
      title: 'Advanced React & TypeScript',
      progress: 42,
      thumbnail: 'https://images.unsplash.com/photo-1517512006864-7edc3b933137?w=400',
    },
    {
      id: '3',
      title: 'Python for Data Science',
      progress: 18,
      thumbnail: 'https://images.unsplash.com/photo-1563630482997-07d8d7fbc9df?w=400',
    },
  ];

  const recommendedProjects = [
    {
      id: '1',
      title: 'React Dashboard Development',
      budget: '₹1,20,000',
      skills: ['React', 'TypeScript'],
    },
    {
      id: '2',
      title: 'Landing Page Design & Development',
      budget: '₹64,000',
      skills: ['HTML', 'CSS', 'JavaScript'],
    },
  ];

  return (
    <div>
      <h1 className="text-3xl mb-8">Welcome back!</h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
              <p className="text-2xl">{stat.value}</p>
            </Card>
          );
        })}
      </div>

      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl">Continue Learning</h2>
          <Link to="/learner/courses">
            <Button variant="ghost">View all</Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {coursesInProgress.map((course) => (
            <Link key={course.id} to={`/learner/courses/${course.id}/player`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <img src={course.thumbnail} alt={course.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="mb-3">{course.title}</h3>
                  <div className="mb-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Progress</span>
                      <span className="text-blue-600">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <Button variant="primary" size="sm" className="w-full mt-3">
                    Continue
                  </Button>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl">Recommended Projects</h2>
          <Link to="/projects">
            <Button variant="ghost">Browse all</Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {recommendedProjects.map((project) => (
            <Card key={project.id} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="text-lg mb-2">{project.title}</h3>
              <p className="text-2xl text-blue-600 mb-3">{project.budget}</p>
              <div className="flex gap-2 mb-4">
                {project.skills.map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded">
                    {skill}
                  </span>
                ))}
              </div>
              <Link to={`/projects/${project.id}`}>
                <Button variant="outline" size="sm" className="w-full">
                  View details
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
