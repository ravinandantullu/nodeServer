import { CreateUser } from "../service/user.service";
import { Request, Response } from "express";
import { omit } from "lodash";
import log from "../logger";

export async function CreateUserHandler(req: Request, res: Response) {
  try {
    const user = await CreateUser(req.body);

    return res.send(omit(user.toJson(), "password"));
  } catch (e) {
    let error = "User cretion error please try again";
    log.error(error);
    return res.status(409).send(error);
  }
}
