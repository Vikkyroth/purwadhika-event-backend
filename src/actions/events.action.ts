import { Event } from "@prisma/client";
import { createEventQuery, deleteEventQuery, getEventBySlugQuery, getEventQuery, getEventsQuery, updateEventQuery } from "../queries/events.query";
import { HttpException } from "../exceptions/HttpException";
import { IEvent } from "../interfaces/events.interface";

const getEventsAction = async (): Promise<Event[]> => {
  try {
    const events = await getEventsQuery();
    return events;
  } catch (err) {
    throw err;
  }
}

const getEventAction = async (id: number): Promise<Event | null> => {
  try {
    const event = await getEventQuery(id);

    if (!event) throw new HttpException(404, "Data not found");

    return event;
  } catch (err) {
    throw err;
  }
}

const createEventAction = async (eventData: IEvent): Promise<Event> => {
  try {
    const existEvent = await getEventBySlugQuery(eventData.slug);

    if (existEvent) throw new Error("Event slug already exists");

    const event = await createEventQuery(eventData);
    return event;
  } catch (err) {
    throw err;
  }
}

const updateEventAction = async (
  id: number, 
  eventData: IEvent
): Promise<Event> => {
  try {
    const event = await updateEventQuery(id, eventData);
    return event;
  } catch (err) {
    throw err;
  }
}

const deleteEventAction = async (id: number): Promise<Event> => {
  try {
    const event = await deleteEventQuery(id);
    return event;
  } catch (err) {
    throw err;
  }
}

export {
  getEventsAction,
  getEventAction,
  createEventAction,
  updateEventAction,
  deleteEventAction,
}