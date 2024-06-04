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
import { NavigationHistoryItem } from "common/types/components/navHistoryMenu";

export const HistoryContext = createContext<{
  navigationHistory?: NavigationHistoryItem[];
  setNavigationHistory?: Dispatch<
    SetStateAction<NavigationHistoryItem[] | undefined>
  >;
}>({
  setNavigationHistory: () => {},
});

type HistoryContextProviderProps = Partial<{
  storageType: StorageType;
  storageKey: string;
  children: ReactNode;
}>;

export const HistoryContextProvider: FC<HistoryContextProviderProps> = ({
  children,
  storageKey = "history",
  storageType = StorageType.SessionStorage,
}) => {
  const [storedNavigationHistory, storeNavigationHistory] = useStorageItem<
    NavigationHistoryItem[]
  >(storageType, storageKey, []);

  const [navigationHistory, setNavigationHistory] = useState<
    NavigationHistoryItem[] | undefined
  >(storedNavigationHistory);

  const value = useMemo(
    () => ({
      navigationHistory,
      setNavigationHistory,
    }),
    [navigationHistory]
  );

  useEffect(() => {
    storeNavigationHistory(navigationHistory);
  }, [navigationHistory]);

  return (
    <HistoryContext.Provider value={value}>{children}</HistoryContext.Provider>
  );
};

export const useHistoryContext = () => useContext(HistoryContext);
