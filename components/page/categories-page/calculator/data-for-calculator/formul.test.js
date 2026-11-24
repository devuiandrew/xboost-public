import { describe, expect, it } from "vitest";
import { getResults } from "./formul";

const baseInput = {
  subscribers: 1000,
  views: 1000,
  budget: 1000,
  category: "faceless",
  socialNetworks: ["instagram"],
};

describe("getResults", () => {
  it("calculates results for a single platform", () => {
    expect(getResults(baseInput, "en-US")).toMatchObject({
      // 1000 * 0.1 * 1000 * 0.1 (virality) * 0.8 (faceless) * 1.5 (budget bonus) * 0.1 (engagement) * 1
      potentialReach: "1,200",
      subscriberGrowth: "4",
      totalVideos: "33",
      moneySaved: "6,600",
    });
  });

  it("scales reach and videos with the number of platforms", () => {
    const results = getResults(
      { ...baseInput, socialNetworks: ["instagram", "tiktok", "youtube"] },
      "en-US",
    );
    expect(results.potentialReach).toBe("3,600");
    expect(results.totalVideos).toBe("100");
  });

  it("applies the budget bonus tiers", () => {
    const reach = (budget) =>
      getResults({ ...baseInput, budget }, "en-US").potentialReach;
    expect(reach(100)).toBe("400"); // <= lowPrice: x0.5
    expect(reach(500)).toBe("800"); // <= middlePrice: x1
    expect(reach(5000)).toBe("1,600"); // > highPrice: x2
  });

  it("formats numbers for the given locale", () => {
    expect(getResults(baseInput, "ru").moneySaved).toBe("6 600");
  });
});
