import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/:id" element={<h1>Home Page</h1>} />
        <Route path="/new" element={<h1>Home Page</h1>} />
        <Route path="/:id/edit" element={<h1>Home Page</h1>} />
      </Routes>
    </Router>
  );
}
