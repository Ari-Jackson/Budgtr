import { Link } from "react-router-dom";
import { type dataAsProps } from "../pages/Home";
export default function Navbar({ data }: dataAsProps) {
  return (
    <nav className=" fixed flex min-w-full justify-between bg-sky-600 p-4 text-white">
      {" "}
      <Link to="/">
        <h1 className="text-3xl">Budgtr</h1>{" "}
      </Link>
      <Link to="/new">
        <button className="rounded-md border p-2 transition-colors duration-200 sm:hover:bg-white sm:hover:text-sky-600">
          New Transaction
        </button>
      </Link>
    </nav>
  );
}
