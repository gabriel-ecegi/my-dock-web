import { useQuery } from "@tanstack/react-query";
import { getClients } from "Infrastructure/Api/Api";

export const CLIENTS_QUERY_KEY = "CLIENTS_QUERY";

export function useClientsQuery() {
  const query = useQuery({
    queryKey: [CLIENTS_QUERY_KEY],
    queryFn: () => getClients(),
  });

  return query;
}
