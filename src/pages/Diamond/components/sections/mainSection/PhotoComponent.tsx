import { CarouselVertical } from "common/components/wrappers/CarouselVertical";
import { getImage } from "common/helpers/getImage";
import { Photo } from "common/types/diamonds";
import { FC, memo, useState } from "react";
import { useTranslation } from "react-i18next";
import { BorderColor } from "styles/constants";
const CarouselItemHeight = 60;
const CarouselItemWidth = 60;
const CarouselItemSpace = 12;

export const PhotoComponent: FC<{
  imageURL: string;
  photos: Photo[];
}> = memo(({ photos, imageURL }) => {
  const { t } = useTranslation();
  const [firstPhoto] = photos ?? [];
  const [currentPhotoUrl, setCurrentPhotoUrl] = useState<string>(
    firstPhoto?.url
  );

  return (
    <div className="h-full max-[1039px]:mb-12 max-[639px]:mt-12">
      {!photos?.length ? (
        <div className="h-full">
          <div
            className={`rounded-xl h-full bg-cover bg-no-repeat bg-center max-[1039px]:hidden`}
            style={{
              backgroundImage: `url(${imageURL})`,
            }}
          ></div>
          <img
            className="w-full rounded-xl min-[1040px]:hidden"
            src={imageURL}
          />
        </div>
      ) : (
        <div className="flex flex-row xl:space-x-5 space-x-2 h-full">
          <CarouselVertical
            carouselItemHeight={CarouselItemHeight}
            carouselItemSpace={CarouselItemSpace}
            carouselItemWidth={CarouselItemWidth}
            itemsCount={photos?.length}
          >
            {photos.map(({ url }, index) => (
              <div
                key={index}
                onClick={() => setCurrentPhotoUrl(url)}
                className="rounded-xl bg-cover bg-no-repeat bg-center cursor-pointer -rotate-90"
                style={{
                  backgroundImage: `url(${getImage(url)})`,
                  ...(currentPhotoUrl === url && {
                    outline: `4px solid ${BorderColor}`,
                  }),
                  height: CarouselItemHeight,
                  width: CarouselItemWidth,
                }}
              ></div>
            ))}
          </CarouselVertical>
          <div
            className="bg-cover bg-no-repeat bg-center w-full rounded-xl min-[1040px]:h-auto sm:h-[450px]"
            style={{
              backgroundImage: `url(${getImage(currentPhotoUrl)})`,
            }}
          ></div>
        </div>
      )}
    </div>
  );
});

PhotoComponent.displayName = "PhotoComponent";
