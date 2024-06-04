import { ROUTER_PATHS } from "../../../Router";
import { useHistoryContext } from "common/hooks/historyContext";
import { NavigationHistoryItem } from "common/types/components/navHistoryMenu";
import { FC, memo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { InterFont, MainColor } from "styles/constants";

export const NavHistoryMenu: FC = memo(() => {
  const { pathname, search } = window.location;
  const { navigationHistory, setNavigationHistory } = useHistoryContext();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isInitialPage = pathname === "/";
  const routerPath = ROUTER_PATHS[pathname];
  const currentHref = pathname + search;

  const handleNavigation = (prevHistory: NavigationHistoryItem[]) => {
    if (isInitialPage) {
      prevHistory = [];
    }

    const navigationItemIndex = prevHistory.findIndex(({ path, href }) =>
      routerPath.useHref ? href === currentHref : path === pathname
    );

    if (navigationItemIndex > -1) {
      prevHistory.splice(navigationItemIndex + 1);
      return [...prevHistory];
    }

    return [
      ...prevHistory,
      {
        ...routerPath,
        ...(routerPath.useHref && { href: currentHref }),
        ...(routerPath.editTitle && {
          title: routerPath.editTitle(currentHref),
        }),
      },
    ];
  };

  let ignore = false;
  useEffect(() => {
    if (ignore) {
      return;
    }
    if (!routerPath) {
      return;
    }

    setNavigationHistory(handleNavigation);

    return () => {
      ignore = true;
    };
  }, [pathname, currentHref]);

  return (
    <div
      className={`w-full h-[32px] bg-gradient-to-r from-[#96AEC3] to-[#E3CFF4] 
    flex flex-row items-center space-x-5 px-8 overflow-x-auto`}
    >
      {navigationHistory.map(
        ({ path, title, useHref, href, translateTitle }, index) => (
          <div
            key={index}
            className={`flex flex-row items-center space-x-5 ${
              isInitialPage ? "hidden" : ""
            }`}
          >
            {index > 0 && <IoIosArrowForward size={16} color={MainColor} />}

            <div
              onClick={() => navigate(useHref ? href : path)}
              className="cursor-pointer w-max"
            >
              <h2
                className="font-[400] text-[15px]"
                style={{ color: MainColor, fontFamily: InterFont }}
              >
                {translateTitle ? t(title) : title}
              </h2>
            </div>
          </div>
        )
      )}
    </div>
  );
});

NavHistoryMenu.displayName = "NavHistoryMenu";
