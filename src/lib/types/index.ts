export interface Step {
    title: string;
    description: string;
    language: string;
    code: string;
}

export interface LearningPlan {
    title: string;
    steps: Step[];
}