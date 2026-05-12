import { Card } from '../../components/ui/Card';
import { Users, BookOpen, Briefcase, IndianRupee } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function AdminOverview() {
  const stats = [
    { label: 'Total Users', value: '24,583', icon: Users, color: 'text-blue-600', bgColor: 'bg-blue-100' },
    { label: 'Active Courses', value: '1,247', icon: BookOpen, color: 'text-purple-600', bgColor: 'bg-purple-100' },
    { label: 'Active Projects', value: '892', icon: Briefcase, color: 'text-green-600', bgColor: 'bg-green-100' },
    { label: 'Platform Revenue', value: '₹3.42Cr', icon: IndianRupee, color: 'text-yellow-600', bgColor: 'bg-yellow-100' },
  ];

  const userGrowthData = [
    { month: 'Jan', users: 18500 },
    { month: 'Feb', users: 19800 },
    { month: 'Mar', users: 21200 },
    { month: 'Apr', users: 22600 },
    { month: 'May', users: 24583 },
  ];

  const revenueData = [
    { month: 'Jan', revenue: 228 },
    { month: 'Feb', revenue: 256 },
    { month: 'Mar', revenue: 292 },
    { month: 'Apr', revenue: 314 },
    { month: 'May', revenue: 342 },
  ];

  return (
    <div>
      <h1 className="text-3xl mb-8">Admin Dashboard</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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

      <div className="grid lg:grid-cols-2 gap-8">
        <Card className="p-6">
          <h2 className="text-xl mb-6">User Growth</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={userGrowthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl mb-6">Revenue Growth (₹ Lakhs)</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
}
