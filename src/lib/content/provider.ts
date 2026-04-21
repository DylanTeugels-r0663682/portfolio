import { unstable_cache } from "next/cache";
import { PortfolioSchema, type Portfolio } from "./schema";
import raw from "./data.json";

export const getPortfolio = unstable_cache(
  async (): Promise<Portfolio> => PortfolioSchema.parse(raw),
  ["portfolio"],
  { tags: ["portfolio"] }
);
