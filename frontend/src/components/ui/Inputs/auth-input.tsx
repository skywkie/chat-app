import { type ComponentPropsWithoutRef } from "react";

import clsx from "clsx";

interface AuthInputProps extends ComponentPropsWithoutRef<"input"> {
  label: string;
}

export default function AuthInput({ label, className, ...rest }: AuthInputProps) {
  return (
    <div className={clsx("relative w-2/5 min-w-36", className)} {...rest}>
      <input
        className="border-b b1order-gray-300 py-1 focus:border-b-2 focus:border-blue-700
				transition-colors focus:outline-none peer bg-inherit w-full leading-7 text-xl"
        placeholder=""
        id={label}
      />
      <label
        htmlFor={label}
        className="absolute -top-4 text-xs left-0 cursor-text peer-focus:text-xs
				peer-focus:-top-4 transition-all peer-focus:text-blue-700
				peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm"
      >
        {label}
      </label>
    </div>
  );
}
