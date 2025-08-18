'use server';

import { revalidatePath } from "next/cache";
import { db } from "../_lib/prisma";

export async function createBooking({
  serviceId,
  userId,
  date,
}: {
  serviceId: string;
  userId: string;
  date: Date;
}) {
  try {
    await db.booking.create({
      data: {
        serviceId,
        userId,
        date,
      },
    });
    
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error(error);
    return { error: "Failed to create booking" };
  }
}