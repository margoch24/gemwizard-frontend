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
import { Filters, TextFilters } from "common/types/search_diamonds";
import {
  INITIAL_DIAMONDS_VIEW_TYPE,
  INITIAL_FILTERS,
} from "common/constants/index";

export const DiamondsContext = createContext<{
  filters?: Filters;
  setFilters?: Dispatch<SetStateAction<Filters | undefined>>;

  lastTextFilters?: TextFilters;
  setLastTextFilters?: Dispatch<SetStateAction<TextFilters | undefined>>;

  lastRecordId?: string;
  setLastRecordId?: Dispatch<SetStateAction<string | undefined>>;

  viewType?: string;
  setViewType?: Dispatch<SetStateAction<string | undefined>>;
}>({
  setFilters: () => {},
  setLastTextFilters: () => {},
  setViewType: () => {},
});

type DiamondsContextProviderProps = Partial<{
  storageType: StorageType;
  storageKey: string;
  children: ReactNode;
}>;

export const DiamondsContextProvider: FC<DiamondsContextProviderProps> = ({
  children,
  storageKey = "diamonds",
  storageType = StorageType.SessionStorage,
}) => {
  const initialStoredFilters: Filters = INITIAL_FILTERS;
  const initialLastTextFilters: TextFilters = {};
  const initialViewType: string = INITIAL_DIAMONDS_VIEW_TYPE;

  const [storedFilters, storeFilters] = useStorageItem<Filters>(
    storageType,
    "filters",
    initialStoredFilters
  );

  const [storedViewType, storeViewType] = useStorageItem<string>(
    storageType,
    "viewType",
    initialViewType
  );

  const [storedLastTextFilters, storeLastTextFilters] =
    useStorageItem<TextFilters>(
      storageType,
      "lastTextFilters",
      initialLastTextFilters
    );

  const [lastTextFilters, setLastTextFilters] = useState<
    TextFilters | undefined
  >(storedLastTextFilters);

  const [filters, setFilters] = useState<Filters | undefined>(storedFilters);

  const [viewType, setViewType] = useState<string>(storedViewType);

  const [lastRecordId, setLastRecordId] = useState<string | undefined>(null);

  const value = useMemo(
    () => ({
      filters,
      setFilters,
      lastRecordId,
      setLastRecordId,
      lastTextFilters,
      setLastTextFilters,
      viewType,
      setViewType,
    }),
    [filters, lastRecordId, lastTextFilters, viewType]
  );

  useEffect(() => {
    storeFilters(filters);
  }, [filters]);

  useEffect(() => {
    storeViewType(viewType);
  }, [viewType]);

  useEffect(() => {
    storeLastTextFilters(lastTextFilters);
  }, [lastTextFilters]);

  useEffect(() => {
    setLastRecordId(lastRecordId);
  }, [lastRecordId]);

  return (
    <DiamondsContext.Provider value={value}>
      {children}
    </DiamondsContext.Provider>
  );
};

export const useDiamondContext = () => useContext(DiamondsContext);
