import { useState } from 'react';
import { Navbar } from '../components/ui/Navbar';
import { CourseCard } from '../components/CourseCard';
import { Select } from '../components/ui/Select';
import { Card } from '../components/ui/Card';

export function CourseCatalog() {
  const [category, setCategory] = useState('all');
  const [level, setLevel] = useState('all');
  const [price, setPrice] = useState('all');

  const courses = [
    {
      id: '1',
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
      id: '2',
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
      id: '3',
      title: 'Python for Data Science',
      instructor: 'Emily Davis',
      rating: 4.7,
      studentCount: 15678,
      lessonCount: 42,
      price: 7999,
      level: 'Intermediate',
      thumbnail: 'https://images.unsplash.com/photo-1563630482997-07d8d7fbc9df?w=400',
    },
    {
      id: '4',
      title: 'UI/UX Design Fundamentals',
      instructor: 'Alex Rivera',
      rating: 4.8,
      studentCount: 9567,
      lessonCount: 30,
      price: 6399,
      level: 'Beginner',
      thumbnail: 'https://images.unsplash.com/photo-1672385277648-85eddc237a2b?w=400',
    },
    {
      id: '5',
      title: 'Machine Learning Masterclass',
      instructor: 'Dr. Jennifer Lee',
      rating: 4.9,
      studentCount: 11234,
      lessonCount: 52,
      price: 12099,
      level: 'Advanced',
      thumbnail: 'https://images.unsplash.com/photo-1569693799105-4eb645d89aea?w=400',
    },
    {
      id: '6',
      title: 'Node.js Backend Development',
      instructor: 'Tom Anderson',
      rating: 4.7,
      studentCount: 7890,
      lessonCount: 38,
      price: 8849,
      level: 'Intermediate',
      thumbnail: 'https://images.unsplash.com/photo-1675495666589-94cdafbcfcc8?w=400',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl mb-8 dark:text-gray-100">Course Catalog</h1>

        <div className="flex gap-8">
          <aside className="w-64 flex-shrink-0">
            <Card className="p-6 sticky top-8">
              <h2 className="text-lg mb-4 dark:text-gray-100">Filters</h2>
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
                    { value: 'business', label: 'Business' },
                  ]}
                />

                <Select
                  label="Level"
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  options={[
                    { value: 'all', label: 'All Levels' },
                    { value: 'beginner', label: 'Beginner' },
                    { value: 'intermediate', label: 'Intermediate' },
                    { value: 'advanced', label: 'Advanced' },
                  ]}
                />

                <Select
                  label="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  options={[
                    { value: 'all', label: 'All Prices' },
                    { value: 'free', label: 'Free' },
                    { value: 'paid', label: 'Paid' },
                  ]}
                />
              </div>
            </Card>
          </aside>

          <main className="flex-1">
            <div className="mb-4 text-gray-600 dark:text-gray-400">
              Showing {courses.length} courses
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
