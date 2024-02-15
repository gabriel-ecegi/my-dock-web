import { useQuery } from "@tanstack/react-query";
import { getClientsId } from "Api/Api";

export const CLIENT_DETAIL_QUERY_KEY = "CLIENT_DETAIL_QUERY";

export function useClientDetailQuery(id: number) {
  const query = useQuery({
    queryKey: [CLIENT_DETAIL_QUERY_KEY, id],
    queryFn: () => getClientsId(id),
  });

  return query;
}
