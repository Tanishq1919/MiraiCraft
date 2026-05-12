import { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Input } from '../../components/ui/Input';
import { Select } from '../../components/ui/Select';
import { MoreVertical } from 'lucide-react';

export function AdminUsers() {
  const [roleFilter, setRoleFilter] = useState('all');

  const users = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'Learner',
      verified: true,
      joined: 'Jan 15, 2026',
      status: 'Active',
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      email: 'sarah.j@example.com',
      role: 'Instructor',
      verified: true,
      joined: 'Dec 10, 2025',
      status: 'Active',
    },
    {
      id: '3',
      name: 'TechCorp Solutions',
      email: 'contact@techcorp.com',
      role: 'Client',
      verified: true,
      joined: 'Feb 5, 2026',
      status: 'Active',
    },
    {
      id: '4',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'Learner',
      verified: false,
      joined: 'March 20, 2026',
      status: 'Active',
    },
    {
      id: '5',
      name: 'Mike Johnson',
      email: 'mike.j@example.com',
      role: 'Learner',
      verified: true,
      joined: 'April 1, 2026',
      status: 'Suspended',
    },
  ];

  return (
    <div>
      <h1 className="text-3xl mb-8">User Management</h1>

      <Card className="p-6 mb-6">
        <div className="flex gap-4">
          <div className="flex-1">
            <Input placeholder="Search users by name or email..." />
          </div>
          <Select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            options={[
              { value: 'all', label: 'All Roles' },
              { value: 'learner', label: 'Learners' },
              { value: 'instructor', label: 'Instructors' },
              { value: 'client', label: 'Clients' },
            ]}
          />
        </div>
      </Card>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-3 px-6">Name</th>
                <th className="text-left py-3 px-6">Email</th>
                <th className="text-left py-3 px-6">Role</th>
                <th className="text-left py-3 px-6">Verified</th>
                <th className="text-left py-3 px-6">Joined</th>
                <th className="text-left py-3 px-6">Status</th>
                <th className="text-left py-3 px-6">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-t">
                  <td className="py-4 px-6">{user.name}</td>
                  <td className="py-4 px-6 text-sm text-gray-600">{user.email}</td>
                  <td className="py-4 px-6">
                    <Badge variant="secondary">{user.role}</Badge>
                  </td>
                  <td className="py-4 px-6">
                    {user.verified ? (
                      <Badge variant="success">Verified</Badge>
                    ) : (
                      <Badge variant="secondary">Not Verified</Badge>
                    )}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-600">{user.joined}</td>
                  <td className="py-4 px-6">
                    <Badge
                      variant={user.status === 'Active' ? 'success' : 'warning'}
                    >
                      {user.status}
                    </Badge>
                  </td>
                  <td className="py-4 px-6">
                    <button className="p-2 hover:bg-gray-100 rounded">
                      <MoreVertical className="w-5 h-5" />
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
