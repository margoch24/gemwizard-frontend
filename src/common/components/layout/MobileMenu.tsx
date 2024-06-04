import { useLocaleContext } from "common/hooks/localeContext";
import { Languages } from "common/types/locale";
import { FC, memo } from "react";
import { SubtitleColor, TitlesStyles } from "styles/constants";
import { Button } from "../wrappers/buttons/Button";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ButtonTheme } from "common/types/components/button";

export const MobileMenu: FC<{
  toggleLanguage: () => void;
}> = memo(({ toggleLanguage }) => {
  const { language } = useLocaleContext();
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="fixed w-full top-[87px] h-screen left-0 bg-[#F1F2F6]">
      <div className="w-[90%] mx-auto mt-10">
        <h2
          onClick={toggleLanguage}
          className={`${TitlesStyles.subtitle} cursor-pointer`}
          style={{ color: SubtitleColor }}
        >
          {language === Languages.LT ? Languages.EN : Languages.LT}
        </h2>
        <Button
          title={t("headerButton")}
          limitedWidthMobile={true}
          onClick={() => navigate("/contact-us")}
          theme={ButtonTheme.Dark}
        />
      </div>
    </div>
  );
});

MobileMenu.displayName = "MobileMenu";
