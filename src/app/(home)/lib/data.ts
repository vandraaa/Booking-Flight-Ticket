"use server"

import prisma from "../../../../lib/prisma"

export const getFilterCity = async () => {
    try {
        const city = await prisma.flight.groupBy({
            by: ['departureCity', 'destinationCity'],
            where: {
                departureDate: {
                    gt: new Date()
                },
                
            },
            _count: {
                departureCity: true,
                destinationCity: true
            }
        })

        return city
    } catch (err) {
        console.log(err)
    }
}