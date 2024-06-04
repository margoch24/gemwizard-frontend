import { FC, memo } from "react";
import { LinkType, NavLinkModel } from "../../types/components/header";
import { SimpleLink } from "../wrappers/SimpleLink";
import { DropdownList } from "../wrappers/DropdownList";

export const Menu: FC<{
  navLinks: NavLinkModel[];
}> = memo(({ navLinks }) => {
  return (
    <div className="md:block hidden">
      <div className="h-full flex flex-row items-center">
        {navLinks.map(({ type = LinkType.SimpleLink, title }, index) => {
          const Component = LinkTypeToComponentMap[type];

          if (!Component) {
            return null;
          }

          return <Component title={title} />;
        })}
      </div>
    </div>
  );
});

Menu.displayName = "Menu";

const LinkTypeToComponentMap: {
  [key in string]: FC<NavLinkModel>;
} = {
  [LinkType.SimpleLink]: SimpleLink,
  [LinkType.Dropdown]: DropdownList,
};
