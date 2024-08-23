"use server"

export const getTickets = async () => {
    try {
        const data = await prisma.ticket.findMany({
            include: {
                flight: true,
                customer: true,
                seat: true
            }
        })

        return data
    } catch (error) {
        console.log(error)
    }
}