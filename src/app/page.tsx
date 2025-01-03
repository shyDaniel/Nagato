import { CodeLearningPlatform } from '@/components/learning-platform/code-editor'

export default function Home() {
    return (
        <main className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-8">Code Learning Platform</h1>
            <CodeLearningPlatform />
        </main>
    )
}