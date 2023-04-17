import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useQuery } from "react-query";
import Home from "./pages/Home";
import Transaction from "./pages/Transaction";
import Form from "./pages/Form";

export default function App() {
  const { isLoading, error, data } = useQuery("posts", () => {
    return fetch("https://budget-app-o1zu.onrender.com/transactions")
      .then((res) => res.json())
      .catch((err) => console.log(err));
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error! Something went wrong</h1>;
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="transactions/:id" element={<Transaction />} />
        <Route path="/new" element={<Form type={"new"} />} />
        <Route path="transactions/:id/edit" element={<Form type={"edit"} />} />
      </Routes>
    </Router>
  );
}
