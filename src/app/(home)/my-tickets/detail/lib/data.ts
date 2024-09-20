import prisma from "../../../../../../lib/prisma"


export const getTicketById = async (id: string) => {
    try {
        const data = await prisma.ticket.findFirst({
            where: {
                id: id
            },
            include: {
                flight: {
                    include: {
                        plane: true
                    }
                },
                customer: true,
                seat: true
            },
        })

        return data
    } catch (err) {
        console.log(err)
        return null
    }
}