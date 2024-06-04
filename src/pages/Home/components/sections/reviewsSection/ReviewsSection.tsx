import { FC, memo, useCallback } from "react";
import { Container } from "../../../../../common/components/wrappers/Container";
import {
  LightColor,
  MainColor,
  SubtitleColor,
  TitleFont,
  TitlesStyles,
} from "../../../../../styles/constants";
import { ReviewCard } from "./ReviewCard";
import { renderCards } from "../../../../../common/helpers/home";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ResponseData } from "common/types/api";
import { Review } from "common/types/reviews";
import { debounce } from "common/helpers/debounce";
import { QueryKeys } from "common/constants/api";
import { getReviews } from "api/requests/reviews/getReview";
import { Carousel } from "common/components/wrappers/Carousel";

export const ReviewsSection: FC = memo(() => {
  const { t } = useTranslation();

  const fetchFunc = useCallback(async () => {
    return await getReviews();
  }, []);

  const { data: axiosResponse } = useQuery<
    AxiosResponse<ResponseData<Review[]>>
  >({
    queryFn: () => debounce(fetchFunc(), 500),
    queryKey: [QueryKeys.GetReviews],
    refetchOnWindowFocus: false,
  });

  const { data: reviews = [] } = axiosResponse?.data ?? {};

  return (
    <>
      {reviews.length > 0 && (
        <Container styles={{ backgroundColor: LightColor }}>
          <div className="md:pt-[150px] pt-[50px] md:pb-[150px] pb-[50px]">
            <h2
              className={TitlesStyles.subtitle}
              style={{ color: SubtitleColor }}
            >
              {t("reviewsSection.subtitle")}
            </h2>

            <h1
              className={TitlesStyles.title}
              style={{ color: MainColor, fontFamily: TitleFont }}
            >
              {t("reviewsSection.titlePart1")}
              <br />
              <span className={TitlesStyles.titleSpan}>
                {t("reviewsSection.titleBold")}
              </span>{" "}
              {t("reviewsSection.titlePart2")}
            </h1>

            {reviews.length <= 3 ? (
              <div className="flex xl:flex-row flex-col xl:justify-between space-y-7 xl:space-y-0 max-[320px]:block items-center">
                {renderCards(reviews, ReviewCard)}
              </div>
            ) : (
              <Carousel>
                {reviews.map((review) => (
                  <ReviewCard key={review?._id} card={review} />
                ))}
              </Carousel>
            )}
          </div>
        </Container>
      )}
    </>
  );
});

ReviewsSection.displayName = "ReviewsSection";
