import { FC, memo } from "react";
import { Layout } from "../../common/components/layout/Layout";
import { Container } from "common/components/wrappers/Container";
import { Error404 } from "common/components/errorsComponents/404";

export const Page404: FC = memo(() => {
  return (
    <Layout>
      <Container>
        <div className="md:pt-[250px] pt-[150px]">
          <Error404 />
        </div>
      </Container>
    </Layout>
  );
});

Page404.displayName = "Page404";
