// src/lib/executors/javascript.ts
import * as Babel from '@babel/standalone';

export async function executeJavaScript(code: string): Promise<any> {
    try {
        const transformed = Babel.transform(code, {
            presets: ['env'],
        }).code;

        return new Function(transformed as string)();
    } catch (error) {
        throw new Error(`Execution error: ${error}`);
    }
}