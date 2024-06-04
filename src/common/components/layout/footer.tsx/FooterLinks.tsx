import { footerLinks } from "common/constants";
import {
  FooterNavLinkModel,
  FooterNavLinkTypes,
} from "common/types/components/footer";
import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { InterFont, LightColor, TitleFont } from "styles/constants";

export const FooterLinks: FC = memo(() => {
  const { t } = useTranslation();
  return (
    <div className="flex min-[500px]:flex-row flex-col justify-around w-[80%] mx-auto space-y-7 min-[500px]:space-y-0 mt-[150px]">
      {footerLinks.map(({ title, links, socialNetworks }, index) => (
        <div key={index}>
          <h2
            className="font-[400] text-[16px] text-[#EBE4DE] mb-5"
            style={{ fontFamily: TitleFont }}
          >
            {t(title)}
          </h2>

          {links.map(({ title: linkTitle, path, type, href }, index) => (
            <FooterLink
              key={index}
              path={path}
              title={linkTitle}
              href={href}
              type={type}
            />
          ))}

          {socialNetworks && (
            <div className="flex flex-row items-center space-x-3 mt-5">
              {socialNetworks.map(({ Icon, link }, index) => (
                <Link key={index} target={"_blank"} to={link}>
                  <Icon size={26} color={LightColor} />
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
});

FooterLinks.displayName = "FooterLinks";

const FooterLink: FC<FooterNavLinkModel> = ({ type, title, path, href }) => {
  const Component = LinkTypeToComponentMap[type];

  if (!Component) {
    return null;
  }

  return <Component path={path} title={title} href={href} type={type} />;
};

const SimpleHyperlink: FC<FooterNavLinkModel> = memo(({ href, title }) => (
  <div className="cursor-pointer mb-3">
    <a
      style={{ fontFamily: InterFont }}
      className="text-[#FAF7F1] font-[500] text-[15px]"
      href={href}
    >
      {title}
    </a>
  </div>
));

const NavLink: FC<FooterNavLinkModel> = memo(({ path, title }) => {
  const navigate = useNavigate();
  return (
    <div className="cursor-pointer mb-3" onClick={() => navigate(path)}>
      <h2
        className="text-[#FAF7F1] font-[500] text-[15px]"
        style={{ fontFamily: InterFont }}
      >
        {title}
      </h2>
    </div>
  );
});

const LinkTypeToComponentMap: {
  [key in string]: FC<FooterNavLinkModel>;
} = {
  [FooterNavLinkTypes.NavLink]: NavLink,
  [FooterNavLinkTypes.SimpleHyperLink]: SimpleHyperlink,
};
