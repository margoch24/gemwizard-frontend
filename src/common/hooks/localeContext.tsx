import {
  createContext,
  useState,
  FC,
  useMemo,
  Dispatch,
  SetStateAction,
  useEffect,
  ReactNode,
  useContext,
} from "react";

import { StorageType, useStorageItem } from "./useStorage";
import { DEFAULT_LANGUAGE } from "common/constants";

export const LocaleContext = createContext<{
  language?: string;
  setLanguage?: Dispatch<SetStateAction<string | undefined>>;
}>({
  setLanguage: () => {},
});

type LocaleContextProviderProps = Partial<{
  storageType: StorageType;
  storageKey: string;
  children: ReactNode;
}>;

export const LocaleContextProvider: FC<LocaleContextProviderProps> = ({
  children,
  storageKey = "locale",
  storageType = StorageType.SessionStorage,
}) => {
  const [storedLanguage, storeLanguage] = useStorageItem<string>(
    storageType,
    storageKey,
    DEFAULT_LANGUAGE
  );

  const [language, setLanguage] = useState<string | undefined>(storedLanguage);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language]
  );

  useEffect(() => {
    storeLanguage(language);
  }, [language]);

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
};

export const useLocaleContext = () => useContext(LocaleContext);
