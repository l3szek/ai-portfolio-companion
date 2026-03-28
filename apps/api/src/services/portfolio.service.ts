import { mockHoldings } from "../data/mock-portfolio";
import {
  HoldingWithMetrics,
  PortfolioSummary,
} from "../domain/portfolio.types";

export function getPortfolioSummary(): PortfolioSummary {
  const holdings: HoldingWithMetrics[] = mockHoldings.map((h) => ({
    ...h,
    marketValue: h.quantity * h.currentPrice,
    gainLoss: (h.currentPrice - h.avgCostBasis) * h.quantity,
  }));

  const totalValue = holdings.reduce((sum, h) => sum + h.marketValue, 0);
  const totalGainLoss = holdings.reduce((sum, h) => sum + h.gainLoss, 0);
  const dailyChange = 1.8; // mock daily change amount (USD)

  return { totalValue, dailyChange, totalGainLoss, holdings };
}
