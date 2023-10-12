import React from "react";
import "./style/Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="Header">
      <img
        src={process.env.PUBLIC_URL + "../../assets/news.png"}
        alt="logo"
        style={{ width: "15%", cursor: "pointer" }}
        onClick={navigate("/")}
      />
      <input className="inputTitle" placeholder="제목을 입력하세요" />
      <img
        src={process.env.PUBLIC_URL + "../../assets/user.png"}
        alt="user"
        style={{ width: "15%", cursor: "pointer" }}
      />
    </div>
  );
}

export default Header;
