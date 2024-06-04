import { FC, ReactNode, memo } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MainColor } from "../../../styles/constants";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1300, min: 1024 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 1024, min: 0 },
    items: 1,
  },
};

export const Carousel: FC<{
  children: ReactNode;
}> = memo(({ children }) => {
  const CustomArrow = ({
    onClick,
    arrowType,
  }: {
    onClick?: () => void;
    arrowType: string;
  }) => {
    if (!onClick) return;
    const Arrow = arrowType === "left" ? IoIosArrowBack : IoIosArrowForward;
    return (
      <Arrow
        className={`absolute cursor-pointer ${
          arrowType === "right" && "right-0"
        }`}
        size={20}
        color={MainColor}
        onClick={() => onClick()}
      />
    );
  };

  return (
    <MultiCarousel
      customRightArrow={<CustomArrow arrowType="right" />}
      customLeftArrow={<CustomArrow arrowType="left" />}
      responsive={responsive}
    >
      {children}
    </MultiCarousel>
  );
});

Carousel.displayName = "Carousel";
