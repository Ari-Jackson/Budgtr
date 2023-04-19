import { Link } from "react-router-dom";
import { type dataAsProps } from "../utils/types";
import { getsAndFormatsTotal } from "../utils/helpers";
export default function Navbar({ data }: dataAsProps) {
  const currentBalance = getsAndFormatsTotal(data);
  return (
    <nav className=" fixed flex min-w-full justify-between bg-sky-600 p-4 text-white">
      {" "}
      <Link to="/">
        <h1 className="text-3xl">Budgtr</h1>{" "}
      </Link>
      <div className="flex w-1/4 items-center justify-between">
        <div>
          <h1>Current Balance:</h1>
          <h1 className="text-xl"> ${currentBalance.toFixed(2)}</h1>
        </div>

        <Link to="/new">
          <button className="rounded-md border p-2 transition-colors duration-200 sm:hover:bg-white sm:hover:text-sky-600">
            New Transaction
          </button>
        </Link>
      </div>
    </nav>
  );
}
