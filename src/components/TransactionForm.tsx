import { useEffect, useState } from "react";
const defaultFormValues = {
  name: "",
  amount: 0,
  date: "",
  from: "",
};
export type transactionType = typeof defaultFormValues;
type TransactionFormProps = {
  onSubmit: (transaction: transactionType) => void;
  initialValues?: transactionType;
};

export default function TransactionForm({
  onSubmit,
  initialValues = defaultFormValues,
}: TransactionFormProps) {
  const [transaction, setTransaction] = useState({ ...initialValues });

  useEffect(() => {
    setTransaction(initialValues);
  }, [initialValues]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "amount") {
      setTransaction((old) => ({
        ...old,
        [e.target.id]: Number(e.target.value),
      }));
    } else {
      setTransaction((old) => ({
        ...old,
        [e.target.id]: e.target.value,
      }));
    }
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(transaction);
  };

  return (
    <form
      className="mx-auto flex w-1/2 flex-col space-y-3"
      onSubmit={handleSubmit}
    >
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
        min="0.01"
        step="0.01"
        className="px-4 py-2"
        onChange={handleChange}
        value={transaction.amount}
      />
      <input
        type="submit"
        className="sm:hover: mx-auto w-fit rounded-md border bg-sky-500 p-3 text-white transition-colors duration-200 sm:hover:border-sky-500 sm:hover:bg-gray-100 sm:hover:text-sky-500"
      />
    </form>
  );
}
