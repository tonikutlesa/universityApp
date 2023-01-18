import { RequestHandler } from "express";

export const exampleMiddleware: RequestHandler = (req, res, next) => {
  console.log("Accessed getStudents route");
  next();
};
