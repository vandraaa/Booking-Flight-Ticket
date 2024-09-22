"use server";

import { getUser } from "@/lib/auth";
import { NextRequest } from "next/server";
import prisma from "../../../../../lib/prisma";

const MIDTRANS_URL = process.env.NEXT_PUBLIC_TRANSACTION_URL ?? "";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const cust = await getUser();

  try {
    const transaction = await prisma.ticket.create({
      data: {
        bookingDate: body.bookingDate,
        price: Number(body.price),
        status: "PENDING",
        flightId: body.flightId,
        seatId: body.seatId,
        customerId: cust.user?.id ?? "",
        code: `TRX-${new Date().getTime()}-${Math.floor(
          Math.random() * 1000
        ).toString()}`,
      },
    });

    await prisma.flightSeat.update({
      where: {
        id: transaction.seatId,
      },
      data: {
        isBooked: true,
      },
    });

    // handle midtrans
    const params = {
      transaction_details: {
        order_id: transaction.id,
        gross_amount: Number(body.price),
      },
      credit_card: {
        secure: true,
      },
      item_details: [
        {
          id: body.flightId,
          price: Number(body.price),
          quantity: 1,
          name: `Flight Ticket ${body.seatId}`,
        },
      ],
    };

    const resMidtrans = await fetch(MIDTRANS_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        Authorization: `Basic ${process.env.NEXT_PUBLIC_MIDTRANS_AUTH_KEY}`,
      },
      body: JSON.stringify(params),
    });

    const midtrans = await resMidtrans.json();

    await prisma.ticket.update({
      where: {
        id: transaction.id,
      },
      data: {
        tokenMidtrans: midtrans.token,
      },
    });
    // handle midtrans

    return Response.json({ midtrans, transaction_id: transaction.id });
  } catch (err) {
    console.log(err);
    return Response.json({ success: false, message: "Transaction failed" });
  }
}
