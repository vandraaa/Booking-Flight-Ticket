"use server"

export async function getAirplanes() {
    try {
        const planes = await prisma.airplane.findMany()

        return planes
    } catch (error) {
        console.log(error)
    }
}