import { TypeSeat } from "@prisma/client";
import { NextRequest } from "next/server";
import prisma from "../../../../lib/prisma";

export async function POST(request: NextRequest) {
  // const searchParams = request.nextUrl.searchParams;

  // const params = {
  //   departure: searchParams.get("departure"),
  //   arrival: searchParams.get("arrival"),
  //   date: searchParams.get("date"),
  //   planeId: searchParams.get("planeId"),
  //   seat: searchParams.get("seat"),
  // };

  const body = await request.json();

  let departureDate: Date | null = null;

  if (body.date) {
    departureDate = new Date(body.date);
    departureDate.setHours(1);
  }

  try {
    const data = await prisma.flight.findMany({
      where: {
        departureCity: body.departure !== null ? body.departure : {},
        destinationCity: body.arrival !== null ? body.arrival : {},
        seats:
          body.seat !== null
            ? {
                some: {
                  type: body.seat as TypeSeat,
                  isBooked: false,
                },
              }
            : {},
        departureDate:
          departureDate !== null
            ? {
                gte: departureDate,
              }
            : {},
        planeId: body.planeIds.length > 0 ? { in: body.planeIds } : {},
      },
      include: {
        plane: true,
      },
    });

    return Response.json({
      data
    });
  } catch (error) {
    console.log(error);

    return Response.json(
      {
        error: true,
        errorMessage: "Failed to get flights",
      },
      { status: 500 }
    );
  }
}
