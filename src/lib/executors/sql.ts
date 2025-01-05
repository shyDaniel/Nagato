let inMemoryDB: Record<string, any[]> = {
    users: [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    ],
    products: [
        { id: 1, name: 'Laptop', price: 999 },
        { id: 2, name: 'Phone', price: 699 },
    ],
};

export async function executeSQL(query: string): Promise<string> {
    try {
        // This is a very simple SQL parser for MVP
        // In production, you'd want to use a proper SQL parser
        const words = query.toLowerCase().split(' ');

        if (words[0] === 'select') {
            const tableName = words[words.indexOf('from') + 1];
            if (!inMemoryDB[tableName]) {
                throw new Error(`Table ${tableName} not found`);
            }
            return JSON.stringify(inMemoryDB[tableName], null, 2);
        }

        return 'Query type not supported in MVP';
    } catch (error) {
        return `Error: ${error.message}`;
    }
}