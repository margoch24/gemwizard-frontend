import { FC, memo } from "react";
import { ApproachCardType } from "../../../../../common/types/home";
import { MainColor, TitleFont } from "../../../../../styles/constants";

export const ApproachCard: FC<{
  card: ApproachCardType;
}> = memo(({ card: { id, title, description } }) => {
  return (
    <div
      className={`bg-white lg:h-auto min-[400px]:h-[400px] text-right px-10 pb-10 rounded-xl
        flex min-[1080px]:flex-col flex-row min-[1080px]:justify-between
        justify-center max-[1079px]:items-center space-x-6 min-[1080px]:space-x-0 max-[400px]:space-x-0 max-[400px]:flex-col
        lg:flex-1
    `}
    >
      <h1 className="font-['Inter'] font-[400] sm:text-[150px] text-[100px] text-[#F1F2F6]">
        {id}
      </h1>
      <div className="text-left min-[500px]:w-[30%] min-[1080px]:w-auto max-[400px]:text-center lg:h-full">
        {title ? (
          <h2
            className="font-[500] sm:text-3xl text-xl mb-5"
            style={{ color: MainColor, fontFamily: TitleFont }}
          >
            {title}
          </h2>
        ) : (
          <>
            <br className="min-[1080px]:block hidden mt-5" />
          </>
        )}

        <h2
          className="sm:text-lg text-sm font-[400] text-[#0F0F0F] min-[1080px]:not-italic italic"
          style={{ fontFamily: TitleFont }}
        >
          {description}
        </h2>
      </div>
    </div>
  );
});

ApproachCard.displayName = "ApproachCard";
