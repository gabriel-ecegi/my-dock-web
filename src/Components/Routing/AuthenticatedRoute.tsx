import { useUserInfoQuery } from "Api/Auth/Queries/useUserInfoQuery";
import { Navigate } from "react-router-dom";
import { AppRouting, getPath } from "Utils/UrlUtils";

type Props = {};

export const AuthenticatedRoute: React.FC<React.PropsWithChildren<Props>> = ({
  children,
}) => {
  const { data, isLoading } = useUserInfoQuery();

  if (isLoading) return <div />;

  if (data?.status === 401) {
    return <Navigate to={getPath(AppRouting.SignIn)} replace />;
  }
  return children;
};
