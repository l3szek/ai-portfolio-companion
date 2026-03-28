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
  holdings: Holding[];
}

export type Insight = string;
