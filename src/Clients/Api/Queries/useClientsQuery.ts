import { useQuery } from "@tanstack/react-query";
import { GetClientsFetchResponse, apiGet } from "Infrastructure/Api/Api";
// import { getClients } from "Infrastructure/Api/Api";

export const CLIENTS_QUERY_KEY = "CLIENTS_QUERY";

export function useClientsQuery() {
  const query = useQuery({
    queryKey: [CLIENTS_QUERY_KEY],
    queryFn: () => getClients(),
  });

  return query;
}

const getClients = (
  headers = new Headers()
): Promise<GetClientsFetchResponse> => {
  return apiGet(
    "https://vyvoj.mydock.sab-apps.blogic.cz/test-remote-app/getClients",
    headers,
    {}
  ) as Promise<GetClientsFetchResponse>;
};
