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
      const res = await fetch("http://localhost:3005/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTransaction),
      });
      return await res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
      navigate(`/`);
    },
  });

  return { mutate, isLoading };
}
