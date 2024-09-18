import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body)
  
  const transactionId = body.order_id;
  const transactionStatus = body.transaction_status;

  if (transactionStatus === "settlement" || transactionStatus === "capture") {
    await prisma.ticket.update({
      where: {
        id: transactionId,
      },
      data: {
        status: "SUCCESS",
      },
    });
  } else {
    await prisma.ticket.update({
      where: {
        id: transactionId,
      },
      data: {
        status: "FAILED",
      },
    });
  }

  return Response.json({ success: true, message: "Status updated successfully" });
}
