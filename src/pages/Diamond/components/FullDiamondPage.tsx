import { FC, memo } from "react";
import { DiamondDetailsSection } from "./sections/DiamondDetailsSection";
import { Diamond } from "common/types/diamonds";
import { MainSectionDesktop } from "./sections/mainSection/MainSectionDesktop";
import { MainSectionMobile } from "./sections/mainSection/MainSectionMobile";
import { MainSection } from "./sections/mainSection/MainSection";

export const FullDiamondPage: FC<{
  diamond: Diamond;
}> = memo(({ diamond }) => {
  return (
    <div>
      <MainSection diamond={diamond} />
      <DiamondDetailsSection diamond={diamond} />
    </div>
  );
});

FullDiamondPage.displayName = "FullDiamondPage";
