import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

type transactionType = {
  id: number;
  name: string;
  amount: number;
  date: string;
  from: string;
};

export default function useUpdatePost() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: async (newTransaction: transactionType) => {
      const res = await fetch(
        `http://localhost:3005/transactions/${newTransaction.id}`,
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
