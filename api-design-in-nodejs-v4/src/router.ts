import { Request, Response, Router } from "express";

import { productValidator } from "./utils/validators";
import { handleInputErrors } from "./utils/middlewares";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
} from "./handlers/product";

const router: Router = Router();

/**
 * Product
 */
router.get("/product", getAllProducts);
router.get("/product/:id", getOneProduct);
router.post("/product", productValidator, handleInputErrors, createProduct);
router.put("/product/:id", productValidator, handleInputErrors, updateProduct);
router.delete("/product/:id", deleteProduct);

/**
 * Update
 */
router.get("/update", (req: Request, res: Response) => {});
router.get("/update/:id", (req: Request, res: Response) => {});
router.post("/update", (req: Request, res: Response) => {});
router.put("/update/:id", (req: Request, res: Response) => {});
router.delete("/update/:id", (req: Request, res: Response) => {});

/**
 * Update Point
 */
router.get("/updatePoint", (req: Request, res: Response) => {});
router.get("/updatePoint/:id", (req: Request, res: Response) => {});
router.post("/updatePoint", (req: Request, res: Response) => {});
router.put("/updatePoint/:id", (req: Request, res: Response) => {});
router.delete("/updatePoint/:id", (req: Request, res: Response) => {});

export default router;
