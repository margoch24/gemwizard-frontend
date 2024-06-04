import { IoDiamondOutline } from "react-icons/io5";
import { ApproachCardType } from "../types/home";
import { DiamondType } from "common/types/diamonds";
import {
  FooterLinks,
  FooterNavLink,
  FooterNavLinkTypes,
} from "common/types/components/footer";
import { Languages } from "common/types/locale/index";
import { ViewTypeEnum } from "common/types/search_diamonds";
const { CONTACT_EMAIL, CONTACT_PHONE } = process.env;

export const DEFAULT_LANGUAGE = Languages.LT;

export const DIAMONDS_LIMIT = 50;

export const INITIAL_DIAMONDS_VIEW_TYPE = ViewTypeEnum.List;

export const footerNavLinks: FooterNavLink[] = [
  {
    path: "/pricing",
    title: "Pricing",
  },
  {
    path: "/company",
    title: "Company",
  },
  {
    path: "/search-diamonds",
    title: "Search Diamonds",
  },
];

export const footerLinks: FooterLinks[] = [
  {
    title: "footerLinksSection.contacts",
    links: [
      {
        href: `mailto:${CONTACT_EMAIL}`,
        title: CONTACT_EMAIL,
        type: FooterNavLinkTypes.SimpleHyperLink,
      },
      {
        href: `tel:${CONTACT_PHONE}`,
        title: CONTACT_PHONE,
        type: FooterNavLinkTypes.SimpleHyperLink,
      },
    ],
  },
];

export const ApproachCards: ApproachCardType[] = [
  {
    id: "01",
    description:
      "Get our handpicked diamonds from the world's top retailers and wholesalers.",
  },
  {
    id: "02",
    description:
      "Our AI & ML tech reassesses to guarantee you're getting the cream of the crop.",
  },
  {
    id: "03",
    description:
      "Need a hand? We'll guide you to your perfect stone, no sweat.",
  },
];

export const DIAMONDS_TABLE_TITLES = [
  {
    Icon: IoDiamondOutline,
    centered: true,
  },
  {
    title: "",
  },
  {
    title: "Shape",
    sort: true,
    key: "shape",
    group: "characteristics",
    capitalize: true,
  },
  {
    title: "Carat",
    sort: true,
    key: "carat",
    group: "dimensions",
  },
  {
    title: "Color",
    sort: true,
    key: "color",
    group: "characteristics",
  },
  {
    title: "Clarity",
    sort: true,
    key: "clarity",
    group: "characteristics",
  },
  {
    title: "Flour.",
    sort: true,
    key: "fluorescence",
    group: "characteristics",
    capitalize: true,
  },
  {
    title: "Price",
    sort: true,
  },
  {
    title: "Quick View",
    centered: true,
    mobileHidden: true,
  },
];

export const INITIAL_FILTERS = {
  type: DiamondType.LabGrown,
  shape: "round",
  price: {
    min: 500,
    max: 5000,
  },
  cutGrade: ["none", "fair", "good", "very good", "excellent"],
  carat: {
    min: 0.45,
    max: 2.45,
  },
  clarity: ["SI2", "SI1", "VS2", "VS1", "VVS2", "VVS1", "IF"],
  color: ["K", "J", "I", "H", "G", "F", "E"],
  tablePercentage: {
    min: 4,
    max: 84,
  },
  depthPercentage: {
    min: 50,
    max: 90,
  },
  fluorescence: ["none", "negligible", "faint", "medium"],
};

export const Currencies = {
  "€": "EUR",
  $: "USD",
};

export const COMPARISON_FEATURES = {
  retai: {
    carats: "0.5 ct",
    color: "H",
    cut: "VS2",
    clarity: {
      [Languages.EN]: "Excellent",
      [Languages.LT]: "Puikus (Excellent)",
    },
    certificate: "IGI",
    price: "3,350",
    currency: Currencies["€"],
  },
  gemwiz: {
    carats: "0.56 Ct",
    color: "I",
    cut: "VS1",
    clarity: "Excellent +",
    certificate: "GIA",
    price: "2,300",
    currency: Currencies.$,
  },
};

export const COMPARISON_FEATURES_LIST = [
  {
    title: "comparisonSection.tableBody.carats",
    key: "carats",
  },
  {
    title: "comparisonSection.tableBody.color",
    key: "color",
  },
  {
    title: "comparisonSection.tableBody.cut",
    key: "cut",
  },
  {
    title: "comparisonSection.tableBody.clarity",
    key: "clarity",
  },
  {
    title: "comparisonSection.tableBody.certificate",
    key: "certificate",
  },
];

export enum ValidationErrorMessages {
  FieldRequired = "validationErrorMessages.fieldRequired",
  ValidEmailRequired = "validationErrorMessages.validEmailRequired",
}
