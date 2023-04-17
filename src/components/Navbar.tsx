import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className=" fixed flex min-w-full justify-between bg-sky-600 p-4 text-white">
      {" "}
      <Link to="/">
        <h1 className="text-3xl">Budgtr</h1>{" "}
      </Link>
      <Link to="/new">
        <button className="duration-200sm:hover:bg-white rounded-md border p-2 transition-colors sm:hover:text-sky-600">
          New Transaction
        </button>
      </Link>
    </nav>
  );
}
