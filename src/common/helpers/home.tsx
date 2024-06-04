import { FC } from "react";

export const renderCards = (cards: any[], Component: FC<any>) => {
  return (
    <>
      {cards.map((card) => (
        <Component key={card?.id || card?._id} card={card} />
      ))}
    </>
  );
};
