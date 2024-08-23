"use server"

import prisma from "../../../../../../lib/prisma"

export const getCustomer = async () => {
    try {
        const data = await prisma.user.findMany({
            where: {
                role: 'CUSTOMER'
            }
        })

        return data
    } catch(err) {
        console.log(err);
    }
}