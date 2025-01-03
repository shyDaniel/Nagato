export interface LearningStep {
    title: string;
    description: string;
    code: string;
    language: string;
}

export interface LearningPlan {
    title: string;
    steps: LearningStep[];
}