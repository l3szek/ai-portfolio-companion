import { Holding } from "../domain/portfolio.types";

export const mockHoldings: Holding[] = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    quantity: 50,
    avgCostBasis: 145.0,
    currentPrice: 189.5,
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    quantity: 20,
    avgCostBasis: 120.0,
    currentPrice: 165.3,
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corporation",
    quantity: 30,
    avgCostBasis: 280.0,
    currentPrice: 415.8,
  },
  {
    symbol: "AMZN",
    name: "Amazon.com Inc.",
    quantity: 15,
    avgCostBasis: 130.0,
    currentPrice: 185.2,
  },
  {
    symbol: "TSLA",
    name: "Tesla Inc.",
    quantity: 25,
    avgCostBasis: 220.0,
    currentPrice: 248.5,
  },
  {
    symbol: "NVDA",
    name: "NVIDIA Corporation",
    quantity: 40,
    avgCostBasis: 450.0,
    currentPrice: 875.6,
  },
];
