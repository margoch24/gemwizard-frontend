import { FC, memo } from "react";
import { Diamond, Photo, Price } from "common/types/diamonds";
import { MainInfoComponent } from "./MainInfoComponent";
import { ShippingDetailsComponent } from "./ShippingDetailsComponent";
import { Button } from "common/components/wrappers/buttons/Button";
import { ButtonTheme } from "common/types/components/button";
import { InterFont } from "styles/constants";
import { MainDiamondDetailsBlocks } from "common/mocks/diamond/main_diamond_details_blocks";
import { GridDetailsBlock } from "../../blocks/GridDetailsBlock";
import { PhotoComponent } from "./PhotoComponent";

export const MainSectionDesktop: FC<{
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
      <div className="sm:flex hidden min-[1040px]:flex-row flex-col xl:space-x-14 min-[1040px]:space-x-5 mb-10 justify-center">
        <div
          className={`${
            photos?.length
              ? "flex-1"
              : "md:w-[600px] max-w-[600px] min-w-[500px] max-[1039px]:mx-auto"
          }`}
        >
          <PhotoComponent photos={photos} imageURL={imageURL} />
        </div>
        <div
          className={`max-w-[550px] min-w-[500px] ${
            photos?.length ? "flex-1" : ""
          }  mx-auto 2xl:flex-[0.7] space-y-5`}
        >
          <MainInfoComponent
            certificateId={certificateId}
            type={type}
            priceProperties={priceProperties}
          />
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

MainSectionDesktop.displayName = "MainSectionDesktop";
