import { Request, Response, Router } from "express";

const router: Router = Router();

/**
 * Product
 */
router.get("/product", (req: Request, res: Response) => {
  res.json({ msg: "hello world" });
});
router.get("/product/:id", (req: Request, res: Response) => {});
router.post("/product/:id", (req: Request, res: Response) => {});
router.put("/product/:id", (req: Request, res: Response) => {});
router.delete("/product/:id", (req: Request, res: Response) => {});

/**
 * Update
 */
router.get("/update", (req: Request, res: Response) => {});
router.get("/update/:id", (req: Request, res: Response) => {});
router.post("/update/:id", (req: Request, res: Response) => {});
router.put("/update/:id", (req: Request, res: Response) => {});
router.delete("/update/:id", (req: Request, res: Response) => {});

/**
 * Update Point
 */
router.get("/updatePoint", (req: Request, res: Response) => {});
router.get("/updatePoint/:id", (req: Request, res: Response) => {});
router.post("/updatePoint/:id", (req: Request, res: Response) => {});
router.put("/updatePoint/:id", (req: Request, res: Response) => {});
router.delete("/updatePoint/:id", (req: Request, res: Response) => {});

export default router;
