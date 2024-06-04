import { FC, memo, useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import {
  MainColor,
  SubtitleColor,
  TitlesStyles,
} from "../../../styles/constants";
import { useNavigate } from "react-router-dom";
import { Button } from "../wrappers/buttons/Button";
import { ButtonTheme } from "../../types/components/button";
import { Logo } from "../wrappers/Logo";
import { LogoSizes, LogoTypes } from "common/types/components/logo";
import { useTranslation } from "react-i18next";
import { useLocaleContext } from "common/hooks/localeContext";
import { Languages } from "common/types/locale";
import { MobileMenu } from "./MobileMenu";
import { NavHistoryMenu } from "./NavHistoryMenu";

export const Header: FC = memo(() => {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { language, setLanguage } = useLocaleContext();

  const toggleMobileMenu = () => {
    setIsMobileMenuShown(!isMobileMenuShown);
  };

  const toggleLanguage = () => {
    const newLanguage = language === Languages.LT ? Languages.EN : Languages.LT;
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, []);

  return (
    <div className="fixed w-full top-0 z-[90]">
      <div className="w-full md:h-[100px] h-[55px] flex flex-row items-center justify-between px-4 md:px-8 bg-[#F1F2F6]">
        <div
          className="flex flex-row items-center justify-between space-x-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <Logo type={LogoTypes.DarkWithTitle} size={LogoSizes.md} />
        </div>

        <AiOutlineMenu
          onClick={toggleMobileMenu}
          size={20}
          color={MainColor}
          className="absolute top-4 right-4 md:right-8 z-[90] md:hidden cursor-pointer"
        />

        <div className="md:block hidden">
          <div className="flex flex-row items-center space-x-10">
            <Button
              title={t("headerButton")}
              limitedWidthMobile={true}
              onClick={() => navigate("/contact-us")}
              theme={ButtonTheme.Dark}
            />
            <h2
              onClick={toggleLanguage}
              className={`${TitlesStyles.subtitle} !mb-0 cursor-pointer`}
              style={{ color: SubtitleColor }}
            >
              {language === Languages.LT ? Languages.EN : Languages.LT}
            </h2>
          </div>
        </div>

        {isMobileMenuShown && <MobileMenu toggleLanguage={toggleLanguage} />}
      </div>
      <NavHistoryMenu />
    </div>
  );
});

Header.displayName = "Header";
