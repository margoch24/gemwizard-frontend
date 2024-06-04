import { FC, memo, useState } from "react";
import {
  BorderColor,
  InterFont,
  MainColor,
  SubtitleColor,
  TitleFont,
} from "styles/constants";
import { DIAMONDS_TABLE_TITLES } from "common/constants/index";
import { Diamond } from "common/types/diamonds";
import { capitalizeFirstLetter } from "common/utils/valuesCorrections";
import { useNavigate } from "react-router-dom";

export const DiamondsGridCard: FC<{
  diamond: Diamond;
}> = memo(({ diamond }) => {
  const { imageURL, priceProperties, _id, certificateId } = diamond ?? {};
  const [isCardHovered, setIsCardHovered] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsCardHovered(true);
  };

  const handleMouseLeave = () => {
    setIsCardHovered(false);
  };

  return (
    <div
      onClick={() =>
        navigate(`/diamond?certificateId=${certificateId}&_id=${_id}`)
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="xl:w-[250px] lg:w-[200px] w-[150px] max-[385px]:w-[200px] border rounded-[6px] cursor-pointer"
      style={{
        borderColor: BorderColor,
        ...(isCardHovered && { boxShadow: "5px 5px 15px #888888" }),
      }}
    >
      <div
        className="xl:h-[250px] lg:h-[200px] h-[150px] max-[385px]:h-[200px] w-full bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${imageURL})` }}
      ></div>

      <div className="p-3">
        <div className="mb-2">
          {DIAMONDS_TABLE_TITLES.filter(({ key }) => key).map(
            ({ key, title, capitalize, group }) => (
              <div key={key} className="flex flex-row items-center space-x-2">
                <h2
                  className="sm:text-[14px] text-[13px] font-[400]"
                  style={{ fontFamily: InterFont, color: SubtitleColor }}
                >
                  {title}:
                </h2>
                <h2 className="text-[14px] font-[500] max-[639px]:text-[12px]">
                  {capitalize
                    ? capitalizeFirstLetter(diamond[group][key])
                    : diamond[group][key]}
                </h2>
              </div>
            )
          )}
        </div>

        <div className="w-fit mx-auto" style={{ fontFamily: TitleFont }}>
          {priceProperties.price === -1 ? (
            <h2 className="text-[16px] font-[500]">Off market</h2>
          ) : (
            <h2 className="text-[18px] w-max font-[500]">
              {priceProperties.currency} {priceProperties.price}
            </h2>
          )}
        </div>
      </div>
    </div>
  );
});

DiamondsGridCard.displayName = "DiamondsGridCard";
