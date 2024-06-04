import { Logo } from "common/components/wrappers/Logo";
import { footerNavLinks } from "common/constants";
import { LogoSizes, LogoTypes } from "common/types/components/logo";
import { FC, memo } from "react";
import { useNavigate } from "react-router-dom";
import { MainColor, TitleFont } from "styles/constants";

export const FooterNavBar: FC = memo(() => {
  const navigate = useNavigate();

  return (
    <div className="bg-white sm:h-[67px] h-[110px] relative z-50">
      <div className="flex sm:flex-row flex-col sm:items-center items-baseline sm:justify-between justify-center h-full px-5 sm:px-8">
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <Logo type={LogoTypes.DarkWithTitle} size={LogoSizes.sm} />
        </div>
        <div className="flex flex-row items-center sm:space-x-10 space-x-5 sm:mt-0 mt-5">
          {footerNavLinks.map(({ path, title }, index) => (
            <div
              className="cursor-pointer"
              key={index}
              onClick={() => navigate(path)}
            >
              <h2
                className="font-[500] text-[15px]"
                style={{ fontFamily: TitleFont, color: MainColor }}
              >
                {title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

FooterNavBar.displayName = "FooterNavBar";
