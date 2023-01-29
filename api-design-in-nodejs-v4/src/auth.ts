import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import { User } from "./types/custom";

export const comparePasswords = (
  password: string,
  hash: string
): Promise<boolean> => {
  return bcrypt.compare(password, hash);
};

export const hashPassword = (password: string): Promise<string> => {
  return bcrypt.hash(password, 5);
};

export const createToken = (user: User): string => {
  const token: string = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET
  );
  return token;
};

export const protect = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const bearer: string = req.headers.authorization;

    if (!bearer) {
      res.status(401);
      res.json({ message: "Not authorized!" });
      return;
    }

    const [, token]: string[] = bearer.split(" ");

    if (!token) {
      res.status(401);
      res.json({ message: "Missing token!" });
      return;
    }

    const user = <User>jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;

    next();
  } catch (err) {
    res.status(401);
    res.json({ message: `Not authorized! - ${err.message}` });
    return;
  }
};
