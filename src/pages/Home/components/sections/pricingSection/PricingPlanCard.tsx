import { FC, memo } from "react";
import { SubtitleColor } from "../../../../../styles/constants";
import { PricingPlan } from "../../../../../common/types/pricingPlans";
import { PLANS_BILLING_CYCLES_CONFIG } from "../../../../../common/types/pricingPlans";
import { Button } from "../../../../../common/components/wrappers/buttons/Button";
import { ButtonTheme } from "../../../../../common/types/components/button";
import { useTranslation } from "react-i18next";
import { useLocaleContext } from "common/hooks/localeContext";
import { Languages } from "common/types/locale";
import { useNavigate } from "react-router-dom";

export const PricingPlanCard: FC<{
  card: PricingPlan;
}> = memo(
  ({
    card: {
      title,
      subtitle,
      price,
      priceDetails,
      currency,
      description,
      billingCycle,
      recommended,
    },
  }) => {
    const navigate = useNavigate();
    const { language } = useLocaleContext();
    const { t } = useTranslation();

    const buttonTheme = recommended
      ? ButtonTheme.Light
      : ButtonTheme.Transparent;

    const buttonTitle =
      price > 0
        ? `pricingSection.buttonTitles.paid`
        : "pricingSection.buttonTitles.free";

    return (
      <div
        className={`flex-1 h-auto ${
          recommended
            ? "bg-gradient-to-b h-[400px] from-[#A1B4CB] to-[#DCCCF0] rounded-xl"
            : ""
        }`}
      >
        <div
          className={`bg-white p-10 max-[330px]:p-5 rounded-xl flex flex-col justify-between
          ${recommended ? "m-[4px] h-[392px]" : "h-[400px]"} ${
            description.length > 150 ? "h-auto" : "h-full"
          }
          `}
        >
          <div>
            <h1
              className="font-['Inter'] font-[400] text-[22px] mb-5"
              style={{ color: SubtitleColor }}
            >
              {title}
            </h1>

            <div className="flex flex-row items-center space-x-4">
              <h1 className="font-['Inter'] font-[400] text-[36px] text-[#181C1F]">
                {currency}
                {price.toFixed(2)}
              </h1>
              <div>
                <h2
                  className={`font-['Inter'] font-[400] text-[12px] ${
                    recommended
                      ? "text-[#3A3A3A]"
                      : "text-[#181C1FA3] opacity-[64%]"
                  }`}
                >
                  {priceDetails}
                  <br />
                  {t(PLANS_BILLING_CYCLES_CONFIG[billingCycle] || "")}
                </h2>
              </div>
            </div>

            <h2
              className="uppercase tracking-widest text-[14px] pt-3"
              style={{ color: SubtitleColor }}
            >
              {subtitle}
            </h2>
          </div>

          <hr className="text-[#E6F1F2]" />

          <div className="pt-5">
            <h2
              className="font-[400] font-['Inter'] text-[16px] mb-7"
              style={{ color: SubtitleColor }}
            >
              {description}
            </h2>
            <Button
              onClick={() => navigate("/contact-us")}
              title={`${t(buttonTitle)} ${
                language === Languages.EN && price > 0 ? title : ""
              }`}
              theme={buttonTheme}
            />
          </div>
        </div>
      </div>
    );
  }
);

PricingPlanCard.displayName = "PricingPlanCard";
