import {
  addCarat,
  editAngle,
  editArray,
  editDate,
  editDiamondMeasurements,
  editNumberValue,
  editPercentage,
  editStringValue,
} from "common/utils/valuesCorrections";
import { DiamondDetailBlock } from "common/types/diamonds";

export const DiamondDetailsBlocks: DiamondDetailBlock[] = [
  {
    title: "diamondPage.diamondDetailsSection.detailsBlocksTitles.reportDetail",
    details: [
      {
        propertyKey: "certLaboratory",
      },
      {
        propertyKey: "reportNumber",
      },
      {
        propertyKey: "certificateDate",
        editPropertyValue: editDate,
      },
    ],
  },
  {
    title: "diamondPage.diamondDetailsSection.detailsBlocksTitles.dimensions",
    details: [
      {
        propertyKey: "lengthWidthRatio",
        propertyGroup: "dimensions",
        editPropertyValue: editNumberValue,
      },
      {
        propertyKey: "measurements",
        propertyGroup: "dimensions",
        editPropertyValue: editDiamondMeasurements,
      },
      {
        propertyKey: "carat",
        propertyGroup: "dimensions",
        editPropertyValue: ({ value }) => {
          const editedValue = editNumberValue({ value });
          return addCarat({ value: editedValue });
        },
      },
      {
        propertyKey: "visualCarat",
        propertyGroup: "dimensions",
        editPropertyValue: ({ value }) => {
          const editedValue = editNumberValue({ value });
          return addCarat({ value: editedValue });
        },
      },
    ],
  },
  {
    title:
      "diamondPage.diamondDetailsSection.detailsBlocksTitles.characteristics",
    details: [
      {
        propertyKey: "shape",
        propertyGroup: "characteristics",
        editPropertyValue: editStringValue,
      },
      {
        propertyKey: "color",
        propertyGroup: "characteristics",
        editPropertyValue: editStringValue,
      },
      {
        propertyKey: "clarity",
        propertyGroup: "characteristics",
        editPropertyValue: editStringValue,
      },
      {
        propertyKey: "fluorescence",
        propertyGroup: "characteristics",
        editPropertyValue: editStringValue,
      },
      {
        propertyKey: "symmetry",
        propertyGroup: "characteristics",
        editPropertyValue: editStringValue,
      },
      {
        propertyKey: "polish",
        propertyGroup: "characteristics",
        editPropertyValue: editStringValue,
      },
    ],
  },
  {
    title: "diamondPage.diamondDetailsSection.detailsBlocksTitles.proportions",
    isWide: true,
    details: [
      {
        propertyKey: "culet",
        propertyGroup: "dimensions",
        editPropertyValue: editStringValue,
      },
      {
        propertyKey: "pavilionAngle",
        propertyGroup: "dimensions",
        editPropertyValue: editAngle,
      },
      {
        propertyKey: "crownAngle",
        propertyGroup: "dimensions",
        editPropertyValue: editAngle,
      },
      {
        propertyKey: "tablePercentage",
        propertyGroup: "dimensions",
        editPropertyValue: editPercentage,
      },
      {
        propertyKey: "depthPercentage",
        propertyGroup: "dimensions",
        editPropertyValue: editPercentage,
      },
      {
        propertyKey: "pavilionDepthPercentage",
        propertyGroup: "dimensions",
        editPropertyValue: editPercentage,
      },
      {
        propertyKey: "crownHeightPercentage",
        propertyGroup: "dimensions",
        editPropertyValue: editPercentage,
      },
      {
        propertyKey: "lowerHalfPercentage",
        propertyGroup: "dimensions",
        editPropertyValue: editPercentage,
      },
      {
        propertyKey: "starLengthPercentage",
        propertyGroup: "dimensions",
        editPropertyValue: editPercentage,
      },
      {
        propertyKey: "girdlePercentage",
        propertyGroup: "dimensions",
        editPropertyValue: editPercentage,
      },
    ],
  },
  {
    title:
      "diamondPage.diamondDetailsSection.detailsBlocksTitles.detailedProperties",
    details: [
      {
        propertyKey: "clarityCharacteristics",
        propertyGroup: "characteristics",
        editPropertyValue: editArray,
      },
      {
        propertyKey: "comments",
        editPropertyValue: editStringValue,
      },
      {
        propertyKey: "inscription",
        editPropertyValue: editStringValue,
      },
    ],
  },
];
