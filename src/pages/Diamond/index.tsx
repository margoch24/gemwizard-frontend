import { FC, memo, useCallback } from "react";
import { Layout } from "../../common/components/layout/Layout";
import { useCustomUrlQuery } from "common/helpers/router";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { ResponseData } from "common/types/api";
import { Diamond } from "common/types/diamonds";
import { debounce } from "common/helpers/debounce";
import { QueryKeys } from "common/constants/api";
import { getDiamond } from "api/requests/diamonds/getDiamond";
import { Error500 } from "common/components/errorsComponents/500";
import { DiamondNotFound } from "./components/sections/DiamondNotFound";
import { Container } from "common/components/wrappers/Container";
import { FullDiamondPage } from "./components/FullDiamondPage";
import { useHistoryContext } from "common/hooks/historyContext";
import { LightColor, MainColor } from "styles/constants";
import { ClipLoader } from "react-spinners";

export const DiamondPage: FC = memo(() => {
  const { search } = window.location;
  const { _id } = useCustomUrlQuery(search);
  const { navigationHistory } = useHistoryContext();

  const fetchFunc = useCallback(async (params: { diamondId: string }) => {
    window.scrollTo(0, 0);
    return await getDiamond(params);
  }, []);

  const {
    data: axiosResponse,
    error: axiosError,
    isLoading,
  } = useQuery<AxiosResponse<ResponseData<Diamond>> | ResponseData<Diamond>>({
    queryFn: () => debounce(fetchFunc({ diamondId: _id as string }), 500),
    queryKey: [QueryKeys.GetDiamond, _id, navigationHistory],
    refetchOnWindowFocus: false,
  });

  const { error } = (axiosResponse as ResponseData<Diamond>) ?? {};
  const { data: diamond = {} } =
    (axiosResponse as AxiosResponse<ResponseData<Diamond>>)?.data ?? {};

  return (
    <Layout>
      <Container styles={{ backgroundColor: LightColor }}>
        <div className="md:pt-[250px] pt-[150px]">
          {axiosError && <Error500 />}

          {(error || !Object.keys(diamond).length) &&
          !axiosError &&
          !isLoading ? (
            <DiamondNotFound />
          ) : (
            ""
          )}

          {Object.keys(diamond).length > 1 && (
            <FullDiamondPage diamond={diamond as Diamond} />
          )}

          {isLoading && (
            <div className="text-center">
              <div className="my-10">
                <ClipLoader size={30} color={MainColor} />
              </div>
            </div>
          )}
        </div>
      </Container>
    </Layout>
  );
});

DiamondPage.displayName = "DiamondPage";
