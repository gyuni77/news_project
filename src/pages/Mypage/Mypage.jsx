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
      <div onClick={handleLogout}>로그아웃 하기</div>
    </div>
  );
}

export default Mypage;
