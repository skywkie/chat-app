import { Navigate } from "react-router";

import { useAuth } from "@utils/hooks/useAuth";
import type { ReactNode } from "react";

interface WithAuthProps {
  children: ReactNode;
  redirectPath: string;
  reversed: boolean;
}

export const WithAuth = ({ children, redirectPath = "/", reversed = false }: WithAuthProps) => {
  const { isAuthenticated } = useAuth();

  if ((!isAuthenticated && !reversed) || (isAuthenticated && reversed)) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};
