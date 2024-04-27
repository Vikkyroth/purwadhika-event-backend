import { PrismaClient, Event } from "@prisma/client";
import { IEvent } from "../interfaces/events.interface";

const prisma = new PrismaClient();

const getEventsQuery = async (): Promise<Event[]> => {
  try {
    const events = await prisma.event.findMany({});
    return events;
  } catch (err) {
    throw err;
  }
}

const getEventByIDQuery = async (id: number): Promise<Event | null> => {
  try {
    const event = await prisma.event.findUnique({
      where: {
        id
      }
    });

    return event;
  } catch (err) {
    throw err;
  }
}

const getEventBySlugQuery = async (slug: string): Promise<Event | null> => {
  try {
    const event = await prisma.event.findFirst({
      where: {
        slug
      }
    });

    return event;
  } catch (err) {
    throw err;
  }
}

const createEventQuery = async (eventData: IEvent): Promise<Event> => {
  try {
    const trx = await prisma.$transaction(async (prisma) => {
      try {
        const event = await prisma.event.create({
          data: {
            ...eventData,
            eventDate: new Date(eventData.eventDate),
            startBookingDate: new Date(eventData.startBookingDate),
            endBookingDate: new Date(eventData.endBookingDate),
          }
        });

        return event;
      } catch (err) {
        throw err;
      }
    });

    return trx;
  } catch (err) {
    throw err;
  }
}

const updateEventQuery = async (
  id: number, 
  eventData: IEvent
): Promise<Event> => {
  try {
    const event = await prisma.event.update({
      data: {
        ...eventData,
        eventDate: new Date(eventData.eventDate),
        startBookingDate: new Date(eventData.startBookingDate),
        endBookingDate: new Date(eventData.endBookingDate),
      },
      where: {
        id
      }
    });

    return event;
  } catch (err) {
    throw err;
  }
}

const deleteEventQuery = async (id: number): Promise<Event> => {
  try {
    const event = await prisma.event.delete({
      where: {
        id
      }
    });

    return event;
  } catch (err) {
    throw err;
  }
}

export {
  getEventsQuery,
  getEventByIDQuery,
  getEventBySlugQuery,
  createEventQuery,
  updateEventQuery,
  deleteEventQuery,
}