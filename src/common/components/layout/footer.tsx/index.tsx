import { FC, memo } from "react";
import { FooterLinks } from "./FooterLinks";
import { Container } from "common/components/wrappers/Container";
import { MainColor } from "styles/constants";
import { FooterHeading } from "./FooterHeading";
// import { FooterNavBar } from "./FooterNavBar";

export const Footer: FC = memo(() => {
  return (
    <>
      <Container styles={{ backgroundColor: MainColor }}>
        <FooterHeading />
        <FooterLinks />
      </Container>
      {/* <FooterNavBar /> */}
      <div className="h-[67px] bg-white"></div>
    </>
  );
});

Footer.displayName = "Footer";
