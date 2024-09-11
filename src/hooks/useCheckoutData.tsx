"use client"    

import { CHECKOUT_KEY, Checkout } from "@/lib/utils"
import { useEffect, useState } from "react"

export default function useCheckoutData() {
    const [data, setData] = useState<Checkout | null>(null)

    useEffect(() => {
        if (typeof window !== 'undefined' && window.sessionStorage) {
            const value = window.sessionStorage.getItem(CHECKOUT_KEY);

            if (value) {
                setData(JSON.parse(value))
            }
        }
    }, [])

    return {data}
}
