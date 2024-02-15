import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postAuthSignIn } from "Api/Api";
import { USER_INFO_QUERY_KEY } from "Api/Auth/Queries/useUserInfoQuery";

export function useSignInMutation() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postAuthSignIn,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [USER_INFO_QUERY_KEY] });
    },
  });

  return mutation;
}
