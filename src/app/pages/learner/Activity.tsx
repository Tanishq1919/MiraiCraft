import { Card } from '../../components/ui/Card';
import { Flame, Code, Send, MessageSquare } from 'lucide-react';

export function LearnerActivity() {
  const streaks = [
    {
      title: 'Days Coding',
      current: 45,
      best: 67,
      icon: Code,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
    {
      title: 'Days with Proposals',
      current: 12,
      best: 18,
      icon: Send,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      title: 'Days with Timely Replies',
      current: 28,
      best: 42,
      icon: MessageSquare,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
  ];

  const activities = [
    {
      date: 'April 29, 2026',
      items: [
        { type: 'course', text: 'Completed lesson "CSS Grid" in Web Development Bootcamp' },
        { type: 'project', text: 'Submitted milestone 2 for E-commerce Website project' },
      ],
    },
    {
      date: 'April 28, 2026',
      items: [
        { type: 'review', text: 'Received 5★ review from TechCorp Solutions' },
        { type: 'course', text: 'Started new course "Advanced React & TypeScript"' },
      ],
    },
    {
      date: 'April 27, 2026',
      items: [
        { type: 'project', text: 'Applied to Mobile App Dashboard project' },
        { type: 'course', text: 'Completed 3 lessons in Python for Data Science' },
      ],
    },
    {
      date: 'April 26, 2026',
      items: [
        { type: 'achievement', text: 'Reached 45-day coding streak!' },
        { type: 'project', text: 'Started working on Landing Page Development project' },
      ],
    },
  ];

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const weeks = Array(8).fill(null).map((_, weekIndex) =>
    weekDays.map((_, dayIndex) => ({
      active: Math.random() > 0.3,
      intensity: Math.floor(Math.random() * 4),
    }))
  );

  return (
    <div>
      <h1 className="text-3xl mb-8">Activity & Streaks</h1>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {streaks.map((streak) => {
          const Icon = streak.icon;
          return (
            <Card key={streak.title} className="p-6">
              <div className={`w-12 h-12 ${streak.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                <Icon className={`w-6 h-6 ${streak.color}`} />
              </div>
              <h3 className="mb-4">{streak.title}</h3>
              <div className="flex items-center gap-2 mb-2">
                <Flame className="w-5 h-5 text-orange-500" />
                <span className="text-3xl">{streak.current}</span>
                <span className="text-gray-600">days</span>
              </div>
              <p className="text-sm text-gray-600">Best: {streak.best} days</p>
            </Card>
          );
        })}
      </div>

      <Card className="p-6 mb-8">
        <h2 className="text-xl mb-4">Activity Calendar</h2>
        <div className="overflow-x-auto">
          <div className="inline-flex gap-1">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {week.map((day, dayIndex) => (
                  <div
                    key={dayIndex}
                    className={`w-4 h-4 rounded-sm ${
                      day.active
                        ? day.intensity === 0
                          ? 'bg-blue-200'
                          : day.intensity === 1
                          ? 'bg-blue-400'
                          : day.intensity === 2
                          ? 'bg-blue-600'
                          : 'bg-blue-800'
                        : 'bg-gray-200'
                    }`}
                    title={`${weekDays[dayIndex]} - ${day.active ? 'Active' : 'No activity'}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4 mt-4 text-sm text-gray-600">
          <span>Less</span>
          <div className="flex gap-1">
            <div className="w-4 h-4 bg-gray-200 rounded-sm"></div>
            <div className="w-4 h-4 bg-blue-200 rounded-sm"></div>
            <div className="w-4 h-4 bg-blue-400 rounded-sm"></div>
            <div className="w-4 h-4 bg-blue-600 rounded-sm"></div>
            <div className="w-4 h-4 bg-blue-800 rounded-sm"></div>
          </div>
          <span>More</span>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl mb-6">Recent Activity</h2>
        <div className="space-y-6">
          {activities.map((day, dayIndex) => (
            <div key={dayIndex}>
              <p className="text-sm text-gray-600 mb-3">{day.date}</p>
              <div className="space-y-2 ml-4 border-l-2 border-gray-200 pl-4">
                {day.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <p className="text-sm">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
