import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { formatCurrency } from '../../lib/utils';
import { MoreVertical } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  status: string;
  enrollments: number;
  rating: number;
  revenue: string;
}

export function InstructorMyCourses() {
  const defaultCourses: Course[] = [
    {
      id: '1',
      title: 'Complete Web Development Bootcamp',
      status: 'Published',
      enrollments: 2453,
      rating: 4.8,
      revenue: formatCurrency(1218720),
    },
    {
      id: '2',
      title: 'Advanced React & TypeScript',
      status: 'Published',
      enrollments: 1834,
      rating: 4.9,
      revenue: formatCurrency(1031200),
    },
    {
      id: '3',
      title: 'Node.js Backend Development',
      status: 'Draft',
      enrollments: 0,
      rating: 0,
      revenue: formatCurrency(0),
    },
  ];

  const [courses, setCourses] = useState<Course[]>(defaultCourses);

  useEffect(() => {
    const newCourses: Course[] = JSON.parse(localStorage.getItem('instructorCourses') || '[]');
    if (newCourses.length > 0) {
      // Ensure titles fall back to 'Untitled Course' if empty
      const sanitized = newCourses.map((c) => ({
        ...c,
        title: c.title && c.title.trim() ? c.title.trim() : 'Untitled Course',
      }));
      setCourses([...defaultCourses, ...sanitized]);
      localStorage.removeItem('instructorCourses');
    }
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl dark:text-gray-100">My Courses</h1>
        <Link to="/instructor/create-course">
          <Button>Create new course</Button>
        </Link>
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="text-left py-3 px-6 dark:text-gray-300">Course</th>
                <th className="text-left py-3 px-6 dark:text-gray-300">Status</th>
                <th className="text-left py-3 px-6 dark:text-gray-300">Enrollments</th>
                <th className="text-left py-3 px-6 dark:text-gray-300">Rating</th>
                <th className="text-left py-3 px-6 dark:text-gray-300">Revenue</th>
                <th className="text-left py-3 px-6 dark:text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.id} className="border-t dark:border-gray-700">
                  <td className="py-4 px-6 dark:text-gray-200">
                    {course.title && course.title.trim() ? course.title.trim() : 'Untitled Course'}
                  </td>
                  <td className="py-4 px-6">
                    <Badge variant={course.status === 'Published' ? 'success' : 'secondary'}>
                      {course.status}
                    </Badge>
                  </td>
                  <td className="py-4 px-6 dark:text-gray-300">{course.enrollments}</td>
                  <td className="py-4 px-6 dark:text-gray-300">{course.rating > 0 ? course.rating : '-'}</td>
                  <td className="py-4 px-6 text-green-600 dark:text-green-400">{course.revenue}</td>
                  <td className="py-4 px-6">
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                      <MoreVertical className="w-5 h-5 dark:text-gray-400" />
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

