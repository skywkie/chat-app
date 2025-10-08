import { type ReactNode } from "react";

interface AuthPageLayoutProps {
  children: ReactNode;
}

export const AuthPageLayout = ({ children }: AuthPageLayoutProps) => {
  return (
    <div className="w-full md:w-7/8 xl:w-5/8 h-full md:h-full py-15 absolute top-1/2 left-1/2 -translate-1/2 flex flex-col justify-center items-center">
      {children}
    </div>
  );
};
