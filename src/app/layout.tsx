import React from 'react';
import './global.css'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <main className="min-h-screen bg-slate-50">
                    {children}
                </main>
            </body>
        </html>
    )
}