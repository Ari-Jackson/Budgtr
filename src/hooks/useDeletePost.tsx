import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

export default function useDeletePost(id: string | undefined) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async () => {
      const res = await fetch(
        `https://budget-app-o1zu.onrender.com/transactions/${id}`,
        {
          method: "DELETE",
        }
      );
      return await res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
      navigate(`/`);
    },
  });

  return mutate;
}
