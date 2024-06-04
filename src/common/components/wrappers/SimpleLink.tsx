import { NavLinkModel } from "common/types/components/header";
import { FC, memo } from "react";
import { Link, useNavigate } from "react-router-dom";

export const SimpleLink: FC<NavLinkModel> = memo(
  ({
    path = "/",
    title,
    tailwindStyles = "",
    titleTailwindStyles = "",
    targetBlank,
    titleStyles = {},
  }) => {
    return (
      <Link
        to={path}
        target={targetBlank ? "_blank" : "_self"}
        className={`cursor-pointer ${tailwindStyles}`}
      >
        <h2 style={titleStyles} className={titleTailwindStyles}>
          {title}
        </h2>
      </Link>
    );
  }
);

SimpleLink.displayName = "SimpleLink";
