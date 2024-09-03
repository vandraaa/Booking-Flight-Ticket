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

        const uniqueCities = new Set();

        const cities = city.forEach((item) => {
            uniqueCities.add(item.departureCity);
            uniqueCities.add(item.destinationCity);
        });

        return Array.from(uniqueCities)
    } catch (err) {
        console.log(err)
    }
}

export const getRoute = async () => {
    try {
        const city = await prisma.flight.groupBy({
            by: ['departureCity', 'destinationCity'],
            _count: {
                departureCity: true,
                destinationCity: true
            }
        })

        const routes = city.map((item) => ({
            departureCity: item.departureCity,
            destinationCity: item.destinationCity,
        }));

        return routes
    } catch (err) {
        console.log(err)
        return []
    }
}

export const getAirplanes = async () => {
    try {
        const airplanes = await prisma.airplane.findMany({
            where: {
                flights: {
                    every: {
                        id: undefined
                    }
                }
            }
        })

        return airplanes
    } catch (err) {
        console.log(err)
        return []
    }
}