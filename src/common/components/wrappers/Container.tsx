import { CSSProperties, FC, ReactNode, memo } from "react";

export const Container: FC<{
  children: ReactNode;
  tailwindStyles?: string;
  styles?: CSSProperties;
}> = memo(({ children, tailwindStyles, styles }) => {
  return (
    <div
      className={`w-full ${tailwindStyles ? tailwindStyles : ""}`}
      style={styles}
    >
      <div className="md:pb-[150px] pb-[50px] min-[900px]:mx-[100px] sm:mx-[50px] mx-6">
        {children}
      </div>
    </div>
  );
});

Container.displayName = "Container";
