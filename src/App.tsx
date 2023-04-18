import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useQuery } from "react-query";
import Home from "./pages/Home";
import Transaction from "./pages/Transaction";
import EditForm from "./pages/Forms/EditForm";
import NewForm from "./pages/Forms/NewForm";

export default function App() {
  const { isLoading, error, data } = useQuery("transactions", async () => {
    const res = await fetch("http://localhost:3005/transactions");
    return await res.json();
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
        <Route path="/new" element={<NewForm />} />
        <Route path="transactions/:id/edit" element={<EditForm />} />
      </Routes>
    </Router>
  );
}
