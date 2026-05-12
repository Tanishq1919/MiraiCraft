import { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { TextArea } from '../../components/ui/TextArea';
import { Input } from '../../components/ui/Input';

export function AdminContracts() {
  const [selectedTemplate, setSelectedTemplate] = useState('nda-work-for-hire');

  const templates = [
    { id: 'nda-work-for-hire', name: 'NDA + Work-for-Hire Agreement' },
    { id: 'service-agreement', name: 'Service Agreement' },
    { id: 'consulting-agreement', name: 'Consulting Agreement' },
  ];

  const templateContent = `# MiraiCraft Standard Agreement

This agreement is entered into between the Client and the Freelancer for the project posted on MiraiCraft platform.

## 1. Non-Disclosure Agreement (NDA)

The Freelancer agrees to keep all project information confidential and not to disclose any proprietary information to third parties without prior written consent from the Client.

### 1.1 Confidential Information
Confidential information includes but is not limited to:
- Business strategies and plans
- Technical specifications and documentation
- Source code and proprietary algorithms
- Customer data and lists
- Financial information

### 1.2 Obligations
The Freelancer shall:
- Use confidential information solely for the purpose of completing the project
- Not disclose confidential information to any third party
- Return or destroy all confidential information upon project completion

## 2. Work-for-Hire

All work product created by the Freelancer shall be considered "work made for hire" and the Client shall own all rights, title, and interest in the work product.

### 2.1 Ownership
The Client shall own all intellectual property rights in:
- Source code and documentation
- Designs and creative works
- Data and databases
- Any derivative works

### 2.2 Assignment
To the extent any work product is not considered work made for hire, the Freelancer hereby assigns all rights to the Client.

## 3. Payment Terms

Payment shall be made according to the milestones agreed upon in the project details. Each milestone payment is released upon client approval.

### 3.1 Milestone Payments
- Payment is contingent upon completion of specified milestones
- Client has 7 days to review and approve each milestone
- Disputed payments shall be held in escrow until resolution

### 3.2 Platform Fees
MiraiCraft retains a platform fee of 20% of all project payments.

## 4. Term and Termination

Either party may terminate this agreement with 7 days written notice. Upon termination, the Freelancer shall be paid for all completed work.

### 4.1 Termination for Cause
Either party may terminate immediately if:
- The other party breaches a material term
- The other party becomes insolvent
- Continued performance becomes impossible

### 4.2 Effect of Termination
Upon termination:
- All confidentiality obligations remain in force
- The Freelancer shall deliver all work product
- The Client shall pay for all completed milestones

## 5. Dispute Resolution

Any disputes shall be resolved through MiraiCraft's dispute resolution process or binding arbitration.

### 5.1 MiraiCraft Mediation
Parties agree to first attempt resolution through MiraiCraft's mediation service.

### 5.2 Arbitration
If mediation fails, disputes shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.

## 6. Signatures

By accepting this project, both parties agree to be bound by these terms.`;

  return (
    <div>
      <h1 className="text-3xl mb-8">Contract Templates</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div>
          <Card className="p-6">
            <h2 className="text-lg mb-4">Templates</h2>
            <div className="space-y-2">
              {templates.map((template) => (
                <button
                  key={template.id}
                  onClick={() => setSelectedTemplate(template.id)}
                  className={`w-full text-left p-3 rounded-lg transition ${
                    selectedTemplate === template.id
                      ? 'bg-blue-50 text-blue-600 border-2 border-blue-600'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  {template.name}
                </button>
              ))}
            </div>
            <Button className="w-full mt-4">Create new template</Button>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl">
                {templates.find((t) => t.id === selectedTemplate)?.name}
              </h2>
              <div className="flex gap-2">
                <Button variant="outline">Preview</Button>
                <Button>Save changes</Button>
              </div>
            </div>

            <div className="space-y-4">
              <Input label="Template name" defaultValue="NDA + Work-for-Hire Agreement" />

              <div>
                <label className="block text-sm text-gray-700 mb-1">Template content</label>
                <TextArea
                  rows={20}
                  defaultValue={templateContent}
                  className="font-mono text-sm"
                />
                <p className="text-xs text-gray-600 mt-1">
                  Use Markdown formatting. Variables: [CLIENT_NAME], [FREELANCER_NAME], [PROJECT_TITLE], [DATE]
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-900">
                  This template is automatically applied to all new projects unless the client opts out.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
