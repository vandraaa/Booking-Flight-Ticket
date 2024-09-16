import { NextRequest } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function POST(request: NextRequest) {
  const body = await request.json();

  switch (body.transaction_status) {
    case "settlement":
    case "capture":
      await prisma.ticket.update({
        where: {
          id: body.order_id,
        },
        data: {
          status: "SUCCESS",
        },
      });

      return Response.json({
        status: true,
        message: "Transaction success",
      });

    case "pending":
      return Response.json({
        status: true,
        message: "Transaction pending",
      });
    case "expire":
    case "failure":
    case "cancel":
      await prisma.ticket.update({
        where: {
          id: body.order_id,
        },
        data: {
          status: "FAILED",
        },
      });

      return Response.json({
        status: true,
        message: "Transaction failed",
      });

    default:
      return Response.json({
        status: true,
        message: "Transaction failed",
      });
  }
}
