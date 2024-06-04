import { FC, memo } from "react";
import { TitleFont } from "../../../../../styles/constants";
import { Review } from "../../../../../common/types/reviews";
import { useTranslation } from "react-i18next";
import { Currencies } from "common/constants";
import { getImage } from "common/helpers/getImage";

export const ReviewCard: FC<{
  card: Review;
}> = memo(({ card: { name, age, savings, message, imageURL } }) => {
  const { t } = useTranslation();
  const { currency, saved } = savings;

  return (
    <div
      className={`bg-white w-full h-fit xl:w-[350px] 2xl:w-[400px] px-10 py-10 rounded-[10px] mx-auto
        flex flex-col justify-between max-[320px]:px-5 max-[320px]:pb-5 space-y-6
    `}
    >
      <div className="xl:w-[250px] w-full">
        <h1
          className="text-[24px] font-[400] italic text-[#0F0F0F]"
          style={{ fontFamily: TitleFont }}
        >
          {message}
        </h1>
      </div>

      <div
        className="rounded-xl xl:h-[250px] h-[550px] max-[639px]:h-[300px] bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${getImage(imageURL)})`,
        }}
      ></div>
      <div className="flex flex-row items-center justify-between">
        <h2
          className="text-sm font-[400] text-[#0F0F0F]"
          style={{ fontFamily: TitleFont }}
        >
          {name}, {age} {t("reviewsSection.reviewCard.age")}
        </h2>
        <h2
          style={{ fontFamily: TitleFont }}
          className="text-[#1E1E1E] text-sm font-[400]"
        >
          {t("reviewsSection.reviewCard.savings")}:{" "}
          <span className="font-[600]">
            {saved.toLocaleString()} {Currencies[currency]}
          </span>
        </h2>
      </div>
    </div>
  );
});

ReviewCard.displayName = "ReviewCard";
