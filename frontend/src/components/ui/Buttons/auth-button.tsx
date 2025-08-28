import { type ComponentPropsWithoutRef, type ReactNode } from "react";

import clsx from "clsx";

interface AuthButtonProps extends ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
}

export default function AuthButton({ children, className, ...rest }: AuthButtonProps) {
  return (
    <div className="relative">
      <button
        className={clsx(
          "absolute left-1/2 -translate-x-1/2 cursor-pointer transition-all bg-blue-500 text-white px-8 py-3 border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 text-nowrap active:translate-y-[2px]",
          className,
        )}
        {...rest}
      >
        {children}
      </button>
    </div>
  );
}
