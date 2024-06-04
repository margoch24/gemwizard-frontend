export type NavigationHistoryItem = {
  path: string;
  title?: string;
  useHref?: boolean;
  editTitle?: (search?: string) => string;
  href?: string;
  translateTitle?: boolean;
};
