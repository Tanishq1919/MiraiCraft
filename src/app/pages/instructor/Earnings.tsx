import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { IndianRupee, TrendingUp, Calendar } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function InstructorEarnings() {
  const stats = [
    { label: 'Total Earnings', value: '₹33,74,400', icon: IndianRupee },
    { label: 'This Month', value: '₹2,76,000', icon: Calendar },
    { label: 'Growth', value: '+12.5%', icon: TrendingUp },
  ];

  const chartData = [
    { month: 'Jan', earnings: 192000 },
    { month: 'Feb', earnings: 224000 },
    { month: 'Mar', earnings: 256000 },
    { month: 'Apr', earnings: 232000 },
    { month: 'May', earnings: 276000 },
  ];

  const payouts = [
    { date: 'April 15, 2026', amount: '₹2,76,000', status: 'Completed', method: 'Bank Transfer' },
    { date: 'March 15, 2026', amount: '₹2,56,000', status: 'Completed', method: 'Bank Transfer' },
    { date: 'February 15, 2026', amount: '₹2,32,000', status: 'Completed', method: 'Bank Transfer' },
  ];

  return (
    <div>
      <h1 className="text-2xl md:text-3xl mb-6 md:mb-8">Earnings</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="p-4 md:p-6">
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <Icon className="w-6 h-6 text-green-600" />
              </div>
              <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
              <p className="text-xl md:text-2xl">{stat.value}</p>
            </Card>
          );
        })}
      </div>

      <Card className="p-4 md:p-6 mb-6 md:mb-8">
        <h2 className="text-lg md:text-xl mb-4 md:mb-6">Earnings Overview</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip formatter={(v: number) => `₹${v.toLocaleString('en-IN')}`} />
            <Line type="monotone" dataKey="earnings" stroke="#3b82f6" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      <Card className="p-4 md:p-6">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <h2 className="text-lg md:text-xl">Payout History</h2>
          <Button variant="outline" size="sm">Request payout</Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[400px]">
            <thead className="border-b">
              <tr>
                <th className="text-left py-3 px-3 text-sm">Date</th>
                <th className="text-left py-3 px-3 text-sm">Amount</th>
                <th className="text-left py-3 px-3 text-sm">Method</th>
                <th className="text-left py-3 px-3 text-sm">Status</th>
              </tr>
            </thead>
            <tbody>
              {payouts.map((payout, index) => (
                <tr key={index} className="border-b last:border-0">
                  <td className="py-3 px-3 text-sm">{payout.date}</td>
                  <td className="py-3 px-3 text-sm text-green-600">{payout.amount}</td>
                  <td className="py-3 px-3 text-sm">{payout.method}</td>
                  <td className="py-3 px-3">
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                      {payout.status}
                    </span>
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

  const chartData = [
    { month: 'Jan', earnings: 192000 },
    { month: 'Feb', earnings: 224000 },
    { month: 'Mar', earnings: 256000 },
    { month: 'Apr', earnings: 232000 },
    { month: 'May', earnings: 276000 },
  ];



