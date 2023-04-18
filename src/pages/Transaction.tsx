import { Link, useParams } from "react-router-dom";
import { type dataItem } from "./Home";
import { useQuery, useQueryClient, useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

const findMatchingTransaction = (id: string) => (transaction: dataItem) => {
  return transaction.id === Number(id);
};

export { findMatchingTransaction };

export default function Transaction() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    isLoading,
    error,
    data: matchingTransaction,
  } = useQuery(["transactions", id], async () => {
    const res = await fetch(`http://localhost:3005/transactions/${id}`);
    return await res.json();
  });
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async () => {
      const res = await fetch(`http://localhost:3005/transactions/${id}`, {
        method: "DELETE",
      });
      return await res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
      navigate(`/`);
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>There was an error!</div>;
  }

  const handleDelete = async () => mutate();

  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-100 pt-28">
      <div className=" min-h-[18rem] w-4/5 max-w-7xl rounded-md bg-gray-200 p-5 shadow sm:w-3/5">
        <div className="mb-6 flex flex-col items-center justify-between space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">
            ${matchingTransaction.amount.toFixed(2)}
          </h1>
          <p className="text-md text-gray-500">
            From: {matchingTransaction.from}
          </p>
          <p className="text-md text-gray-500">
            Name: {matchingTransaction.name}
          </p>
          <p className="text-md text-gray-500">
            Date: {matchingTransaction.date}
          </p>
        </div>
        <div className="flex justify-around">
          <Link to="/">
            <button className="rounded-md border bg-sky-600 p-2 px-4 text-white hover:border-sky-500 hover:bg-white hover:text-sky-500 sm:px-6">
              Back
            </button>
          </Link>
          <Link to={`/transactions/${id}/edit`}>
            <button className="rounded-md border bg-sky-600 p-2 px-4 text-white hover:border-sky-500 hover:bg-white hover:text-sky-500 sm:px-6">
              Edit
            </button>
          </Link>
          <button
            onClick={handleDelete}
            className="rounded-md border bg-red-500 p-2 px-4 text-white hover:border-red-500 hover:bg-white hover:text-red-500 sm:px-6"
          >
            Delete
          </button>
        </div>
      </div>
    </main>
  );
}
