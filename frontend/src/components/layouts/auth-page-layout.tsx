import { type ReactNode } from "react";

interface AuthPageLayoutProps {
  children: ReactNode;
}

export default function AuthPageLayout({ children }: AuthPageLayoutProps) {
  return (
    <div className="w-full md:w-7/8 xl:w-5/8 h-4/5 md:h-full py-20 absolute top-1/2 left-1/2 -translate-1/2 flex flex-col justify-center items-center">
      {children}
    </div>
  );
}
