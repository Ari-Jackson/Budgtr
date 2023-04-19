import { useNavigate } from "react-router-dom";
export type dataAsProps = {
  data: dataItem[];
};
export type dataItem = {
  id: number;
  name: string;
  amount: number;
  date: string;
  from: string;
  category: string;
};

const getsAndFormatsTotal = (data: dataItem[]) => {
  return data.reduce((total, item) => total + item.amount, 0);
};

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
            Cuttent Balance: <span>{`$${currentBalance.toFixed(2)}`}</span>
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
              {data.map((item) => (
                <tr
                  className="cursor-pointer border-b hover:bg-gray-200"
                  key={item.id}
                  onClick={handleClick(item.id)}
                >
                  <td className="p-3">{item.date}</td>
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">{`$${item.amount.toFixed(2)}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
