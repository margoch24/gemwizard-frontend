import { FC, memo } from "react";
import { BackgroundColor, TitleFont } from "../../../../styles/constants";
import { Logo } from "../../../../common/components/wrappers/Logo";
import { Button } from "../../wrappers/buttons/Button";
import { ButtonTheme } from "../../../../common/types/components/button";
import { LogoSizes, LogoTypes } from "../../../../common/types/components/logo";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const FooterHeading: FC = memo(() => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="pt-[100px] text-center">
      <div className="mb-12">
        <Logo type={LogoTypes.Light} size={LogoSizes.xl} />
      </div>

      <h1
        className="font-[400] sm:text-[64px] text-[36px] tracking-wide mb-20"
        style={{ color: BackgroundColor, fontFamily: TitleFont }}
      >
        {t("footerSection.footerHeading.titlePart1")}
        <br />
        {t("footerSection.footerHeading.titlePart2")}
        <br />
        <span className="font-[500] italic">
          {t("footerSection.footerHeading.titleBold")}
        </span>
      </h1>

      <Button
        limitedWidthMobile={true}
        onClick={() => navigate("/contact-us")}
        centered={true}
        title={t("footerSection.footerHeading.button")}
        theme={ButtonTheme.Light}
      />
    </div>
  );
});

FooterHeading.displayName = "FooterHeading";
