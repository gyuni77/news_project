import React from "react";
import "./style/Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  let IMG;

  if (localStorage.getItem("ACCESS_TOKEN")) {
    IMG = localStorage.getItem("PROFILE_IMG");
  } else {
    IMG = process.env.PUBLIC_URL + "../../assets/user.png";
  }

  return (
    <div className="Header">
      <img
        src={process.env.PUBLIC_URL + "../../assets/news.png"}
        alt="logo"
        style={{ width: "15%", cursor: "pointer" }}
        onClick={() => navigate("/main")}
      />
      <input className="inputTitle" placeholder="제목을 입력하세요" />
      <img
        src={IMG}
        alt="user"
        style={{
          width: "15%",
          cursor: "pointer",
          overflow: "hidden",
          borderRadius: "50%",
        }}
        onClick={() => navigate("/my")}
      />
    </div>
  );
}

export default Header;
