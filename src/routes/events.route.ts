import express from "express";
import { createEventController, deleteEventController, getEventByIDController, getEventBySlugController, getEventsController, updateEventController } from "../controllers/events.controller";

const router = express.Router();

router.route("/")
  .get(getEventsController)
  .post(createEventController);

router.route("/:id")
  .get(getEventByIDController)
  .patch(updateEventController)
  .delete(deleteEventController);

router.route("/slug/:slug")
  .get(getEventBySlugController);

export default router;