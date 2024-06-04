import { CSSProperties } from "react";

export type NavLinkModel = {
  path?: string;
  title: string;
  type?: string;
  tailwindStyles?: string;
  titleTailwindStyles?: string;
  targetBlank?: boolean;
  titleStyles?: CSSProperties;
};

export enum LinkType {
  Dropdown = "dropdown",
  SimpleLink = "simple_link",
}
