"use server"

import { ActionResult } from "@/app/dashboard/(auth)/signin/form/action";
import { redirect } from "next/navigation";
import { formFlightsSchema } from "./validation";
import { generateSeatPerClass } from "@/lib/utils";
import { revalidatePath } from "next/cache";

export async function saveFlights(prevState: unknown, formData: FormData): Promise<ActionResult> {
    const departureDate = new Date(formData.get('departureDate') as string)
    const arrivalDate = new Date(formData.get('arrivalDate') as string)

    const values = formFlightsSchema.safeParse({
        planeId: formData.get('planeId'),
        price: formData.get('price'),
        departureDate,
        departureCity: formData.get('departureCity'),
        departureCityCode: formData.get('departureCityCode'),
        destinationCity: formData.get('destinationCity'),
        destinationCityCode: formData.get('destinationCityCode'),
        arrivalDate,
    })

    if(!values.success) {
        const errorMessage = values.error.issues.map((issue) => issue.message);

        return {
            errorTitle: 'Error Validation',
            errorMessage
        } as ActionResult
    }

    const data = await prisma.flight.create({
        data: {
            ...values.data,
            price: Number.parseInt(values.data.price),
        }
    });

    const seats = generateSeatPerClass(data.id);

    await prisma.flightSeat.createMany({
        data: seats
    })

    revalidatePath('/dashboard/flights')
    return { success: true, successMessage: 'Data inserted successfully' } as ActionResult
    // redirect('/dashboard/flights')
}

export async function updateFlight(prevState: unknown, formData: FormData, id: string): Promise<ActionResult> {
    const departureDate = new Date(formData.get('departureDate') as string)
    const arrivalDate = new Date(formData.get('arrivalDate') as string)

    const values = formFlightsSchema.safeParse({
        planeId: formData.get('planeId'),
        price: formData.get('price'),
        departureDate,
        departureCity: formData.get('departureCity'),
        departureCityCode: formData.get('departureCityCode'),
        destinationCity: formData.get('destinationCity'),
        destinationCityCode: formData.get('destinationCityCode'),
        arrivalDate,
    })

    if(!values.success) {
        const errorMessage = values.error.issues.map((issue) => issue.message);

        return {
            errorTitle: 'Error Validation',
            errorMessage
        } as ActionResult
    }

    await prisma.flight.update({
        where: {
            id: id
        },
        data: {
            ...values.data,
            price: Number.parseInt(values.data.price),
        }
    })

    revalidatePath('/dashboard/flights')
    return { success: true, successMessage: 'Flight updated successfully' } as ActionResult
    // redirect('/dashboard/flights')
}

export async function deleteFlight(id: string) {
    try {
        await prisma.flightSeat.deleteMany({
            where: {
                flightId: id
            }
        })
        await prisma.flight.delete({
            where: {
                id: id
            }
        })
    } catch(err) {
        console.log(err)
    }

    revalidatePath('/dashboard/flights')
}