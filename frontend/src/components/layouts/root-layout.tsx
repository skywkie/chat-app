import type { ReactNode } from "react";

import { clsx } from "clsx";

import { useAuth } from "@utils/hooks/useAuth";

interface RootLayoutProps {
  children: ReactNode;
}

export const RootLayout = ({ children }: RootLayoutProps) => {
  const { isAuthenticated } = useAuth();

  return (
    <div
      className={clsx(
        "h-full w-full md:h-5/6 lg:w-3/5 md:w-3/4 md:rounded-4xl transition-[2] bg-[#1d232f]",
        isAuthenticated && "lg:w-full md:h-full md:w-full md:rounded-none",
      )}
    >
      {children}
    </div>
  );
};
