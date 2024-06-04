import { FC, memo, useState } from "react";
import { useTranslation } from "react-i18next";
import { BsChatFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { BackgroundColor, MainColor } from "styles/constants";

export const SupportChatButtonDesktop: FC = memo(() => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleMouseEnter = () => {
    setIsButtonHovered(true);
  };

  const handleMouseLeave = () => {
    setIsButtonHovered(false);
  };

  return (
    <div
      className={`h-[70px] fixed bottom-[30px] cursor-pointer right-[30px] sm:flex hidden flex-row items-center space-x-5 px-5 `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => navigate("/support")}
    >
      <h2
        className={`md:text-lg text-[14px] text-white z-20 transition-all duration-300 ${
          isButtonHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        {t("supportChatButton")}
      </h2>

      <BsChatFill
        style={{ height: "inherit" }}
        className="z-20"
        size={30}
        color="white"
      />
      <div
        className={`h-[70px] absolute w-[70px] right-0 rounded-full border transition-all duration-300  ${
          isButtonHovered ? "!w-full" : ""
        }`}
        style={{ backgroundColor: MainColor, borderColor: BackgroundColor }}
      ></div>
    </div>
  );
});

SupportChatButtonDesktop.displayName = "SupportChatButtonDesktop";
