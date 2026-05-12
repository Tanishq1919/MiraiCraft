import { Link } from 'react-router';
import { Navbar } from '../components/ui/Navbar';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { DollarSign, Clock, MapPin, Star, ShieldCheck } from 'lucide-react';

export function ProjectDetails() {
  const milestones = [
    {
      title: 'Milestone 1: Wireframes and Design',
      description: 'Create wireframes and high-fidelity designs for all pages',
      payment: '₹64,000',
      deadline: '2 weeks',
    },
    {
      title: 'Milestone 2: Frontend Implementation',
      description: 'Implement responsive frontend with React and Tailwind CSS',
      payment: '₹96,000',
      deadline: '3 weeks',
    },
    {
      title: 'Milestone 3: Testing and Deployment',
      description: 'Complete testing, bug fixes, and deploy to production',
      payment: '₹40,000',
      deadline: '1 week',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h1 className="text-4xl mb-4">E-commerce Website Redesign</h1>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge>Web Development</Badge>
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
              </div>
              <div className="flex items-center gap-6 text-gray-700">
                <div className="flex items-center gap-1">
                  <DollarSign className="w-5 h-5" />
                  <span>₹1,60,000-₹2,40,000</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-5 h-5" />
                  <span>4-6 weeks</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-5 h-5" />
                  <span>Remote</span>
                </div>
              </div>
            </div>

            <Card className="p-6 mb-6">
              <h2 className="text-2xl mb-4">Project Description</h2>
              <p className="text-gray-700 mb-4">
                We're looking for an experienced web developer to completely redesign our e-commerce platform.
                The current site is outdated and difficult to navigate. We need a modern, responsive design
                that improves the user experience and increases conversion rates.
              </p>
              <p className="text-gray-700">
                The ideal candidate should have strong experience with React, TypeScript, and modern CSS
                frameworks. You'll be working closely with our product team to ensure the design meets
                our business requirements and provides an excellent shopping experience.
              </p>
            </Card>

            <Card className="p-6 mb-6">
              <h2 className="text-2xl mb-4">Requirements</h2>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>3+ years of experience with React and TypeScript</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Strong understanding of responsive design and CSS frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Experience with e-commerce platforms and payment integrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Portfolio demonstrating previous e-commerce projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Excellent communication skills and ability to meet deadlines</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 mb-6">
              <h2 className="text-2xl mb-4">Deliverables</h2>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Complete design mockups for all pages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Fully responsive website compatible with all modern browsers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Integrated shopping cart and checkout system</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Product catalog with search and filtering</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Documentation and deployment to production</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl mb-4">Project Milestones</h2>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3>{milestone.title}</h3>
                      <span className="text-blue-600">{milestone.payment}</span>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">{milestone.description}</p>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>Deadline: {milestone.deadline}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-4 mt-6 bg-blue-50 border-blue-200">
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-600 mt-0.5" />
                <p className="text-sm text-blue-900">
                  This MiraiCraft project includes our standard NDA and work‑for‑hire agreement
                  to protect both the client and the freelancer.
                </p>
              </div>
            </Card>
          </div>

          <div>
            <Card className="p-6 sticky top-8">
              <Link to="/learner">
                <Button className="w-full mb-4" size="lg">
                  Apply to project
                </Button>
              </Link>
              <Button variant="outline" className="w-full mb-6">
                Save for later
              </Button>

              <div className="border-t pt-6">
                <h3 className="mb-4">About the Client</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-lg"></div>
                  <div>
                    <p>TechCorp Solutions</p>
                    <div className="flex items-center gap-1">
                      <Badge variant="verified-business" className="text-xs">
                        Verified Business
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Rating</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>4.9</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Projects posted</span>
                    <span>27</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Hire rate</span>
                    <span>92%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Location</span>
                    <span>San Francisco, CA</span>
                  </div>
                </div>

                <p className="text-sm text-gray-700">
                  TechCorp Solutions is a growing tech company specializing in e-commerce
                  platforms. We're committed to working with talented freelancers and building
                  long-term partnerships.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
