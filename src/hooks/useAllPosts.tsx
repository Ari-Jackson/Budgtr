import { useQuery } from "react-query";

export default function useAllPosts() {
  const { isLoading, error, data } = useQuery("transactions", async () => {
    const res = await fetch("http://localhost:3005/transactions");
    return await res.json();
  });

  return [isLoading, error, data];
}
