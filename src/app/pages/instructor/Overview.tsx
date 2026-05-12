import { Card } from '../../components/ui/Card';
import { Users, Star, IndianRupee, BookOpen } from 'lucide-react';

export function InstructorOverview() {
  const stats = [
    { label: 'Total Students', value: '8,453', icon: Users, color: 'text-blue-600', bgColor: 'bg-blue-100' },
    { label: 'Average Rating', value: '4.8', icon: Star, color: 'text-yellow-600', bgColor: 'bg-yellow-100' },
    { label: 'Total Earnings', value: '₹33,74,400', icon: IndianRupee, color: 'text-green-600', bgColor: 'bg-green-100' },
    { label: 'Active Courses', value: '6', icon: BookOpen, color: 'text-purple-600', bgColor: 'bg-purple-100' },
  ];

  const topCourses = [
    { title: 'Complete Web Development Bootcamp', students: 2453, rating: 4.8, revenue: '₹12,18,720' },
    { title: 'Advanced React & TypeScript', students: 1834, rating: 4.9, revenue: '₹10,31,200' },
    { title: 'JavaScript Fundamentals', students: 1567, rating: 4.7, revenue: '₹7,13,600' },
  ];

  return (
    <div>
      <h1 className="text-3xl mb-8">Instructor Dashboard</h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="p-6">
              <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                <Icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
              <p className="text-2xl">{stat.value}</p>
            </Card>
          );
        })}
      </div>

      <Card className="p-6">
        <h2 className="text-xl mb-6">Top Performing Courses</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Course</th>
                <th className="text-left py-3 px-4">Students</th>
                <th className="text-left py-3 px-4">Rating</th>
                <th className="text-left py-3 px-4">Revenue</th>
              </tr>
            </thead>
            <tbody>
              {topCourses.map((course, index) => (
                <tr key={index} className="border-b last:border-0">
                  <td className="py-3 px-4">{course.title}</td>
                  <td className="py-3 px-4">{course.students}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-green-600">{course.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
