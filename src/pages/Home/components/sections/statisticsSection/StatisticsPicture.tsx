import { FC, memo } from "react";
import StatisticsImage from "../../../../../assets/statistics.svg";
import { MainColor, TitleFont } from "../../../../../styles/constants";

export const StatisticsPicture: FC = memo(() => {
  return (
    <div
      className={`xl:w-[550px] h-[550px] w-full relative rounded-xl
      bg-cover bg-no-repeat bg-center`}
      style={{ backgroundImage: `url(${StatisticsImage})` }}
    >
      <div
        className={`absolute xl:w-[80%] xl:h-[80%] md:w-[440px] md:h-[440px] w-[80%] h-[80%] top-1/2 xl:left-1/2 left-1/2 sm:left-[50px] 
      border-l border-white transform xl:-translate-x-1/2 -translate-y-1/2 sm:translate-x-0 -translate-x-1/2 z-20`}
      >
        <div className="w-full mt-[25%] h-16 border-y border-white relative">
          <div className="flex h-16 w-[90%] absolute right-0 items-center text-center">
            <div className="flex-1 h-full flex flex-col justify-center bg-[#0A2D4733] opacity-20;">
              <h2 className="uppercase tracking-[5px] sm:text-sm text-[12px] max-[300px]:text-[8px] text-white">
                overpay
              </h2>
            </div>
            <h2
              className="flex-1 sm:text-xl text-lg max-[300px]:text-sm text-white italic font-[400]"
              style={{ fontFamily: TitleFont }}
            >
              30%
            </h2>
          </div>
        </div>
        <div className="top-0 right-0 w-[90%] absolute h-full flex flex-col">
          <div className="mt-[27.5%] h-16"></div>
          <div className="h-auto flex-1 w-1/2 bg-white flex flex-col justify-center items-center">
            <h2
              className="italic font-[500] sm:text-[24px] text-[18px] max-[300px]:text-[12px]"
              style={{ color: MainColor, fontFamily: TitleFont }}
            >
              <span className="sm:text-[32px] text-[24px] max-[300px]:text-[18px]">
                90%
              </span>{" "}
              of
              <br />
              diamond
              <br />
              buyers
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
});

StatisticsPicture.displayName = "StatisticsPicture";
