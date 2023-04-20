import { useState } from "react";
import useCreatePost from "../../hooks/useCreatePost";
import TransactionForm from "../../components/TransactionForm";
import { type newTransactionType } from "../../utils/types";

export default function NewForm() {
  const { mutate } = useCreatePost();

  const handleSubmit = (transaction: newTransactionType) => mutate(transaction);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center bg-gray-100 pt-28">
        <div className=" w-4/5 max-w-7xl rounded-md bg-gray-200 p-2 sm:w-3/4">
          <h1 className="text-center text-2xl font-bold text-gray-700">
            Create New
          </h1>
          <TransactionForm onSubmit={handleSubmit} />
        </div>
      </main>
    </>
  );
}
