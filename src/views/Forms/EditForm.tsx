import { useParams } from "react-router-dom";
import useSinglePost from "../../hooks/useSinglePost";
import useUpdatePost from "../../hooks/useUpdatePost";
import TransactionForm from "../../components/TransactionForm";
import { type transactionType } from "../../components/TransactionForm";

export default function EditForm() {
  const { id } = useParams();
  const [data] = useSinglePost(id);
  const { mutate } = useUpdatePost();

  const handleSubmit = (transaction: transactionType) => {
    mutate({
      id: Number(id),
      ...transaction,
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-100 pt-28">
      <div className=" w-4/5 max-w-7xl rounded-md bg-gray-200 p-2 sm:w-3/4">
        <h1 className="text-center text-2xl font-bold text-gray-700">Edit</h1>
        <TransactionForm onSubmit={handleSubmit} initialValues={data} />
      </div>
    </main>
  );
}
