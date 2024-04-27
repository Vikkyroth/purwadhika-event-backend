import { Request, Response, NextFunction } from "express";
import { createEventAction, deleteEventAction, getEventByIDAction, getEventBySlugAction, getEventsAction, updateEventAction } from "../actions/events.action";

const getEventsController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    // const filters = req.query;
    const data = await getEventsAction();

    res.status(200).json({
      message: "Get events success",
      data
    });
  } catch (err) {
    next(err);
  }
}

const getEventByIDController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const data = await getEventByIDAction(Number(id));

    res.status(200).json({
      message: "Get event success",
      data
    });
  } catch (err) {
    next(err);
  }
}

const getEventBySlugController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { slug } = req.params;
    const data = await getEventBySlugAction(slug);

    res.status(200).json({
      message: "Get event success",
      data
    });
  } catch (err) {
    next(err);
  }
}

const createEventController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const data = await createEventAction(req.body);

    res.status(200).json({
      message: "Create event success",
      data
    });
  } catch (err) {
    next(err);
  }
}

const updateEventController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const data = await updateEventAction(Number(id), req.body);

    res.status(200).json({
      message: "Update event success",
      data
    });
  } catch (err) {
    next(err);
  }
}

const deleteEventController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const data = await deleteEventAction(Number(id));

    res.status(200).json({
      message: "Delete event success",
      data
    });
  } catch (err) {
    next(err);
  }
}

export {
  getEventsController,
  getEventByIDController,
  getEventBySlugController,
  createEventController,
  updateEventController,
  deleteEventController,
}
