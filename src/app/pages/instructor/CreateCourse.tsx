import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { TextArea } from '../../components/ui/TextArea';
import { Select } from '../../components/ui/Select';
import { formatCurrency } from '../../lib/utils';
import { ChevronLeft, ChevronRight, Plus, GripVertical } from 'lucide-react';

interface Lesson {
  id: string;
  title: string;
  content: string;
}

interface Section {
  id: string;
  title: string;
  lessons: Lesson[];
}

function uniqueId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

export function InstructorCreateCourse() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [courseTitle, setCourseTitle] = useState('');
  const [pricingType, setPricingType] = useState('paid');
  const [price, setPrice] = useState('');
  const [priceError, setPriceError] = useState('');

  const [sections, setSections] = useState<Section[]>([
    {
      id: uniqueId(),
      title: 'Section 1: Getting Started',
      lessons: [
        { id: uniqueId(), title: 'Introduction', content: '' },
        { id: uniqueId(), title: 'Setup your environment', content: '' },
      ],
    },
  ]);

  const steps = ['Basic Info', 'Curriculum', 'Pricing'];

  const handleAddSection = () => {
    const newSection: Section = {
      id: uniqueId(),
      title: `New Section`,
      lessons: [],
    };
    setSections((prev) => [...prev, newSection]);
  };

  const handleAddLesson = (sectionId: string) => {
    const newLesson: Lesson = {
      id: uniqueId(),
      title: 'New Lesson',
      content: '',
    };
    setSections((prev) =>
      prev.map((section) =>
        section.id === sectionId
          ? { ...section, lessons: [...section.lessons, newLesson] }
          : section
      )
    );
  };

  const handlePublish = () => {
    if (pricingType === 'paid' && (!price || parseFloat(price) <= 0)) {
      setPriceError('Please enter a valid price greater than 0');
      return;
    }

    const resolvedTitle = courseTitle.trim() || 'Untitled Course';
    const revenueAmount = pricingType === 'free' ? 0 : Math.floor(parseFloat(price) * 0.8);

    const newCourse = {
      id: Date.now().toString(),
      title: resolvedTitle,
      status: 'Published',
      enrollments: 0,
      rating: 0,
      revenue: formatCurrency(revenueAmount * 0), // starts at ₹0
    };

    const existingCourses = JSON.parse(localStorage.getItem('instructorCourses') || '[]');
    localStorage.setItem('instructorCourses', JSON.stringify([...existingCourses, newCourse]));

    navigate('/instructor/courses');
  };

  const canPublish = pricingType === 'free' || (pricingType === 'paid' && price && parseFloat(price) > 0);

  return (
    <div>
      <h1 className="text-3xl mb-8 dark:text-gray-100">Create New Course</h1>

      <div className="flex items-center justify-center mb-8">
        {steps.map((label, index) => (
          <div key={index} className="flex items-center">
            <div className="flex items-center gap-2">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step > index + 1
                    ? 'bg-green-600 text-white dark:bg-green-500'
                    : step === index + 1
                    ? 'bg-blue-600 text-white dark:bg-blue-500'
                    : 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
                }`}
              >
                {step > index + 1 ? '✓' : index + 1}
              </div>
              <span className={step === index + 1 ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'}>{label}</span>
            </div>
            {index < steps.length - 1 && <div className="w-24 h-0.5 bg-gray-300 dark:bg-gray-600 mx-4"></div>}
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto">
        {step === 1 && (
          <Card className="p-8">
            <h2 className="text-2xl mb-6 dark:text-gray-100">Basic Information</h2>
            <div className="space-y-4">
              <Input
                label="Course title"
                placeholder="e.g., Complete Web Development Bootcamp"
                value={courseTitle}
                onChange={(e) => setCourseTitle(e.target.value)}
              />

              <TextArea label="Description" rows={4} placeholder="Describe what students will learn" />

              <Select
                label="Category"
                options={[
                  { value: '', label: 'Select category' },
                  { value: 'web-dev', label: 'Web Development' },
                  { value: 'data', label: 'Data Science' },
                  { value: 'design', label: 'Design' },
                  { value: 'business', label: 'Business' },
                ]}
              />

              <Select
                label="Level"
                options={[
                  { value: '', label: 'Select level' },
                  { value: 'beginner', label: 'Beginner' },
                  { value: 'intermediate', label: 'Intermediate' },
                  { value: 'advanced', label: 'Advanced' },
                ]}
              />

              <div>
                <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">Course thumbnail</label>
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Upload course thumbnail (16:9 ratio recommended)</p>
                </div>
              </div>
            </div>
          </Card>
        )}

        {step === 2 && (
          <Card className="p-8">
            <h2 className="text-2xl mb-6 dark:text-gray-100">Build Your Curriculum</h2>

            <div className="space-y-4 mb-6">
              {sections.map((section) => (
                <div key={section.id} className="border dark:border-gray-600 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <GripVertical className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                    <h3 className="dark:text-gray-100">{section.title}</h3>
                  </div>
                  <div className="ml-8 space-y-2">
                    {section.lessons.map((lesson) => (
                      <div key={lesson.id} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded">
                        <span className="text-sm dark:text-gray-300">{lesson.title}</span>
                      </div>
                    ))}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full"
                      onClick={() => handleAddLesson(section.id)}
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add lesson
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="outline" onClick={handleAddSection}>
              <Plus className="w-4 h-4 mr-2" />
              Add section
            </Button>
          </Card>
        )}

        {step === 3 && (
          <Card className="p-8">
            <h2 className="text-2xl mb-6 dark:text-gray-100">Set Your Pricing</h2>

            {/* Free / Paid toggle */}
            <div className="mb-6">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Pricing type</p>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => { setPricingType('paid'); setPrice(''); setPriceError(''); }}
                  className={`flex-1 py-4 rounded-xl border-2 font-medium transition-all ${
                    pricingType === 'paid'
                      ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                      : 'border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:border-gray-300'
                  }`}
                >
                  💰 Paid
                </button>
                <button
                  type="button"
                  onClick={() => { setPricingType('free'); setPrice('0'); setPriceError(''); }}
                  className={`flex-1 py-4 rounded-xl border-2 font-medium transition-all ${
                    pricingType === 'free'
                      ? 'border-green-600 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                      : 'border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:border-gray-300'
                  }`}
                >
                  🎓 Free
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {pricingType === 'paid' && (
                <>
                  <Input
                    label="Course price (₹)"
                    type="number"
                    placeholder="7999"
                    value={price}
                    onChange={(e) => {
                      setPrice(e.target.value);
                      setPriceError('');
                    }}
                    error={priceError}
                  />

                  {price && parseFloat(price) > 0 && (
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                      <p className="text-sm text-blue-900 dark:text-blue-200">
                        MiraiCraft takes a 20% platform fee. You'll earn {formatCurrency(Math.floor(parseFloat(price) * 0.8))} per enrollment at {formatCurrency(parseFloat(price))} price.
                      </p>
                    </div>
                  )}
                </>
              )}

              {pricingType === 'free' && (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <p className="text-sm text-green-900 dark:text-green-200">
                    This course will be available to all students for free.
                  </p>
                </div>
              )}
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
            <Button onClick={() => setStep(step + 1)}>
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button onClick={handlePublish} disabled={!canPublish}>
              Publish course
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

