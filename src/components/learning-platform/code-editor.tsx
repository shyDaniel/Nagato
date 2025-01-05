// src/components/learning-platform/code-editor.tsx
import React from 'react';
import { useState, useEffect } from 'react';

interface CodeEditorProps {
    code: string;
    language: string;
    onExecute: (code: string) => void;
}

export function CodeEditor({ code: initialCode, language, onExecute }: CodeEditorProps) {
    const [code, setCode] = useState(initialCode);

    useEffect(() => {
        setCode(initialCode);
    }, [initialCode]);

    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold">Code Editor</h3>
                <span className="text-sm text-gray-500">{language}</span>
            </div>
            <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-64 p-2 font-mono text-sm bg-gray-50 rounded border"
            />
            <button
                onClick={() => onExecute(code)}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Run Code
            </button>
        </div>
    )
}