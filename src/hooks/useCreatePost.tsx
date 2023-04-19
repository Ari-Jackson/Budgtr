import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

type transactionType = {
  name: string;
  amount: number;
  date: string;
  from: string;
};

export default function useCreatePost() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: async (newTransaction: transactionType) => {
      const res = await fetch(
        "https://budget-app-o1zu.onrender.com/transactions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTransaction),
        }
      );
      return await res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
      navigate(`/`);
    },
  });

  return { mutate, isLoading };
}
