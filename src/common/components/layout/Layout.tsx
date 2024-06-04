import { FC, ReactNode, memo } from "react";
import { Header } from "./Header";
import { BackgroundColor } from "../../../styles/constants";
import { Footer } from "./footer.tsx";
import { SupportChatButton } from "../wrappers/supportChatButton/index";

interface LayoutProps {
  children: ReactNode;
  footer?: boolean;
  showChatButton?: boolean;
}

export const Layout: FC<LayoutProps> = memo(
  ({ children, footer = true, showChatButton = false }) => (
    <div>
      <div className={`bg-[${BackgroundColor}]`}>
        <Header />
        <div>{children}</div>
      </div>
      {footer && <Footer />}
      {showChatButton && <SupportChatButton />}
    </div>
  )
);

Layout.displayName = "Layout";
