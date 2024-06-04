import { FC, memo } from "react";
import { Layout } from "../../common/components/layout/Layout";
import { LandingSection } from "./components/sections/LandingSection";
// import { DatabaseSection } from "./components/DatabaseSection";
import { StatisticsSection } from "./components/sections/statisticsSection/StatisticsSection";
// import { ApproachSection } from "./components/ApproachSection";
import { PricingSection } from "./components/sections/pricingSection/PricingSection";
import { ComparisonSection } from "./components/sections/comparisonSection/ComparisonSection";
import { ReviewsSection } from "./components/sections/reviewsSection/ReviewsSection";

export const HomePage: FC = memo(() => {
  return (
    <Layout>
      <LandingSection />
      {/* <DatabaseSection /> */}
      <StatisticsSection />
      {/* <ApproachSection /> */}
      <ComparisonSection />
      <ReviewsSection />
      <PricingSection />
    </Layout>
  );
});

HomePage.displayName = "HomePage";
