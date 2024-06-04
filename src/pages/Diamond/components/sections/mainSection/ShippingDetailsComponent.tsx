import { ShippingDetails } from "common/mocks/diamond/shipping_details";
import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { BorderColor, MainColor, TitleFont } from "styles/constants";

export const ShippingDetailsComponent: FC = memo(() => {
  const { t } = useTranslation();
  return (
    <div
      className="rounded-[6px] border px-[30px] py-[12px]"
      style={{ borderColor: BorderColor }}
    >
      <div className="space-y-2">
        {ShippingDetails.map(({ title, Icon }, index) => (
          <div className="flex flex-row items-center space-x-2" key={index}>
            <div className="min-w-[16px]">
              <Icon size={16} color={MainColor} />
            </div>
            <h2
              className="text-[14px] font-[400]"
              style={{ fontFamily: TitleFont, color: MainColor }}
            >
              {t(title)}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
});

ShippingDetailsComponent.displayName = "ShippingDetailsComponent";
