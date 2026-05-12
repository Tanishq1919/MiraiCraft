import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { TextArea } from '../../components/ui/TextArea';
import { Select } from '../../components/ui/Select';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export function ClientPostProject() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [includeContract, setIncludeContract] = useState(true);

  // Step 1 fields
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [budget, setBudget] = useState('');
  const [duration, setDuration] = useState('');
  const [skills, setSkills] = useState('');

  const [titleError, setTitleError] = useState('');

  const steps = ['Basics', 'Requirements', 'Contracts'];

  const handleNext = () => {
    if (step === 1 && !title.trim()) {
      setTitleError('Project title is required');
      return;
    }
    setTitleError('');
    setStep(step + 1);
  };

  const handlePublish = () => {
    const newProject = {
      id: Date.now().toString(),
      title: title.trim() || 'Untitled Project',
      status: 'Open',
      freelancer: '-',
      applicants: 0,
      budget: budget.trim() || 'TBD',
      posted: new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' }),
    };

    const existing = JSON.parse(localStorage.getItem('clientProjects') || '[]');
    localStorage.setItem('clientProjects', JSON.stringify([...existing, newProject]));

    navigate('/client/projects');
  };

  return (
    <div>
      <h1 className="text-3xl mb-8">Post a New Project</h1>

      <div className="flex items-center justify-center mb-8">
        {steps.map((label, index) => (
          <div key={index} className="flex items-center">
            <div className="flex items-center gap-2">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step > index + 1
                    ? 'bg-green-600 text-white'
                    : step === index + 1
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {step > index + 1 ? '✓' : index + 1}
              </div>
              <span className={step === index + 1 ? 'text-blue-600' : 'text-gray-600'}>{label}</span>
            </div>
            {index < steps.length - 1 && <div className="w-24 h-0.5 bg-gray-300 mx-4"></div>}
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {step === 1 && (
            <Card className="p-8">
              <h2 className="text-2xl mb-6">Project Basics</h2>
              <div className="space-y-4">
                <Input
                  label="Project title"
                  placeholder="e.g., E-commerce Website Redesign"
                  value={title}
                  onChange={(e) => { setTitle(e.target.value); setTitleError(''); }}
                  error={titleError}
                />

                <TextArea
                  label="Project description"
                  rows={6}
                  placeholder="Describe your project in detail. What are you trying to achieve?"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />

                <Select
                  label="Category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  options={[
                    { value: '', label: 'Select category' },
                    { value: 'web-dev', label: 'Web Development' },
                    { value: 'mobile', label: 'Mobile Development' },
                    { value: 'data', label: 'Data Science' },
                    { value: 'design', label: 'Design' },
                  ]}
                />

                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="Budget (INR)"
                    type="text"
                    placeholder="e.g., ₹1,60,000-₹2,40,000"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                  />
                  <Input
                    label="Duration"
                    type="text"
                    placeholder="e.g., 4-6 weeks"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                  />
                </div>

                <Select
                  label="Experience level required"
                  options={[
                    { value: '', label: 'Select level' },
                    { value: 'beginner', label: 'Beginner' },
                    { value: 'intermediate', label: 'Intermediate' },
                    { value: 'expert', label: 'Expert' },
                  ]}
                />

                <Input
                  label="Required skills (comma-separated)"
                  placeholder="React, TypeScript, Tailwind CSS"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                />
              </div>
            </Card>
          )}

          {step === 2 && (
            <Card className="p-8">
              <h2 className="text-2xl mb-6">Requirements & Deliverables</h2>
              <div className="space-y-4">
                <TextArea
                  label="Project requirements"
                  rows={6}
                  placeholder="List the specific requirements for this project"
                />

                <TextArea
                  label="Deliverables"
                  rows={6}
                  placeholder="What should the freelancer deliver at the end of this project?"
                />

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Milestones</label>
                  <div className="space-y-3 mb-3">
                    <div className="border rounded-lg p-4">
                      <Input placeholder="Milestone title" className="mb-2" />
                      <div className="grid grid-cols-2 gap-2">
                        <Input placeholder="Payment" />
                        <Input placeholder="Deadline" />
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Add milestone
                  </Button>
                </div>
              </div>
            </Card>
          )}

          {step === 3 && (
            <Card className="p-8">
              <h2 className="text-2xl mb-6">Contracts & Legal</h2>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      checked={includeContract}
                      onChange={(e) => setIncludeContract(e.target.checked)}
                      className="mt-1"
                    />
                    <div>
                      <p>Include MiraiCraft's standard NDA and work‑for‑hire agreement</p>
                      <p className="text-sm text-gray-600 mt-1">
                        This protects both you and the freelancer by establishing clear ownership
                        and confidentiality terms.
                      </p>
                    </div>
                  </label>
                </div>

                <TextArea
                  label="Additional terms (optional)"
                  rows={4}
                  placeholder="Any additional terms or conditions for this project"
                />
              </div>
            </Card>
          )}

          <div className="flex items-center justify-between mt-8">
            <Button
              variant="outline"
              onClick={() => setStep(step - 1)}
              disabled={step === 1}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            {step < 3 ? (
              <Button onClick={handleNext}>
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button onClick={handlePublish}>Publish project</Button>
            )}
          </div>
        </div>

        <div>
          <Card className="p-6 sticky top-8">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <h3>AI Scope Helper</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Get AI-powered suggestions to improve your project description and scope.
            </p>
            <TextArea
              rows={4}
              placeholder="Describe your project idea..."
              className="mb-3"
            />
            <Button variant="outline" className="w-full">
              <Sparkles className="w-4 h-4 mr-2" />
              Generate suggestions
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
