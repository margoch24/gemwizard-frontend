export type Review = {
  _id: string;
  userId?: string;
  name: string;
  age: number;
  savings: {
    saved: number;
    currency: string;
  };
  imageURL: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
};
