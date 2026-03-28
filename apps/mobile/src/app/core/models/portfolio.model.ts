export interface Holding {
  symbol: string;
  name: string;
  quantity: number;
  avgCostBasis: number;
  currentPrice: number;
  marketValue: number;
  gainLoss: number;
}

export interface PortfolioSummary {
  totalValue: number;
  dailyChange: number;
  totalGainLoss: number;
  holdings: Holding[];
}
