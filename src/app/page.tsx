// src/app/page.tsx
'use client'

import React, { useState } from 'react'
import { LearningPlan } from '../components/learning-platform/learning-plan'
import { CodeEditor } from '../components/learning-platform/code-editor'
import { OutputPanel } from '../components/learning-platform/output-panel'

export default function Home() {
    const [currentStep, setCurrentStep] = useState(0)
    const [output, setOutput] = useState('')

    // Hardcoded learning plan for MVP
    const dummyPlan = {
        title: "Building a Simple Counter App",
        steps: [
            {
                title: "Create HTML Structure",
                description: "Let's start by creating the basic HTML structure for our counter.",
                language: "javascript",
                code: `const app = document.getElementById('app');
const counter = document.createElement('div');
counter.innerHTML = \`
  <h1>Counter: <span id="count">0</span></h1>
  <button id="increment">+</button>
  <button id="decrement">-</button>
\`;
app.appendChild(counter);`
            },
            {
                title: "Add JavaScript Logic",
                description: "Now let's add the counter functionality.",
                language: "javascript",
                code: `let count = 0;
const countDisplay = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');

incrementBtn.addEventListener('click', () => {
  count++;
  countDisplay.textContent = count;
});

decrementBtn.addEventListener('click', () => {
  count--;
  countDisplay.textContent = count;
});`
            }
        ]
    }

    const handleCodeExecution = (code: string) => {
        try {
            // For MVP, we'll just use a simple eval for JavaScript
            // In production, you'd want to use a proper sandbox
            const result = eval(code)
            setOutput(String(result))
        } catch (error: any) {
            setOutput(`Error: ${error.message}`)
        }
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Web App Learning Platform</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <LearningPlan
                        plan={dummyPlan}
                        currentStep={currentStep}
                        onStepChange={setCurrentStep}
                    />
                </div>
                <div className="space-y-4">
                    <CodeEditor
                        code={dummyPlan.steps[currentStep].code}
                        language={dummyPlan.steps[currentStep].language}
                        onExecute={handleCodeExecution}
                    />
                    <OutputPanel output={output} />
                </div>
            </div>
        </div>
    )
}