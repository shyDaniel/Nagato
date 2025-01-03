// src/components/learning-platform/code-editor.tsx
import { Editor } from '@monaco-editor/react';

export function CodeEditor({
    value,
    onChange,
    language
}: {
    value: string;
    onChange: (value: string) => void;
    language: string;
}) {
    return (
        <Editor
            height="300px"
            language={language}
            value={value}
            onChange={(value) => onChange(value || '')}
            theme="vs-dark"
            options={{
                minimap: { enabled: false },
                fontSize: 14,
            }}
        />
    );
}