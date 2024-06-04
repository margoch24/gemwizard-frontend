export type Diamond = {
  _id: string;
  certificateId: string;
  diamondURL?: string;
  certLaboratory: string;
  certificateDate: string;
  type: string;
  imageURL: string;
  affiliateLink?: string;
  reportNumber: string;
  inscription: string;
  comments: string;
  isDeleted: boolean;
  dimensions: Dimensions;
  characteristics: Characteristics;
  prices?: Price[];
  priceProperties?: Price;
  createdAt: Date;
  updatedAt: Date;
  seller: string;
  photos: Photo[];
};

export type Photo = {
  url: string;
};

export type Price = {
  _id: string;
  diamondId: string;
  date: string;
  price: number;
  estimateRange: {
    min: number;
    max: number;
  };
  fairPrice: number;
  priceDetails: string;
  currency: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Measurements = {
  length: number;
  width: number;
  depth: number;
  unit: string;
};

export type Dimensions = {
  lengthWidthRatio: number;
  measurements: Measurements;
  carat: number;
  visualCarat: number;
  tablePercentage: number;
  depthPercentage: number;
  culet: string;
  pavilionDepthPercentage: number;
  pavilionAngle: number;
  crownHeightPercentage: number;
  crownAngle: number;
  lowerHalfPercentage: number;
  starLengthPercentage: number;
  girdlePercentage: number;
};

export type Characteristics = {
  shape: string;
  color: string;
  clarity: string;
  fluorescence: string;
  symmetry: string;
  polish: string;
  cutGrade: string;
  cutScore: number;
  clarityCharacteristics: string[];
};

export enum DiamondType {
  LabGrown = "lab grown",
  NaturalDiamond = "natural diamond",
}

export const DiamondTypeToTitle = {
  [DiamondType.LabGrown]: "diamondTypesTitles.labCreated",
  [DiamondType.NaturalDiamond]: "diamondTypesTitles.natural",
};

export type TotalDiamondsCountType = { totalDiamondsCount: number };

export type DiamondDetailBlock = {
  title?: string;
  details: Detail[];
  isWide?: boolean;
};

export type Detail = {
  propertyKey?: string;
  title?: string;
  propertyGroup?: string;
  editPropertyValue?: ({
    value,
    locale,
    diamond,
  }: {
    value: any;
    locale?: string;
    diamond?: Diamond;
  }) => string | number;
  useUrl?: boolean;
};
