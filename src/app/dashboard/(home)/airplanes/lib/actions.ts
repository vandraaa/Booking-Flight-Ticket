"use server";

import { ActionResult } from "@/app/dashboard/(auth)/signin/form/action";
import { airplanesFormSchema } from "./validation";
import { redirect } from "next/navigation";
import { deleteFile, uploadFile } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export async function saveAirplane(prevState: any, formData: FormData): Promise<ActionResult> {
    const values = airplanesFormSchema.safeParse({
        name: formData.get("name"),
        code: formData.get("code"),
        image: formData.get("image"),
    });

    if(!values.success) {
        const errorMessage = values.error.issues.map((issue) => issue.message);

        return {
            errorTitle: 'Error Validation',
            errorMessage
        } as ActionResult
    }

    const uploadedFile = await uploadFile(values.data.image as File);

    if(uploadedFile instanceof Error) {
        return {
            errorTitle: 'Error Uploading File',
            errorMessage: ['There was an error uploading the file. Please try again. ' + uploadedFile]
        } as ActionResult
    }

    try {
        const data = await prisma.airplane.create({
            data: {
                name: values.data.name,
                code: values.data.code,
                image: uploadedFile as string
            }
        })
    } catch (error) {
        console.log(error)

        return {
            errorTitle: 'Failed to insert data',
            errorMessage: ['There was an error inserting the data. Please try again.' + error]
        } as ActionResult
    }

    revalidatePath('/dashboard/airplanes')
    return { success: true } as ActionResult
    // redirect('/dashboard/airplanes')
}

export async function getAirplanesById(id: string) {
    try {
        const data = await prisma.airplane.findFirst({
            where: {
                id: id
            }
        })

        return data
    } catch (error) {
        console.log(error)
        return null
    }
}

export async function updateAirplane(prevState: any, id: string, formData: FormData): Promise<ActionResult> {
    const image = formData.get("image") as File

    let airplaneFormSchemaUpdate;

    if (image.size === 0) {
        airplaneFormSchemaUpdate = airplanesFormSchema.omit({ image: true })
    } else {
        airplaneFormSchemaUpdate = airplanesFormSchema
    }

    const values = airplaneFormSchemaUpdate.safeParse({
        name: formData.get("name"),
        code: formData.get("code"),
        image: formData.get("image"),
    });

    if(!values.success) {
        const errorMessage = values.error.issues.map((issue) => issue.message);

        return {
            errorTitle: 'Error Validation',
            errorMessage
        } as ActionResult
    }

    let fileName;

    if(image.size > 0) {
        const uploadedFile = await uploadFile(image);

        if(uploadedFile instanceof Error) {
            return {
                errorTitle: 'Error Uploading File',
                errorMessage: ['There was an error uploading the file. Please try again. ' + uploadedFile]
            } as ActionResult
        }

        fileName = uploadedFile as string
    } else {
        const airplane = await prisma.airplane.findFirst({
            where: {id: id},
            select: {
                image: true
            }
        })

        fileName = airplane?.image
    }

    try {
        await prisma.airplane.update({
            where: {
                id: id
            },
            data: {
                name: values.data.name,
                code: values.data.code,
                image: fileName
            }
        })
    } catch (error) {
        console.log(error)

        return {
            errorTitle: 'Failed to update data',
            errorMessage: ['There was an error updating the data. Please try again.' + error]
        } as ActionResult
    }

    revalidatePath('/dashboard/airplanes')
    return { success: true } as ActionResult
    // redirect('/dashboard/airplanes')
}

export async function deleteAirplane(id: string): Promise<ActionResult | undefined> {
    const data = await prisma.airplane.findFirst({
        where: {id: id}
    })

    if(!data) {
        return {
            errorTitle: 'Airplane not found',
            errorMessage: ['Airplane not found.']
        } as ActionResult
    }

    const deletedFile = await deleteFile(data?.image)

    if(deletedFile instanceof Error) {
        return {
            errorTitle: 'Failed to delete file',
            errorMessage: ['There was an error deleting the file. Please try again.' + Error]
        } as ActionResult
    }

    try {
        await prisma.airplane.delete({
            where: {
                id: id
            }
        })
    } catch(err) {
        return {
            errorTitle: 'Failed to delete data',
            errorMessage: ['There was an error deleting the data. Please try again.' + Error]
        } as ActionResult
    }

    revalidatePath('/dashboard/airplanes')
    // return { success: true, successMessage: 'Airplane deleted' } as ActionResult
}