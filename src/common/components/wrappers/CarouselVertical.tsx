import { FC, ReactNode, memo, useEffect, useState } from "react";
import {
  MdKeyboardDoubleArrowUp,
  MdKeyboardDoubleArrowDown,
} from "react-icons/md";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MainColor } from "../../../styles/constants";
import { getScreenWidth } from "common/utils/browser";

const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 640 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 3,
  },
};

export const CarouselVertical: FC<{
  itemsCount: number;
  children: ReactNode;
  carouselItemHeight?: number;
  carouselItemSpace?: number;
  carouselItemWidth?: number;
}> = memo(
  ({
    children,
    itemsCount,
    carouselItemHeight = 0,
    carouselItemSpace = 0,
    carouselItemWidth = 0,
  }) => {
    const screenWidth = getScreenWidth();

    const [isCarouselShown, setIsCarouselShown] = useState<boolean>(false);
    const [carouselWidth, setCarouselWidth] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      Object.entries(responsive).forEach(([_, value]) => {
        const { breakpoint, items } = value;
        const { min, max } = breakpoint;
        setLoading(false);
        if (screenWidth <= max && screenWidth > min) {
          setCarouselWidth(
            items * carouselItemHeight + (items - 1) * carouselItemSpace + 10
          );
          if (itemsCount > items) {
            return setIsCarouselShown(true);
          }
          return setIsCarouselShown(false);
        }
      });
    }, [screenWidth]);

    const CustomArrow = ({
      onClick,
      arrowType,
    }: {
      onClick?: () => void;
      arrowType: string;
    }) => {
      if (!onClick) return;
      const Arrow =
        arrowType === "down"
          ? MdKeyboardDoubleArrowDown
          : MdKeyboardDoubleArrowUp;
      return (
        <Arrow
          className={`absolute cursor-pointer rotate-90 ${
            arrowType === "up" ? "-right-[20px]" : "-left-[20px]"
          }`}
          size={20}
          color={MainColor}
          onClick={() => onClick()}
        />
      );
    };

    return (
      <div>
        {!loading && (
          <div
            className="space-y-3 relative"
            style={{
              width: carouselItemWidth + 10,
              height: carouselWidth + 40 + carouselItemSpace * 2,
            }}
          >
            <div
              style={{
                width: carouselWidth,
                transform:
                  isCarouselShown && screenWidth <= 1039
                    ? "rotate(90deg) translate(0,-50%)"
                    : "rotate(90deg) translate(0,-100%)",
              }}
              className={`transform rotate-90 ${
                isCarouselShown
                  ? "max-[1039px]:origin-left min-[1040px]:mt-[20px]"
                  : ""
              } origin-top-left absolute`}
            >
              <MultiCarousel
                className="p-1 static"
                responsive={responsive}
                swipeable
                customRightArrow={<CustomArrow arrowType="up" />}
                customLeftArrow={<CustomArrow arrowType="down" />}
              >
                {children}
              </MultiCarousel>
            </div>
          </div>
        )}
      </div>
    );
  }
);

CarouselVertical.displayName = "CarouselVertical";
