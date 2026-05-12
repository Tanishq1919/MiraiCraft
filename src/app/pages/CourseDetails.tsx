import { Link } from 'react-router';
import { Navbar } from '../components/ui/Navbar';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Star, Users, Clock, PlayCircle } from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

export function CourseDetails() {
  const curriculum = [
    {
      section: 'Getting Started',
      lessons: [
        { title: 'Introduction to Web Development', duration: '10:24' },
        { title: 'Setting up your development environment', duration: '15:32' },
        { title: 'HTML Basics', duration: '22:15' },
      ],
    },
    {
      section: 'CSS Fundamentals',
      lessons: [
        { title: 'CSS Selectors and Properties', duration: '18:45' },
        { title: 'Flexbox Layout', duration: '25:30' },
        { title: 'CSS Grid', duration: '28:12' },
      ],
    },
    {
      section: 'JavaScript Essentials',
      lessons: [
        { title: 'Variables and Data Types', duration: '20:18' },
        { title: 'Functions and Scope', duration: '24:50' },
        { title: 'DOM Manipulation', duration: '30:22' },
      ],
    },
  ];

  const reviews = [
    {
      name: 'John Doe',
      rating: 5,
      date: 'March 2026',
      comment: 'Excellent course! Very comprehensive and easy to follow.',
    },
    {
      name: 'Jane Smith',
      rating: 4,
      date: 'February 2026',
      comment: 'Great content, learned a lot. Would recommend to beginners.',
    },
  ];

  const relatedCourses = [
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
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 mb-4">
            <Badge className="bg-white/20 text-white">Web Development</Badge>
            <Badge className="bg-white/20 text-white">Beginner</Badge>
          </div>
          <h1 className="text-4xl mb-4">Complete Web Development Bootcamp</h1>
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span>4.8 rating</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-5 h-5" />
              <span>12,453 students</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="p-6 mb-6">
              <h2 className="text-2xl mb-4">What you'll learn</h2>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Build responsive websites with HTML, CSS, and JavaScript</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Master modern CSS frameworks like Tailwind</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Learn React and component-based development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Deploy your projects to production</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Build a professional portfolio</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Get ready for your first developer job</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 mb-6">
              <h2 className="text-2xl mb-4">Course Curriculum</h2>
              <Accordion.Root type="single" collapsible className="space-y-2">
                {curriculum.map((section, index) => (
                  <Accordion.Item key={index} value={`section-${index}`} className="border rounded-lg">
                    <Accordion.Header>
                      <Accordion.Trigger className="flex items-center justify-between w-full p-4 hover:bg-gray-50 rounded-lg">
                        <span>{section.section}</span>
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-gray-600">{section.lessons.length} lessons</span>
                          <ChevronDown className="w-5 h-5 transition-transform data-[state=open]:rotate-180" />
                        </div>
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="px-4 pb-4">
                      <ul className="space-y-2">
                        {section.lessons.map((lesson, lessonIndex) => (
                          <li key={lessonIndex} className="flex items-center justify-between py-2">
                            <div className="flex items-center gap-2">
                              <PlayCircle className="w-4 h-4 text-gray-400" />
                              <span className="text-sm">{lesson.title}</span>
                            </div>
                            <span className="text-sm text-gray-600">{lesson.duration}</span>
                          </li>
                        ))}
                      </ul>
                    </Accordion.Content>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl mb-4">Student Reviews</h2>
              <div className="space-y-4">
                {reviews.map((review, index) => (
                  <div key={index} className="border-b pb-4 last:border-0">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                      <div>
                        <p>{review.name}</p>
                        <div className="flex items-center gap-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">{review.date}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div>
            <Card className="p-6 sticky top-8">
              <img
                src="https://images.unsplash.com/photo-1675495277087-10598bf7bcd1?w=400"
                alt="Course thumbnail"
                className="w-full rounded-lg mb-4"
              />
              <div className="text-3xl text-blue-600 mb-4">₹7,199</div>
              <Link to="/learner">
                <Button className="w-full mb-3" size="lg">
                  Enroll now
                </Button>
              </Link>
              <Button variant="outline" className="w-full mb-6">
                Add to wishlist
              </Button>

              <div className="border-t pt-4">
                <h3 className="mb-3">Instructor</h3>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div>
                    <p>Sarah Johnson</p>
                    <p className="text-sm text-gray-600">Web Developer</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mt-3">
                  Professional web developer with 10+ years of experience teaching thousands of students.
                </p>
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl mb-6">Related Courses</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {relatedCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden">
                <img src={course.thumbnail} alt={course.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <Badge variant="secondary">{course.level}</Badge>
                  <h3 className="text-lg mt-2 mb-1">{course.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{course.instructor}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{course.rating}</span>
                    </div>
                    <span className="text-lg text-blue-600">₹{course.price}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
