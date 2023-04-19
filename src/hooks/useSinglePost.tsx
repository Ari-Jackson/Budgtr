import { useQuery } from "react-query";

export default function useSinglePost(id: string | undefined) {
  const { isLoading, error, data } = useQuery(
    ["transactions", id],
    async () => {
      const res = await fetch(
        `https://budget-app-o1zu.onrender.com/transactions/${id}`
      );
      return await res.json();
    }
  );
  return [data, isLoading, error];
}
