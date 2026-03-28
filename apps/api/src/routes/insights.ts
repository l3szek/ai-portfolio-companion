import { Router, Request, Response } from "express";
import { getInsights } from "../services/insights.service";

const router = Router();

router.get("/", (_req: Request, res: Response) => {
  res.json(getInsights());
});

export default router;
