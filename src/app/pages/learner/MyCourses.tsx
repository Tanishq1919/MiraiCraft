import { Link } from 'react-router';
import { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import * as Tabs from '@radix-ui/react-tabs';

export function LearnerMyCourses() {
  const [activeTab, setActiveTab] = useState('in-progress');

  const courses = {
    'in-progress': [
      {
        id: '1',
        title: 'Complete Web Development Bootcamp',
        instructor: 'Sarah Johnson',
        progress: 65,
        thumbnail: 'https://images.unsplash.com/photo-1675495277087-10598bf7bcd1?w=200',
      },
      {
        id: '2',
        title: 'Advanced React & TypeScript',
        instructor: 'Michael Chen',
        progress: 42,
        thumbnail: 'https://images.unsplash.com/photo-1517512006864-7edc3b933137?w=200',
      },
      {
        id: '3',
        title: 'Python for Data Science',
        instructor: 'Emily Davis',
        progress: 18,
        thumbnail: 'https://images.unsplash.com/photo-1563630482997-07d8d7fbc9df?w=200',
      },
    ],
    completed: [
      {
        id: '4',
        title: 'HTML & CSS Fundamentals',
        instructor: 'Tom Anderson',
        progress: 100,
        thumbnail: 'https://images.unsplash.com/photo-1672385277648-85eddc237a2b?w=200',
      },
    ],
    saved: [
      {
        id: '5',
        title: 'Machine Learning Masterclass',
        instructor: 'Dr. Jennifer Lee',
        progress: 0,
        thumbnail: 'https://images.unsplash.com/photo-1569693799105-4eb645d89aea?w=200',
      },
    ],
  };

  return (
    <div>
      <h1 className="text-3xl mb-8">My Courses</h1>

      <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
        <Tabs.List className="flex gap-4 mb-6 border-b">
          <Tabs.Trigger
            value="in-progress"
            className="px-4 py-2 border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600"
          >
            In Progress ({courses['in-progress'].length})
          </Tabs.Trigger>
          <Tabs.Trigger
            value="completed"
            className="px-4 py-2 border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600"
          >
            Completed ({courses.completed.length})
          </Tabs.Trigger>
          <Tabs.Trigger
            value="saved"
            className="px-4 py-2 border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600"
          >
            Saved ({courses.saved.length})
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="in-progress">
          <div className="space-y-4">
            {courses['in-progress'].map((course) => (
              <Card key={course.id} className="p-6">
                <div className="flex gap-4">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-32 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg mb-1">{course.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{course.instructor}</p>
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
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
                      <Link to={`/learner/courses/${course.id}/player`}>
                        <Button size="sm">Continue</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Tabs.Content>

        <Tabs.Content value="completed">
          <div className="space-y-4">
            {courses.completed.map((course) => (
              <Card key={course.id} className="p-6">
                <div className="flex gap-4">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-32 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg mb-1">{course.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{course.instructor}</p>
                    <div className="flex items-center gap-4">
                      <span className="text-green-600 flex items-center gap-1">
                        <span>✓</span>
                        <span>Completed</span>
                      </span>
                      <Link to={`/learner/courses/${course.id}/player`}>
                        <Button variant="outline" size="sm">
                          Review
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Tabs.Content>

        <Tabs.Content value="saved">
          <div className="space-y-4">
            {courses.saved.map((course) => (
              <Card key={course.id} className="p-6">
                <div className="flex gap-4">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-32 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg mb-1">{course.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{course.instructor}</p>
                    <div className="flex items-center gap-2">
                      <Link to={`/courses/${course.id}`}>
                        <Button size="sm">Enroll now</Button>
                      </Link>
                      <Button variant="outline" size="sm">
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
