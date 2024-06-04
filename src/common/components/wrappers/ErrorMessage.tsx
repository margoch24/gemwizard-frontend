import { CSSProperties, FC, ReactNode, memo } from "react";

export const ErrorMessage: FC<{
  errorMessage?: string | null;
}> = memo(({ errorMessage }) => {
  return (
    <div>
      {errorMessage && (
        <h2 className="text-[14px] text-right text-red-600 mt-5">
          {errorMessage}
        </h2>
      )}
    </div>
  );
});

ErrorMessage.displayName = "ErrorMessage";
