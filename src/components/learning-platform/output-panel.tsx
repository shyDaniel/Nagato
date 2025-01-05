import React from 'react';

interface OutputPanelProps {
    output: string;
}

export function OutputPanel({ output }: OutputPanelProps) {
    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold mb-2">Output</h3>
            <pre className="bg-gray-50 p-2 rounded border font-mono text-sm whitespace-pre-wrap">
                {output || 'No output yet'}
            </pre>
        </div>
    )
}