import { Link } from 'react-router';
import { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card } from '../../components/ui/Card';

export function Login() {
  const [role, setRole] = useState('learner');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const roles = [
    { value: 'learner', label: 'Learner' },
    { value: 'instructor', label: 'Instructor' },
    { value: 'client', label: 'Client' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <Link to="/" className="text-3xl font-bold text-blue-600 dark:text-blue-400">
            MiraiCraft
          </Link>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Welcome back! Please login to your account.</p>
        </div>

        {/* Role selector tabs */}
        <div className="flex gap-2 mb-6 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
          {roles.map((r) => (
            <button
              key={r.value}
              type="button"
              onClick={() => setRole(r.value)}
              className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                role === r.value
                  ? 'bg-white dark:bg-gray-700 shadow-sm text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Email"
            type="email"
            placeholder="your@email.com"
            required
          />

          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            required
          />

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 dark:text-gray-300">
              <input type="checkbox" className="rounded" />
              <span>Remember me</span>
            </label>
            <Link to="/forgot-password" className="text-blue-600 dark:text-blue-400 hover:underline">
              Forgot password?
            </Link>
          </div>

          <Link to={`/${role}`}>
            <Button type="submit" className="w-full" size="lg">
              Log in as {roles.find((r) => r.value === role)?.label}
            </Button>
          </Link>
        </form>

        <div className="mt-6 text-center text-sm">
          <span className="text-gray-600 dark:text-gray-400">Don't have an account? </span>
          <Link to="/signup" className="text-blue-600 dark:text-blue-400 hover:underline">
            Sign up
          </Link>
        </div>
      </Card>
    </div>
  );
}
