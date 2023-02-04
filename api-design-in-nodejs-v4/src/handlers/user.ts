import { Request, Response } from "express";

import prisma from "../db";
import { comparePasswords, createToken, hashPassword } from "../auth";

export const createNewUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { username, password }: { username: string; password: string } =
    req.body;

  if (!username || !password) {
    res.status(400);
    res.json({ message: "Missing username or password!" });
    return;
  }

  const hash: string = await hashPassword(password);

  const user = await prisma.user.create({
    data: {
      username: username,
      password: hash,
    },
  });

  const token: string = createToken(user);

  res.status(200).json({ token });
};

export const signIn = async (req: Request, res: Response): Promise<void> => {
  const { username, password }: { username: string; password: string } =
    req.body;

  if (!username || !password) {
    res.status(400);
    res.json({ message: "Missing username or password!" });
    return;
  }

  const user = await prisma.user.findUnique({
    where: { username: username },
  });

  if (!user) {
    res.status(401);
    res.json({ message: "Invalid username or password!" });
    return;
  }

  const isValid: boolean = await comparePasswords(password, user.password);

  if (!isValid) {
    res.status(401);
    res.json({ message: "Invalid username or password!" });
    return;
  }

  const token: string = createToken(user);

  res.status(200).json({ token });
};
