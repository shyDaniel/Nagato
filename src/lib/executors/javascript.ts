export async function executeJavaScript(code: string): Promise<string> {
    try {
        // For MVP, we're using eval. In production, you'd want to use a proper sandbox
        // like vm2 or isolated-vm
        const result = eval(code);
        return String(result);
    } catch (error) {
        return `Error: ${error.message}`;
    }
}