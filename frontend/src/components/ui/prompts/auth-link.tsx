import type { ReactNode } from "react";
import { Link } from "react-router";

interface AuthLinkPromptProps {
  children: ReactNode;
  linkText: string;
  to: "/sign-in" | "/sign-up";
}

export default function AuthLinkPrompt({ children, linkText, to }: AuthLinkPromptProps) {
  return (
    <div>
      <p>
        {children}
        <Link to={to} className="text-blue-700">
          {linkText}
        </Link>
      </p>
    </div>
  );
}
