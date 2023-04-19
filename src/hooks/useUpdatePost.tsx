import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { dataItem } from "../utils/types";

export default function useUpdatePost() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: async (newTransaction: dataItem) => {
      const res = await fetch(
        `https://budget-app-o1zu.onrender.com/transactions/${newTransaction.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTransaction),
        }
      );
      return await res.json();
    },
    onSuccess: (newTransaction) => {
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
      navigate(`/transactions/${newTransaction.id}`);
    },
  });

  return { mutate, isLoading };
}
