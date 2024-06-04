import { FC, memo } from "react";
import { IoMdInformationCircle } from "react-icons/io";
import { IoSync } from "react-icons/io5";
import { Diamond } from "common/types/diamonds";
import { capitalizeFirstLetter } from "../../../../../common/utils/valuesCorrections";
import { useNavigate } from "react-router-dom";

export const DiamondsListCard: FC<{
  diamond: Diamond;
  diamondRef?: (node: HTMLTableRowElement) => void;
}> = memo(
  ({
    diamond: {
      _id,
      imageURL,
      characteristics,
      dimensions,
      priceProperties,
      certificateId,
    },
    diamondRef,
  }) => {
    const navigate = useNavigate();

    return (
      <tr
        onClick={() =>
          navigate(`/diamond?certificateId=${certificateId}&_id=${_id}`)
        }
        data-diamond-id={_id}
        ref={diamondRef}
        className={`h-[70px] py-[8px] sm:px-[11px] flex flex-row items-center 
        border-b border-[#CFD3D5] justify-between space-x-1 sm:space-x-0 cursor-pointer hover:bg-[#E6F1F2]`}
      >
        <td className={tdTailwindStyles}>
          <div
            className="w-[55px] h-[55px] bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${imageURL})` }}
          ></div>
        </td>
        <td
          className={`${tdTailwindStyles} flex justify-center lg:justify-start`}
        >
          <IoSync size={16} />
        </td>
        <td className={tdTailwindStyles}>
          <h2 className={h2TailwindStyles}>
            {capitalizeFirstLetter(characteristics.shape)}
          </h2>
        </td>
        <td className={tdTailwindStyles}>
          <h2 className={h2TailwindStyles}>{dimensions.carat}</h2>
        </td>
        <td className={tdTailwindStyles}>
          <h2 className={h2TailwindStyles}>{characteristics.color}</h2>
        </td>
        <td className={tdTailwindStyles}>
          <h2 className={h2TailwindStyles}>{characteristics.clarity}</h2>
        </td>
        <td className={tdTailwindStyles}>
          <h2 className={h2TailwindStyles}>
            {capitalizeFirstLetter(characteristics.fluorescence)}
          </h2>
        </td>

        {priceProperties && (
          <td className={tdTailwindStyles}>
            {priceProperties.price === -1 ? (
              <h2 className={h2TailwindStyles}>Off market</h2>
            ) : (
              <h2 className={`${h2TailwindStyles} w-max`}>
                {priceProperties.currency} {priceProperties.price}
              </h2>
            )}
          </td>
        )}

        <td
          className={`${tdTailwindStyles} flex justify-center cursor-pointer`}
        >
          <IoMdInformationCircle size={16} />
        </td>
      </tr>
    );
  }
);

DiamondsListCard.displayName = "DiamondsListCard";

const tdTailwindStyles = "flex-1 max-[500px]:flex max-[500px]:justify-center";
const h2TailwindStyles = "max-[639px]:text-[12px]";
