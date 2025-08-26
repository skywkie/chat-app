import { type ComponentPropsWithoutRef } from "react";

import styles from "./input-field.module.css";

type VariantInputField = "auth" | "search" | "chat";

interface InputFieldProps extends ComponentPropsWithoutRef<"input"> {
  variant: VariantInputField;
  label: string;
}

export default function InputField({ variant, label, ...rest }: InputFieldProps) {
  return (
    <div className={styles.inputFieldContainer}>
      <input
        {...rest}
        placeholder=""
        className="border-b b1order-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
      />
      <label
        htmlFor="username"
        className="absolute -top-4 text-xs left-0 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700 peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm"
      >
        {label}
      </label>
    </div>
  );
}

// function SearchFieldSVG() {
//   return (
//     <svg viewBox="0 0 24 24" area-hidden="true" className={styles.searchIcon}>
//       <g>
//         <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
//       </g>
//     </svg>
//   );
// }
