import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { SearchDiamondsPage } from "./pages/SearchDiamonds";
import { PricingPage } from "./pages/Pricing";
import { ContactUsPage } from "pages/ContactUs";
import { CompanyPage } from "pages/Company";
import { SupportPage } from "pages/Support";
import { PrivacyPolicyPage } from "pages/PrivacyPolicy";
import { TrustPage } from "pages/TrustPage";
import { DiamondPage } from "pages/Diamond";
import { RouterPaths } from "common/types/router";
import { useCustomUrlQuery } from "common/helpers/router";
import { Page404 } from "pages/errorsPages/Page404";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/search-diamonds" element={<SearchDiamondsPage />} />
      <Route path="/contact-us" element={<ContactUsPage />} />
      <Route path="/company" element={<CompanyPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/trust-page" element={<TrustPage />} />
      <Route path="/diamond" element={<DiamondPage />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
});

Router.displayName = "Router";

export const ROUTER_PATHS: RouterPaths = {
  "/": {
    title: "routerPathsTitles.home",
    path: "/",
    translateTitle: true,
  },
  "/pricing": {
    title: "routerPathsTitles.pricing",
    path: "/pricing",
    translateTitle: true,
  },
  "/search-diamonds": {
    title: "routerPathsTitles.searchDiamonds",
    path: "/search-diamonds",
    translateTitle: true,
  },
  "/contact-us": {
    title: "routerPathsTitles.contactUs",
    path: "/contact-us",
    translateTitle: true,
  },
  "/company": {
    title: "routerPathsTitles.company",
    path: "/company",
    translateTitle: true,
  },
  "/support": {
    title: "routerPathsTitles.support",
    path: "/support",
    translateTitle: true,
  },
  "/privacy-policy": {
    title: "routerPathsTitles.privacyPolicy",
    path: "/privacy-policy",
    translateTitle: true,
  },
  "/trust-page": {
    title: "routerPathsTitles.trustPage",
    path: "/trust-page",
    translateTitle: true,
  },
  "/diamond": {
    path: "/diamond",
    useHref: true,
    editTitle: (href: string) => {
      const [_, search] = href.split("?");
      const { certificateId } = useCustomUrlQuery(search);
      return (certificateId as string) || "";
    },
  },
};
