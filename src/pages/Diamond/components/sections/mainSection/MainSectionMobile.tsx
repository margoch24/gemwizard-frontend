import { FC, memo } from "react";
import { Diamond, Photo, Price } from "common/types/diamonds";
import { MainInfoComponent } from "./MainInfoComponent";
import { ShippingDetailsComponent } from "./ShippingDetailsComponent";
import { GridDetailsBlock } from "../../blocks/GridDetailsBlock";
import { MainDiamondDetailsBlocks } from "common/mocks/diamond/main_diamond_details_blocks";
import { Button } from "common/components/wrappers/buttons/Button";
import { ButtonTheme } from "common/types/components/button";
import { InterFont } from "styles/constants";
import { PhotoComponent } from "./PhotoComponent";

export const MainSectionMobile: FC<{
  photos: Photo[];
  imageURL: string;
  certificateId: string;
  type: string;
  priceProperties: Price;
  diamond: Diamond;
  affiliateLink: string;
  buttonTitle: string;
}> = memo(
  ({
    photos,
    imageURL,
    certificateId,
    type,
    priceProperties,
    diamond,
    affiliateLink,
    buttonTitle,
  }) => {
    return (
      <div className="max-w-[550px] mx-auto sm:hidden mb-10">
        <div className="space-y-5">
          <MainInfoComponent
            certificateId={certificateId}
            type={type}
            priceProperties={priceProperties}
          />
          <div>
            <PhotoComponent photos={photos} imageURL={imageURL} />
          </div>
          {MainDiamondDetailsBlocks.map(({ details }, index) => (
            <GridDetailsBlock key={index} diamond={diamond} details={details} />
          ))}
          <ShippingDetailsComponent />
          {affiliateLink && (
            <Button
              theme={ButtonTheme.Dark}
              title={buttonTitle}
              titleFontFamily={InterFont}
              titleWide={true}
              onClick={() => window.open(affiliateLink, "_blank")}
            />
          )}
        </div>
      </div>
    );
  }
);

MainSectionMobile.displayName = "MainSectionMobile";
