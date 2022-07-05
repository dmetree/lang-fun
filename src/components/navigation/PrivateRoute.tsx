import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface Props {
  isLoggedIn: boolean,
  children?: ReactNode
  // any props that come into the component
}

const Protected = ({isLoggedIn, children, ...props }: Props) => {
  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
};
export default Protected;
