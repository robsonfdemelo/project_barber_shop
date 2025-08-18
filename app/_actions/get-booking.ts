"use server";

import "server-only";
import { db } from "../_lib/prisma";


/**
 * Constrói o início/fim do dia LOCAL (timeZone) como instantes UTC.
 * Útil quando o DB grava timestamps em UTC, mas o “dia” é o do Brasil.
 */
function startEndOfDayInTZ(date: Date, timeZone: string) {
  // pega Y-M-D naquele fuso
  const fmt = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const [y, m, d] = fmt.format(date).split("-").map((s) => parseInt(s, 10));

  // cria instantes UTC correspondentes ao 00:00:00.000 e 23:59:59.999 daquele dia local
  const start = new Date(Date.UTC(y, m - 1, d, 0, 0, 0, 0));
  const end   = new Date(Date.UTC(y, m - 1, d, 23, 59, 59, 999));

  return { start, end };
}

interface GetBookingsParams {
  date: Date;          // se vier string do client, faça new Date(date)
  serviceId: string;
}

export async function getBookings({ date, serviceId }: GetBookingsParams) {
  // Se você quiser considerar “dia local de SP”
  const { start, end } = startEndOfDayInTZ(date, "America/Sao_Paulo");

  // Se preferir o dia do servidor mesmo, comente a linha acima e descomente estas:
  // const start = startOfDay(date);
  // const end   = endOfDay(date);

  return db.booking.findMany({
    where: {
      serviceId,
      date: { gte: start, lte: end },
    },
    select: { id: true, date: true },
    orderBy: { date: "asc" },
  });
}
