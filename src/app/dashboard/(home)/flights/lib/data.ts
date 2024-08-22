"use server"

import prisma from "../../../../../../lib/prisma"

export const getFlights = async () => {
    try {
        const flights = await prisma.flight.findMany({
            include: {
                plane: true,
                seats: true
            }
        })

        return flights
    } catch (error) {
        console.log(error)

        return []
    }
}

export const getFlightsById = async (id: string) => {
    try {
        const flight = await prisma.flight.findFirst({
            where: {
                id: id
            },
            include: {
                plane: true,
                seats: true
            }
        })

        return flight
    } catch (error) {
        console.log(error)
    }
}