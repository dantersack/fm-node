import { Product } from "@prisma/client";
import { Request, Response } from "express";

import prisma from "../db";

export const getAllProducts = async (req: Request, res: Response) => {
  const products: Product[] = await prisma.product.findMany({
    where: {
      belongsToId: req.user.id,
    },
  });

  res.status(200).json({ data: products });
};

export const getOneProduct = async (req: Request, res: Response) => {
  const product: Product = await prisma.product.findUnique({
    where: {
      id: req.params.id,
    },
  });

  res.status(200).json({ data: product });
};

export const createProduct = async (req: Request, res: Response) => {
  const product: Product = await prisma.product.create({
    data: {
      name: req.body.name,
      belongsToId: req.user.id,
    },
  });

  res.status(201).json({ message: "Product created", data: product });
};

export const updateProduct = async (req: Request, res: Response) => {
  const product: Product = await prisma.product.update({
    where: {
      id: req.params.id,
    },
    data: {
      name: req.body.name,
    },
  });

  res.status(200).json({ message: "Product updated", data: product });
};

export const deleteProduct = async (req: Request, res: Response) => {
  const product: Product = await prisma.product.delete({
    where: {
      id: req.params.id,
    },
  });

  res.status(200).json({ message: "Product deleted", data: product });
};
