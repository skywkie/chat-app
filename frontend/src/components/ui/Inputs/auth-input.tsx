import { type ComponentPropsWithoutRef, type ReactNode } from "react";

import { clsx } from "clsx";

interface AuthInputProps extends ComponentPropsWithoutRef<"input"> {
  children?: ReactNode;
  label: string;
}

export const AuthInput = ({ children, label, className, ...rest }: AuthInputProps) => {
  return (
    <div className={clsx("relative w-1/2 min-w-50 flex flex-col", className)}>
      <input
        className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700
				transition-colors focus:outline-none peer bg-inherit w-full leading-9 text-2xl"
        placeholder=""
        id={label}
        {...rest}
      />
      <label
        htmlFor={label}
        className="absolute -top-5 text-md text-[#bcc3d2] left-0 cursor-text peer-focus:text-md
				peer-focus:-top-5 transition-all peer-focus:text-blue-700 peer-focus:opacity-80
				peer-placeholder-shown:top-1 peer-placeholder-shown:text-md"
      >
        {label}
      </label>
      {children}
    </div>
  );
};
