import { body } from "express-validator";

export const productValidator = [
  body("name").isString().isLength({ min: 5, max: 50 }),
];
