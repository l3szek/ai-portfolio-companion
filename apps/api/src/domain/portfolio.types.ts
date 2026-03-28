export interface Holding {
  symbol: string;
  name: string;
  quantity: number;
  avgCostBasis: number;
  currentPrice: number;
}

export interface PortfolioSummary {
  totalValue: number;
  dailyChange: number;
  totalGainLoss: number;
  holdings: HoldingWithMetrics[];
}

export interface HoldingWithMetrics extends Holding {
  marketValue: number;
  gainLoss: number;
}
