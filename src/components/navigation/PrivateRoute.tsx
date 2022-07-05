import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from '../../store/hooks';

interface Props {
  isLoggedIn: boolean,
  children?: ReactNode
  // any props that come into the component
}



const Protected = ({isLoggedIn, children, ...props }: Props) => {
  const user = useAppSelector((state) => state.auth.userObject);
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
};
export default Protected;
