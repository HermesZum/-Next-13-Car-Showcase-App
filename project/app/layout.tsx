import './globals.css'
import React from "react";
import {Navbar} from "@/components/Navbar";
import {Footer} from "@/components/Footer";

export const metadata = {
    title: 'Car Showcase',
    description: 'Modern Next.js 13 car showcase application with TypeScript & Tailwind CSS.',
}

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="relative">
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
