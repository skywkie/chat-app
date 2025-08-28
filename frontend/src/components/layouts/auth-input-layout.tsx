import { type ReactNode } from "react";

interface AuthInputLayoutProps {
  children: ReactNode;
}

export default function AuthInputLayout({ children }: AuthInputLayoutProps) {
  return <div className="w-full flex items-center justify-center flex-col gap-12">{children}</div>;
}
