import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage/Login";
import Mainpage from "./pages/MainPage/MainPage";
import Mypage from "./pages/Mypage/Mypage";
import KakaoCallback from "./pages/LoginPage/KakaoLogin/KakaoCallback";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Mainpage />} />
        <Route path="/my" element={<Mypage />} />
        <Route path="/kakaoCallback" element={<KakaoCallback />} />
      </Routes>
    </div>
  );
}

export default App;
