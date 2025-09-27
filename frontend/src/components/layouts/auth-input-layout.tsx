import clsx from "clsx";
import { type ComponentPropsWithoutRef, type ReactNode } from "react";

interface AuthInputLayoutProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
}

export default function AuthInputLayout({ children, className, ...rest }: AuthInputLayoutProps) {
  return (
    <div
      className={clsx("w-full flex items-center justify-center flex-col gap-12", className)}
      {...rest}
    >
      {children}
    </div>
  );
}
