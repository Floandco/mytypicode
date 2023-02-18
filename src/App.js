import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  return (
    <Router>
      
        <div className="link-header">
          <h1>Hello you are</h1>
          <Link 
            to="/"
            >
            Home
          </Link>
          <Link to="/Detail">Detail</Link>
        </div>
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Detail" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;