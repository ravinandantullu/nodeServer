import { Express, Request, Response } from "express";
import { CreateUserHandler } from "./controller/user.controller";

export default function (app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  // app.post("/api/users", validateRequest(createUserSchema), CreateUserHandler);
}
