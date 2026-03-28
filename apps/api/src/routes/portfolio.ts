import { Router, Request, Response } from "express";
import { getPortfolioSummary } from "../services/portfolio.service";

const router = Router();

router.get("/", (_req: Request, res: Response) => {
  res.json(getPortfolioSummary());
});

export default router;
