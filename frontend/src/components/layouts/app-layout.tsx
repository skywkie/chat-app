import { type ReactNode } from "react";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return <div className="h-full w-full md:h-5/6 md:w-7/8 md:rounded-4xl bg-[#222630]">{children}</div>;
}
