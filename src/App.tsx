import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Transaction from "./pages/Transaction";
import EditForm from "./pages/Forms/EditForm";
import NewForm from "./pages/Forms/NewForm";
import useAllPosts from "./hooks/useAllPosts";

export default function App() {
  const [data, isLoading, error] = useAllPosts();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error! Something went wrong</h1>;
  }
  return (
    <Router>
      <Navbar data={data} />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="transactions/:id" element={<Transaction />} />
        <Route path="/new" element={<NewForm />} />
        <Route path="transactions/:id/edit" element={<EditForm />} />
      </Routes>
    </Router>
  );
}
