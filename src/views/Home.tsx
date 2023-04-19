import { useNavigate } from "react-router-dom";
import { getsAndFormatsTotal, formatsUnix } from "../utils/helpers";
import { dataAsProps } from "../utils/types";

export default function Home({ data }: dataAsProps) {
  const navigate = useNavigate();
  const currentBalance = getsAndFormatsTotal(data);
  const handleClick = (id: number) => () => navigate(`/transactions/${id}`);

  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-100 pt-28">
      <div className=" w-4/5 max-w-7xl sm:w-3/4 ">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl">Welcome to Budgtr</h1>
          <p>
            Current Balance:{" "}
            <span
              className={
                currentBalance < 0
                  ? "text-red-400"
                  : currentBalance < 100
                  ? "text-yellow-400"
                  : "text-emerald-600"
              }
            >{`$${currentBalance.toFixed(2)}`}</span>
          </p>
          <table className="w-full">
            <thead className=" text-left">
              <tr className="border-b">
                <th className="p-3">Date</th>
                <th className="w-3/5 p-3 sm:w-3/4">Name</th>
                <th className="p-3">Amount</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return (
                  <tr
                    className="cursor-pointer border-b hover:bg-gray-200"
                    key={item.id}
                    onClick={handleClick(item.id)}
                  >
                    <td className="p-3">{formatsUnix(item.date)}</td>
                    <td className="p-3">
                      {item.name}
                      <span className=" text-xs text-gray-500">{` · ${
                        item.deposit ? "Deposit" : "Withdrawl"
                      }`}</span>
                    </td>
                    <td
                      className={`p-3 ${
                        !item.deposit ? "text-red-500" : "text-emerald-600"
                      }`}
                    >{`$${item.amount.toFixed(2)}`}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
