import { Link } from 'react-router';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card } from '../../components/ui/Card';

export function ForgotPassword() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <Link to="/" className="text-3xl font-bold text-blue-600">
            MiraiCraft
          </Link>
          <h2 className="text-2xl mt-4 mb-2">Forgot your password?</h2>
          <p className="text-gray-600">
            Enter your email address and we'll send you instructions to reset your password.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Email"
            type="email"
            placeholder="your@email.com"
            required
          />

          <Button type="submit" className="w-full" size="lg">
            Send reset instructions
          </Button>
        </form>

        <div className="mt-6 text-center text-sm">
          <Link to="/login" className="text-blue-600 hover:underline">
            Back to login
          </Link>
        </div>
      </Card>
    </div>
  );
}
