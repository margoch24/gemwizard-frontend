import { IconType } from "react-icons";

export type FooterLinks = {
  title: string;
  links: FooterNavLinkModel[];
  socialNetworks?: SocialNetworkModel[];
};

export type FooterNavLink = {
  title: string;
  path: string;
};

export type FooterNavLinkModel = {
  title: string;
  path?: string;
  type: string;
  href?: string;
};

type SocialNetworkModel = {
  Icon: IconType;
  link: string;
};

export enum FooterNavLinkTypes {
  NavLink = "navLink",
  SimpleHyperLink = "simpleHyperLink",
}
