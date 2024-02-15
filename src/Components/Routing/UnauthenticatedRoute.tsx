import { useUserInfoQuery } from "Api/Auth/Queries/useUserInfoQuery";
import { AppRouting, getPath } from "Utils/UrlUtils";
import { Navigate } from "react-router-dom";

type Props = {};

export const UnauthenticatedRoute: React.FC<React.PropsWithChildren<Props>> = ({
  children,
}) => {
  const { data, isLoading } = useUserInfoQuery();

  if (isLoading) return <div />;

  if (data?.status === 200) {
    return <Navigate to={getPath(AppRouting.Dashboard)} replace />;
  }
  return children;
};
