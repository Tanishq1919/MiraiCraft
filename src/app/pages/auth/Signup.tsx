import { Link } from 'react-router';
import { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { TextArea } from '../../components/ui/TextArea';
import { Card } from '../../components/ui/Card';
import * as Tabs from '@radix-ui/react-tabs';

export function Signup() {
  const [role, setRole] = useState('learner');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl p-8">
        <div className="text-center mb-8">
          <Link to="/" className="text-3xl font-bold text-blue-600">
            MiraiCraft
          </Link>
          <p className="text-gray-600 mt-2">Create your account and start your journey.</p>
        </div>

        <Tabs.Root value={role} onValueChange={setRole}>
          <Tabs.List className="flex gap-2 mb-6 bg-gray-100 p-1 rounded-lg">
            <Tabs.Trigger
              value="learner"
              className="flex-1 px-4 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all"
            >
              Learner
            </Tabs.Trigger>
            <Tabs.Trigger
              value="instructor"
              className="flex-1 px-4 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all"
            >
              Instructor
            </Tabs.Trigger>
            <Tabs.Trigger
              value="client"
              className="flex-1 px-4 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all"
            >
              Client
            </Tabs.Trigger>
          </Tabs.List>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Input label="First name" placeholder="John" required />
              <Input label="Last name" placeholder="Doe" required />
            </div>

            <Input label="Email" type="email" placeholder="your@email.com" required />
            <Input label="Password" type="password" placeholder="••••••••" required />
            <Input label="Confirm password" type="password" placeholder="••••••••" required />

            <Tabs.Content value="learner" className="space-y-4">
              <Input label="Skills (comma-separated)" placeholder="React, TypeScript, Python" />
              <TextArea label="Tell us about yourself" rows={3} placeholder="What are your learning goals?" />
            </Tabs.Content>

            <Tabs.Content value="instructor" className="space-y-4">
              <Input label="Expertise area" placeholder="Web Development" />
              <TextArea label="Bio" rows={3} placeholder="Share your teaching experience and qualifications" />
            </Tabs.Content>

            <Tabs.Content value="client" className="space-y-4">
              <Input label="Company name" placeholder="Your Company Inc." />
              <Input label="Website" placeholder="https://yourcompany.com" />
              <TextArea label="Company description" rows={3} placeholder="Tell us about your business" />
            </Tabs.Content>

            <div className="flex items-start gap-2">
              <input type="checkbox" required className="mt-1" />
              <label className="text-sm text-gray-600">
                I agree to the <span className="text-blue-600">Terms of Service</span> and{' '}
                <span className="text-blue-600">Privacy Policy</span>
              </label>
            </div>

            <Link to={`/${role}`}>
              <Button type="submit" className="w-full" size="lg">
                Create account
              </Button>
            </Link>
          </form>
        </Tabs.Root>

        <div className="mt-6 text-center text-sm">
          <span className="text-gray-600">Already have an account? </span>
          <Link to="/login" className="text-blue-600 hover:underline">
            Log in
          </Link>
        </div>
      </Card>
    </div>
  );
}
