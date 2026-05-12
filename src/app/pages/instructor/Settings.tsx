import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { TextArea } from '../../components/ui/TextArea';
import { Badge } from '../../components/ui/Badge';
import { ShieldCheck, Upload } from 'lucide-react';

export function InstructorSettings() {
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
              <Input label="First name" defaultValue="Sarah" />
              <Input label="Last name" defaultValue="Johnson" />
            </div>

            <Input label="Email" type="email" defaultValue="sarah.johnson@example.com" />

            <Input label="Expertise area" defaultValue="Web Development" />

            <TextArea
              label="Bio"
              rows={4}
              defaultValue="Professional web developer with 10+ years of experience teaching thousands of students."
            />

            <div className="flex gap-3 pt-4">
              <Button type="submit">Save changes</Button>
              <Button variant="outline">Cancel</Button>
            </div>
          </form>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl mb-4">Instructor Verification</h2>
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-indigo-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3>Verified Instructor Status</h3>
                <Badge variant="verified-instructor">Verified</Badge>
              </div>
              <p className="text-sm text-gray-600">
                You are verified as an instructor. This badge helps build trust with students.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl mb-4">Payout Settings</h2>
          <div className="space-y-4">
            <Input label="Bank account" defaultValue="****1234" />
            <Input label="Routing number" defaultValue="****5678" />
            <Button variant="outline">Update payout method</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
