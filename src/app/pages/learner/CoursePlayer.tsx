import { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { PlayCircle, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import * as Tabs from '@radix-ui/react-tabs';

export function LearnerCoursePlayer() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  const lessons = [
    {
      section: 'Getting Started',
      items: [
        { title: 'Introduction to Web Development', duration: '10:24', completed: true },
        { title: 'Setting up your environment', duration: '15:32', completed: true },
        { title: 'HTML Basics', duration: '22:15', completed: false },
      ],
    },
    {
      section: 'CSS Fundamentals',
      items: [
        { title: 'CSS Selectors', duration: '18:45', completed: false },
        { title: 'Flexbox Layout', duration: '25:30', completed: false },
        { title: 'CSS Grid', duration: '28:12', completed: false },
      ],
    },
  ];

  const resources = [
    { name: 'Lesson slides.pdf', size: '2.4 MB' },
    { name: 'Starter code.zip', size: '1.1 MB' },
    { name: 'Cheat sheet.pdf', size: '850 KB' },
  ];

  return (
    <div className="flex gap-8 -m-8 h-[calc(100vh-64px)]">
      <div className="flex-1 flex flex-col">
        <div className="bg-black flex-1 flex items-center justify-center">
          <div className="text-white text-center">
            <PlayCircle className="w-24 h-24 mx-auto mb-4 opacity-50" />
            <p className="text-lg opacity-75">Video Player Placeholder</p>
            <p className="text-sm opacity-50 mt-2">Introduction to Web Development - 10:24</p>
          </div>
        </div>

        <div className="bg-white border-t p-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-2xl mb-1">Introduction to Web Development</h1>
                <p className="text-gray-600">Section 1: Getting Started</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Previous
                </Button>
                <Button size="sm">
                  Next
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>

            <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
              <Tabs.List className="flex gap-4 mb-4 border-b">
                <Tabs.Trigger
                  value="overview"
                  className="px-4 py-2 border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600"
                >
                  Overview
                </Tabs.Trigger>
                <Tabs.Trigger
                  value="resources"
                  className="px-4 py-2 border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600"
                >
                  Resources
                </Tabs.Trigger>
                <Tabs.Trigger
                  value="qa"
                  className="px-4 py-2 border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600"
                >
                  Q&A
                </Tabs.Trigger>
              </Tabs.List>

              <Tabs.Content value="overview">
                <p className="text-gray-700">
                  In this lesson, you'll learn the fundamentals of web development, including the key technologies
                  (HTML, CSS, JavaScript) and how they work together to create modern web applications.
                </p>
              </Tabs.Content>

              <Tabs.Content value="resources">
                <div className="space-y-2">
                  {resources.map((resource) => (
                    <div key={resource.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p>{resource.name}</p>
                        <p className="text-sm text-gray-600">{resource.size}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </Tabs.Content>

              <Tabs.Content value="qa">
                <p className="text-gray-600">No questions yet. Be the first to ask!</p>
                <Button className="mt-4">Ask a question</Button>
              </Tabs.Content>
            </Tabs.Root>
          </div>
        </div>
      </div>

      <aside className="w-96 bg-white border-l overflow-y-auto">
        <div className="p-6">
          <h2 className="text-xl mb-4">Course Content</h2>
          <div className="space-y-4">
            {lessons.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h3 className="mb-2 text-gray-900">{section.section}</h3>
                <div className="space-y-1">
                  {section.items.map((lesson, lessonIndex) => (
                    <button
                      key={lessonIndex}
                      className="w-full text-left p-3 rounded-lg hover:bg-gray-50 flex items-start gap-3"
                    >
                      {lesson.completed ? (
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      ) : (
                        <PlayCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm mb-1">{lesson.title}</p>
                        <p className="text-xs text-gray-600">{lesson.duration}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
