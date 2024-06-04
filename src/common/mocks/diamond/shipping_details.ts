import { RiArrowGoBackLine } from "react-icons/ri";
import { IconType } from "react-icons";
import { PiTruck } from "react-icons/pi";
import { AiOutlineSafety } from "react-icons/ai";
import { GoCreditCard } from "react-icons/go";

export const ShippingDetails: { title: string; Icon: IconType }[] = [
  {
    Icon: RiArrowGoBackLine,
    title: "diamondPage.mainSection.shippingDetails.diamondReturn",
  },
  {
    Icon: PiTruck,
    title: "diamondPage.mainSection.shippingDetails.shipping",
  },
  {
    Icon: AiOutlineSafety,
    title: "diamondPage.mainSection.shippingDetails.warranty",
  },
  {
    Icon: GoCreditCard,
    title: "diamondPage.mainSection.shippingDetails.finance",
  },
];
