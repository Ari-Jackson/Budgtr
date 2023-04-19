import { useQuery } from "react-query";

export default function useAllPosts() {
  const { isLoading, error, data } = useQuery("transactions", async () => {
    const res = await fetch(
      "https://budget-app-o1zu.onrender.com/transactions"
    );
    return await res.json();
  });

  return [data, isLoading, error];
}
