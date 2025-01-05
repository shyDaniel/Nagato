import React from 'react';

interface Step {
    title: string;
    description: string;
    language: string;
    code: string;
}

interface LearningPlanProps {
    plan: {
        title: string;
        steps: Step[];
    };
    currentStep: number;
    onStepChange: (step: number) => void;
}

export function LearningPlan({ plan, currentStep, onStepChange }: LearningPlanProps) {
    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">{plan.title}</h2>
            <div className="space-y-4">
                {plan.steps.map((step, index) => (
                    <div
                        key={index}
                        className={`p-4 rounded cursor-pointer ${currentStep === index ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50'
                            }`}
                        onClick={() => onStepChange(index)}
                    >
                        <h3 className="font-semibold">{`${index + 1}. ${step.title}`}</h3>
                        <p className="text-gray-600 mt-2">{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}