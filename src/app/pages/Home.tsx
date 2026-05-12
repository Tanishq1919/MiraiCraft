import { Link } from 'react-router';
import { Navbar } from '../components/ui/Navbar';
import { Button } from '../components/ui/Button';
import { CourseCard } from '../components/CourseCard';
import { ProjectCard } from '../components/ProjectCard';
import { Card } from '../components/ui/Card';
import { Code, Briefcase, FileText, ShieldCheck, Zap } from 'lucide-react';

export function Home() {
  const features = [
    {
      icon: Code,
      title: 'Courses & Learning Paths',
      description: 'Comprehensive courses to build your skills from beginner to expert',
    },
    {
      icon: Briefcase,
      title: 'Project Marketplace',
      description: 'Find real-world projects from clients to apply your skills',
    },
    {
      icon: FileText,
      title: 'Simple Contracts',
      description: 'Built-in NDA and work-for-hire agreements for every project',
    },
    {
      icon: ShieldCheck,
      title: 'Verified Profiles',
      description: 'Build trust with verified student, instructor, and business badges',
    },
    {
      icon: Zap,
      title: 'Work Activity Streaks',
      description: 'Track your learning and working consistency with daily streaks',
    },
  ];

  const categories = [
    { name: 'Web Development', color: 'bg-blue-500' },
    { name: 'Data Science', color: 'bg-purple-500' },
    { name: 'Design', color: 'bg-pink-500' },
    { name: 'Business', color: 'bg-green-500' },
  ];

  const popularCourses = [
    {
      id: '1',
      title: 'HTML & CSS for Absolute Beginners',
      instructor: 'Priya Sharma',
      rating: 4.6,
      studentCount: 9320,
      lessonCount: 22,
      price: 999,
      level: 'Beginner',
      thumbnail: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400',
    },
    {
      id: '2',
      title: 'JavaScript Fundamentals',
      instructor: 'Rahul Verma',
      rating: 4.7,
      studentCount: 7840,
      lessonCount: 28,
      price: 1499,
      level: 'Beginner',
      thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400',
    },
    {
      id: '3',
      title: 'Git & GitHub Essentials',
      instructor: 'Ankit Patel',
      rating: 4.8,
      studentCount: 6120,
      lessonCount: 18,
      price: 1999,
      level: 'Beginner',
      thumbnail: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400',
    },
    {
      id: '4',
      title: 'Complete Web Development Bootcamp',
      instructor: 'Sarah Johnson',
      rating: 4.8,
      studentCount: 12453,
      lessonCount: 48,
      price: 7199,
      level: 'Beginner',
      thumbnail: 'https://images.unsplash.com/photo-1675495277087-10598bf7bcd1?w=400',
    },
    {
      id: '5',
      title: 'Advanced React & TypeScript',
      instructor: 'Michael Chen',
      rating: 4.9,
      studentCount: 8234,
      lessonCount: 36,
      price: 10499,
      level: 'Advanced',
      thumbnail: 'https://images.unsplash.com/photo-1517512006864-7edc3b933137?w=400',
    },
    {
      id: '6',
      title: 'Python for Data Science',
      instructor: 'Emily Davis',
      rating: 4.7,
      studentCount: 15678,
      lessonCount: 42,
      price: 7999,
      level: 'Intermediate',
      thumbnail: 'https://images.unsplash.com/photo-1563630482997-07d8d7fbc9df?w=400',
    },
  ];

  const featuredProjects = [
    {
      id: '1',
      title: 'E-commerce Website Redesign',
      description: 'Looking for a developer to redesign our e-commerce platform with modern UI/UX',
      budget: '₹1,60,000-₹2,40,000',
      duration: '4-6 weeks',
      skills: ['React', 'TypeScript', 'Tailwind CSS'],
      clientRating: 4.9,
    },
    {
      id: '2',
      title: 'Mobile App Data Analytics Dashboard',
      description: 'Need a data analyst to create interactive dashboards for our mobile app metrics',
      budget: '₹1,20,000-₹2,00,000',
      duration: '3-4 weeks',
      skills: ['Python', 'SQL', 'Tableau'],
      clientRating: 4.8,
    },
  ];

  const testimonials = [
    {
      name: 'Alex Martinez',
      role: 'Software Developer',
      content: 'MiraiCraft helped me land my first freelance project while I was still learning. The courses gave me the skills, and the projects gave me the experience.',
    },
    {
      name: 'Lisa Wang',
      role: 'Business Owner',
      content: 'Finding qualified talent has never been easier. The verified student badges give me confidence that I\'m hiring skilled professionals.',
    },
    {
      name: 'James Brown',
      role: 'Instructor',
      content: 'Teaching on MiraiCraft has been incredibly rewarding. The platform makes it easy to create courses and reach thousands of learners.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />

      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl mb-4 md:mb-6">MiraiCraft – Craft your future with courses and real‑world projects</h1>
            <p className="text-base md:text-xl mb-6 md:mb-8 text-blue-100">Learn through courses, prove yourself with real client projects, and build your professional portfolio.</p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <Link to="/courses">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Browse courses
                </Button>
              </Link>
              <Link to="/projects">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Browse projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl dark:text-gray-100 text-center mb-12">Why MiraiCraft?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl dark:text-gray-100 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl dark:text-gray-100 mb-8">Browse by Category</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.name} to="/courses">
                <div className={`${category.color} rounded-lg p-8 text-white hover:shadow-lg transition-shadow cursor-pointer`}>
                  <h3 className="text-xl">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl dark:text-gray-100">Popular Courses</h2>
            <Link to="/courses">
              <Button variant="ghost">View all</Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl dark:text-gray-100">Featured Projects</h2>
            <Link to="/projects">
              <Button variant="ghost">View all</Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl dark:text-gray-100 text-center mb-12">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">"{testimonial.content}"</p>
                <div>
                  <p className="dark:text-gray-100">{testimonial.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl mb-4">MiraiCraft</h3>
              <p className="text-gray-400 dark:text-gray-500">Craft your future with courses and projects.</p>
            </div>
            <div>
              <h4 className="mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400 dark:text-gray-500">
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/projects">Projects</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 dark:text-gray-500">
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 dark:text-gray-500">
                <li>Privacy</li>
                <li>Terms</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 MiraiCraft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
