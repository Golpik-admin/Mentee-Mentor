import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App w-full h-full overflow-auto">
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
