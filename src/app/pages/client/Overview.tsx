import { Card } from '../../components/ui/Card';
import { Briefcase, CheckCircle, IndianRupee, Star } from 'lucide-react';

export function ClientOverview() {
  const stats = [
    { label: 'Active Projects', value: '4', icon: Briefcase, color: 'text-blue-600', bgColor: 'bg-blue-100' },
    { label: 'Completed Projects', value: '12', icon: CheckCircle, color: 'text-green-600', bgColor: 'bg-green-100' },
    { label: 'Total Spent', value: '₹22,76,000', icon: IndianRupee, color: 'text-purple-600', bgColor: 'bg-purple-100' },
    { label: 'Average Rating', value: '4.9', icon: Star, color: 'text-yellow-600', bgColor: 'bg-yellow-100' },
  ];

  const activeProjects = [
    { title: 'E-commerce Website Redesign', freelancer: 'John Doe', progress: 60, applicants: 12 },
    { title: 'Mobile App Dashboard', freelancer: 'Jane Smith', progress: 35, applicants: 8 },
    { title: 'Brand Identity Design', freelancer: '-', progress: 0, applicants: 15 },
  ];

  return (
    <div>
      <h1 className="text-3xl mb-8">Client Dashboard</h1>

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
        <h2 className="text-xl mb-6">Active Projects</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b">
              <tr>
                <th className="text-left py-3 px-4">Project</th>
                <th className="text-left py-3 px-4">Freelancer</th>
                <th className="text-left py-3 px-4">Progress</th>
                <th className="text-left py-3 px-4">Applicants</th>
              </tr>
            </thead>
            <tbody>
              {activeProjects.map((project, index) => (
                <tr key={index} className="border-b last:border-0">
                  <td className="py-3 px-4">{project.title}</td>
                  <td className="py-3 px-4">{project.freelancer}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[100px]">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">{project.progress}%</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">{project.applicants}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
