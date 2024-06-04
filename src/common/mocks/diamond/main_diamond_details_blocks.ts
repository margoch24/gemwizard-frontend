import { Diamond, DiamondDetailBlock } from "common/types/diamonds";
import {
  addCurrency,
  editNumberValue,
  editStringValue,
} from "common/utils/valuesCorrections";

export const MainDiamondDetailsBlocks: DiamondDetailBlock[] = [
  {
    details: [
      {
        propertyGroup: "priceProperties",
        propertyKey: "fairPrice",
        editPropertyValue: addCurrency,
      },
      {
        propertyGroup: "characteristics",
        propertyKey: "cutScore",
        editPropertyValue: editNumberValue,
      },
      {
        propertyGroup: "characteristics",
        propertyKey: "cutGrade",
        editPropertyValue: editStringValue,
      },
      {
        propertyKey: "seller",
        editPropertyValue: editStringValue,
      },
    ],
  },
  {
    details: [
      {
        propertyGroup: "priceProperties",
        propertyKey: "estimateRange",
        editPropertyValue: ({
          value,
          diamond,
        }: {
          value?: { min: number; max: number } | null;
          diamond?: Diamond;
        }) => {
          if (!value) {
            return "None";
          }
          const { min, max } = value;
          return `${addCurrency({ diamond, value: min })} - ${addCurrency({
            diamond,
            value: max,
          })}`;
        },
      },
      {
        propertyGroup: "priceProperties",
        propertyKey: "priceDetails",
        editPropertyValue: editStringValue,
      },
      {
        propertyKey: "diamondURL",
        title: "diamondPage.mainSection.mainDetails.interactiveCertificate",
        useUrl: true,
      },
    ],
  },
];
