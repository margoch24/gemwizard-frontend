import { FC, memo } from "react";
import { Layout } from "../../common/components/layout/Layout";
import { Container } from "common/components/wrappers/Container";
import { HeadingSection } from "./components/sections/HeadingSection";
import { FiltersSection } from "./components/sections/FiltersSection";
import { DiamondsSection } from "./components/sections/diamondsSection/DiamondsSection";
import { LightColor } from "styles/constants";
import { AdvancedFiltersSection } from "./components/sections/advancedFiltersSection/AdvancedFiltersSection";

export const SearchDiamondsPage: FC = memo(() => {
  return (
    <Layout footer={false}>
      <Container styles={{ backgroundColor: LightColor }}>
        <div className="md:pt-[250px] pt-[150px]">
          <HeadingSection />
          <FiltersSection />
          <div className="flex lg:flex-row flex-col lg:space-x-5 mt-7">
            <AdvancedFiltersSection />
            <DiamondsSection />
          </div>
        </div>
      </Container>
    </Layout>
  );
});

SearchDiamondsPage.displayName = "SearchDiamondsPage";
