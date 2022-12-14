import Header from "./components/Header";
import Cart from "./pages/Cart";
import Photos from "./pages/Photos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Photos />} />

          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>  
    </Router>
  );
}

export default App;
