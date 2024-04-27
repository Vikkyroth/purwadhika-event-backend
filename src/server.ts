import express, { Application } from "express";
import { API_PORT } from "./config";

import eventsRouter from "./routes/events.route";
import { ErrorMiddleware } from "./middlewares/error.middleware";

const PORT: number = Number(API_PORT) || 8000;

const app: Application = express();

app.use(express.json());

app.use("/events", eventsRouter);

app.use(ErrorMiddleware);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
