import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { TextArea } from '../../components/ui/TextArea';
import { Badge } from '../../components/ui/Badge';
import { ShieldCheck, Upload } from 'lucide-react';

export function LearnerSettings() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1 className="text-3xl mb-8">Settings</h1>

      <div className="max-w-3xl space-y-6">
        <Card className="p-6">
          <h2 className="text-xl mb-6">Profile Information</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
              <Button variant="outline">
                <Upload className="w-4 h-4 mr-2" />
                Upload photo
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Input label="First name" defaultValue="John" />
              <Input label="Last name" defaultValue="Doe" />
            </div>

            <Input label="Email" type="email" defaultValue="john.doe@example.com" />

            <Input label="Headline" placeholder="Full Stack Developer" />

            <TextArea
              label="Bio"
              rows={4}
              placeholder="Tell us about yourself, your skills, and experience"
            />

            <div>
              <label className="block text-sm text-gray-700 mb-1">Skills</label>
              <div className="flex flex-wrap gap-2 mb-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">Python</Badge>
              </div>
              <Input placeholder="Add new skill" />
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit">Save changes</Button>
              <Button variant="outline">Cancel</Button>
            </div>
          </form>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl mb-4">Student Verification</h2>
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-purple-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3>Verified Student Status</h3>
                <Badge variant="verified-student">Not Verified</Badge>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Get verified as a student to unlock special project opportunities and build trust
                with clients. Submit your college ID or .edu email address.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <Input label="College/University name" placeholder="e.g., MIT" />
            <Input label="Student email (.edu)" type="email" placeholder="student@university.edu" />
            <div>
              <label className="block text-sm text-gray-700 mb-1">Upload student ID</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                <p className="text-xs text-gray-500 mt-1">PNG, JPG or PDF (max. 5MB)</p>
              </div>
            </div>
            <Button>Submit for verification</Button>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl mb-4">Account</h2>
          <div className="space-y-4">
            <Button variant="outline">Change password</Button>
            <div className="border-t pt-4">
              <p className="text-sm text-gray-600 mb-2">Delete your account</p>
              <Button variant="ghost" className="text-red-600 hover:bg-red-50">
                Delete account
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
