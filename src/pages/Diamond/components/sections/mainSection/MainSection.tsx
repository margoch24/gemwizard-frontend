import { FC, memo } from "react";
import { Diamond } from "common/types/diamonds";
import { MainSectionDesktop } from "./MainSectionDesktop";
import { MainSectionMobile } from "./MainSectionMobile";
import { useTranslation } from "react-i18next";

export const MainSection: FC<{
  diamond: Diamond;
}> = memo(({ diamond }) => {
  const {
    certificateId,
    type,
    priceProperties,
    affiliateLink,
    seller,
    photos,
    imageURL,
  } = diamond;
  const { currency, price } = priceProperties;
  const { t } = useTranslation();

  const buttonTitlePricePart = `${currency} ${price?.toLocaleString()}`;
  const buttonTitleAffiliatePart = `${t(
    "diamondPage.mainSection.buttonTitle"
  )} ${seller ? seller : t("diamondPage.mainSection.seller")}`;

  const buttonFullTitle = `${buttonTitleAffiliatePart} • ${buttonTitlePricePart}`;

  return (
    <div>
      <MainSectionDesktop
        certificateId={certificateId}
        type={type}
        affiliateLink={affiliateLink}
        photos={photos}
        imageURL={imageURL}
        diamond={diamond}
        priceProperties={priceProperties}
        buttonTitle={buttonFullTitle}
      />
      <MainSectionMobile
        certificateId={certificateId}
        type={type}
        affiliateLink={affiliateLink}
        photos={photos}
        imageURL={imageURL}
        diamond={diamond}
        priceProperties={priceProperties}
        buttonTitle={buttonFullTitle}
      />
    </div>
  );
});

MainSection.displayName = "MainSection";
