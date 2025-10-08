import { useState } from "react";
import { clsx } from "clsx";

interface AuthInputSuggestProps {
  text: string[];
}

export const AuthInputSuggest = ({ text }: AuthInputSuggestProps) => {
  const [isCorrect, setIsCorrect] = useState(false);

  return <span className="">{text}</span>;
};
