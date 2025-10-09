import { clsx } from "clsx";

interface AuthInputSuggestProps {
  text: readonly string[];
  activeText?: string[];
}

export const AuthInputSuggest = ({ text, activeText }: AuthInputSuggestProps) => {
  return (
    <div className="flex flex-col absolute mt-11 w-full">
      {text.map((message) => (
        <span
          key={message}
          className={clsx("text-green-600", activeText?.includes(message) && "text-red-600")}
        >
          {message}
        </span>
      ))}
    </div>
  );
};
