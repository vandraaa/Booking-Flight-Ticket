"use server"

import prisma from "../../../../../../lib/prisma"

export const getCustomer = async () => {
    try {
        const response = await prisma.user.findMany({
            where: {
                role: 'CUSTOMER'
            }
        })

        return response || []
    } catch(err) {
        console.log(err);

        return []
    }
}