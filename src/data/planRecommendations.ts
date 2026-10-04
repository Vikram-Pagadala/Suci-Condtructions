// Summaries of existing inclusions in packages.ts and pricingDifferences.ts.
export const planRecommendations: Record<string, { bestFor: string; benefits: string[] }> = {
  basic: {
    bestFor: "rental homes and essential finishes",
    benefits: ["The same structural engineering as every plan", "Aluminium windows and a stainless steel kitchen sink", "Anti-skid tiles for balconies and parking"],
  },
  "value-added": {
    bestFor: "your first family home",
    benefits: ["UPVC windows with mosquito mesh", "Teak pooja room door included within the package allowance", "Bathroom mirror, soap dish and towel rail allowance"],
  },
  premium: {
    bestFor: "a long-term family home",
    benefits: ["Solar water heater and UPS wiring provisions", "Stainless steel staircase railing", "Stainless steel or granite-finish kitchen sink option"],
  },
  elite: {
    bestFor: "villas and luxury homes",
    benefits: ["EV charging point at the ground floor", "Stainless steel and glass staircase railing", "Copper gas connection and Royale Luxury interior paint"],
  },
};
