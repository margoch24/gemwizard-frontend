import { FC, memo, useState } from "react";
import { useTranslation } from "react-i18next";
import { BsChatFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { BackgroundColor, MainColor } from "styles/constants";
import { SupportChatButtonDesktop } from "./SupportChatButton";
import { SupportChatButtonMobile } from "./SupportChatButtonMobile";

export const SupportChatButton: FC = memo(() => {
  return (
    <div>
      <SupportChatButtonDesktop />
      <SupportChatButtonMobile />
    </div>
  );
});

SupportChatButton.displayName = "SupportChatButton";
