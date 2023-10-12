import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage/Login";
import Mainpage from "./pages/MainPage/Mainpage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Mainpage />} />
      </Routes>
    </div>
  );
}

export default App;
