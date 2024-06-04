export enum PLANS_BILLING_CYCLE_ENUM {
  Forever = "forever",
  Monthly = "monthly",
  OneOff = "one-off",
}

export type BillingCycleType =
  PLANS_BILLING_CYCLE_ENUM[keyof PLANS_BILLING_CYCLE_ENUM];

export type PricingPlan = {
  _id: string;
  title: string;
  subtitle: string;
  price: number;
  priceDetails: string;
  currency: string;
  description: string;
  billingCycle: string;
  recommended: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export const PLANS_BILLING_CYCLES_CONFIG: { [key: string]: string } = {
  [PLANS_BILLING_CYCLE_ENUM.Forever]: "pricingSection.billinCycles.forever",
  [PLANS_BILLING_CYCLE_ENUM.Monthly]: "pricingSection.billinCycles.monthly",
  [PLANS_BILLING_CYCLE_ENUM.OneOff]: "pricingSection.billinCycles.oneOffFee",
};
