import { FC, memo, useState } from "react";
import { useTranslation } from "react-i18next";
import { BsChatFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { BackgroundColor, MainColor } from "styles/constants";

export const SupportChatButtonMobile: FC = memo(() => {
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
      className={`rounded-full border h-[60px] w-[60px] z-30 fixed cursor-pointer bottom-[10px] right-[10px] px-3 sm:hidden block`}
      style={{ backgroundColor: MainColor, borderColor: BackgroundColor }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => navigate("/support")}
    >
      <BsChatFill
        className="mx-auto"
        style={{ height: "inherit" }}
        size={25}
        color="white"
      />
    </div>
  );
});

SupportChatButtonMobile.displayName = "SupportChatButtonMobile";
