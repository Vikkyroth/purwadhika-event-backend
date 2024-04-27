import express from "express";
import { createEventController, deleteEventController, getEventController, getEventsController, updateEventController } from "../controllers/events.controller";

const router = express.Router();

router.route("/")
  .get(getEventsController)
  .post(createEventController);

router.route("/:id")
  .get(getEventController)
  .patch(updateEventController)
  .delete(deleteEventController);

export default router;