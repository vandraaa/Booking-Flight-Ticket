"use client"

import { QueryClient } from "@tanstack/react-query"

const queryClient = new QueryClient()

export default async function QCProvider({ children }: { children: React.ReactNode }) {
    return (
        <QCProvider client={queryClient}>
            {children}
        </QCProvider>
    )
}