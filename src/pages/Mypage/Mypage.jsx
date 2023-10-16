import React from "react";
import "./style/Mypage.css";
import Header from "../../common/Header";
import axios from "axios";
import {
  LOGOUT_REDIRECT_URI,
  REST_API_KEY,
} from "../LoginPage/KakaoLogin/APP_KEY";
import { useNavigate } from "react-router-dom";

function Mypage() {
  let IMG;
  const name = localStorage.getItem("NICKNAME");
  const e_mail = localStorage.getItem("E-MAIL");

  if (localStorage.getItem("ACCESS_TOKEN")) {
    IMG = localStorage.getItem("PROFILE_IMG");
  } else {
    IMG = process.env.PUBLIC_URL + "../../assets/user.png";
  }

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get(
        `https://kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`
      );
      console.log("로그아웃 성공");
      localStorage.removeItem("ACCESS_TOKEN");
      navigate("/");
    } catch (error) {
      console.error("로그아웃 중 오류 발생:", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="Privacy">
        <img
          src={IMG}
          alt="user"
          style={{ width: "40%", borderRadius: "50%", overflow: "hidden" }}
        />
        <div className="MyInfo">
          <p>이름</p>
          <p>{name}</p>
          <hr />
          <p>이메일</p>
          <p>{e_mail}</p>
        </div>
      </div>
      <hr />
      <div className="sciptArticle">
        <p>저장된 기사</p>
      </div>
      <div className="Logout" onClick={handleLogout}>
        로그아웃 하기
      </div>
    </div>
  );
}

export default Mypage;
