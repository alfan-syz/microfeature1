import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface IsAdminProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<IsAdminProps> = ({ children }) => {
  const isAdmin = true;

  if (!isAdmin) return <Navigate to="/" />;

  return <>{children}</>;
};

export default PrivateRoute;