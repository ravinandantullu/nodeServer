import { NextFunction, Request, Response } from "express";
import { AnySchema } from "yup";
import log from "../logger";

const validate =
  async (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      return next();
    } catch (error) {
      log.error("Error while validating the request objects");
      return res.status(400).send(error);
    }
  };
