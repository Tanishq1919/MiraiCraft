import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { TextArea } from '../../components/ui/TextArea';
import { Badge } from '../../components/ui/Badge';
import { ShieldCheck, Upload } from 'lucide-react';

export function ClientSettings() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1 className="text-3xl mb-8">Settings</h1>

      <div className="max-w-3xl space-y-6">
        <Card className="p-6">
          <h2 className="text-xl mb-6">Business Profile</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 bg-gray-300 rounded-lg"></div>
              <Button variant="outline">
                <Upload className="w-4 h-4 mr-2" />
                Upload logo
              </Button>
            </div>

            <Input label="Company name" defaultValue="TechCorp Solutions" />

            <Input label="Website" defaultValue="https://techcorp.com" />

            <Input label="Email" type="email" defaultValue="contact@techcorp.com" />

            <TextArea
              label="Company description"
              rows={4}
              defaultValue="TechCorp Solutions is a growing tech company specializing in e-commerce platforms."
            />

            <Input label="Location" defaultValue="San Francisco, CA" />

            <div className="flex gap-3 pt-4">
              <Button type="submit">Save changes</Button>
              <Button variant="outline">Cancel</Button>
            </div>
          </form>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl mb-4">Business Verification</h2>
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3>Verified Business Status</h3>
                <Badge variant="verified-business">Verified</Badge>
              </div>
              <p className="text-sm text-gray-600">
                Your business is verified. This badge helps build trust with freelancers.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl mb-4">Payment Method</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-8 bg-gray-200 rounded"></div>
                  <div>
                    <p>Visa ending in 1234</p>
                    <p className="text-sm text-gray-600">Expires 12/2026</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Edit
                </Button>
              </div>
            </div>
            <Button variant="outline">Add payment method</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
