import { useQuery } from "@tanstack/react-query";
import { getAuthUserInfo } from "Api/Api";

export const USER_INFO_QUERY_KEY = "USER_INFO";

export function useUserInfoQuery() {
  const query = useQuery({
    queryKey: [USER_INFO_QUERY_KEY],
    queryFn: () => getAuthUserInfo(),
  });

  return query;
}
