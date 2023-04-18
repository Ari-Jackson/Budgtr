import { useState } from "react";
import useCreatePost from "../../hooks/useCreatePost";

export default function NewForm() {
  const initialState = {
    name: "",
    amount: 0,
    date: "",
    from: "",
  };
  type transactionType = typeof initialState;
  const [transaction, setTransaction] = useState({ ...initialState });
  const { mutate, isLoading } = useCreatePost();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "amount") {
      setTransaction({
        ...transaction,
        [e.target.id]: Number(e.target.value),
      });
      return;
    }
    setTransaction({
      ...transaction,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(transaction);
  };

  return (
    <>
      <main className="flex min-h-screen flex-col items-center bg-gray-100 pt-28">
        <div className=" w-4/5 max-w-7xl rounded-md bg-gray-200 p-2 sm:w-3/4">
          <form
            className="mx-auto flex w-1/2 flex-col space-y-3"
            onSubmit={handleSubmit}
          >
            <h1 className="text-center text-2xl font-bold text-gray-700">
              Form
            </h1>
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className=" px-4 py-2"
              onChange={handleChange}
              value={transaction.name}
            />
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="from"
            >
              From
            </label>
            <input
              type="text"
              id="from"
              className=" px-4 py-2"
              onChange={handleChange}
              value={transaction.from}
            />
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="date"
            >
              Date
            </label>
            <input
              type="string"
              id="date"
              className=" px-4 py-2"
              onChange={handleChange}
              value={transaction.date}
            />
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="amount"
            >
              Amount
            </label>
            <input
              type="number"
              id="amount"
              className="px-4 py-2"
              onChange={handleChange}
              value={transaction.amount}
            ></input>
            {!isLoading && (
              <input
                type="submit"
                className="mx-auto w-fit rounded-md border bg-sky-500 p-3 text-white transition-colors duration-200 sm:hover:cursor-pointer sm:hover:border-sky-500 sm:hover:bg-gray-100 sm:hover:text-sky-500"
              />
            )}
          </form>
        </div>
      </main>
    </>
  );
}
