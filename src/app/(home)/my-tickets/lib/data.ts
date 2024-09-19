import prisma from "../../../../../lib/prisma"


export const getMyTickets = async (id: string) => {
    try {
        const data = await prisma.ticket.findMany({
            where: {
                customerId: id,
                status: "SUCCESS"
            },
            select: {
                id: true,
                flight: {
                    select: {
                        plane: true,
                        departureCity: true,
                        destinationCity: true,
                        departureDate: true,
                        arrivalDate: true,
                    }
                },
                seat: {
                    select: {
                        type: true
                    }
                }
            }
        })

        return data
    } catch (err) {
        console.log(err)
        return []
    }
}