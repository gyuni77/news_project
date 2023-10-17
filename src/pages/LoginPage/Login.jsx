import React from "react";
import { useNavigate } from "react-router-dom";
import { BsNewspaper } from "react-icons/bs";
import "./style/Login.css";
import { REST_API_KEY, REDIRECT_URI } from "./KakaoLogin/APP_KEY";

function Login() {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  const navigate = useNavigate();

  const NotMemberBtn = () => {
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("PROFILE_IMG");
    localStorage.removeItem("NICKNAME");
    localStorage.removeItem("E-MAIL");
    navigate("/main");
  };

  return (
    <div className="Login">
      <div className="webExp">
        뉴스 요약 앱은 정보의 폭풍 속에서 실질적인 도움을 주며, <br />
        당신의 뉴스 소비 경험을 혁신할 것입니다. <br />
        지금 당신의 일상에서 뉴스를 손쉽게 소비하고, <br />
        시간을 절약하세요. <br />
        뉴스 요약으로 미래를 경험하세요!"
      </div>
      <BsNewspaper size="150" />
      <img
        onClick={handleLogin}
        className="kakaoBtn"
        src={process.env.PUBLIC_URL + "../../assets/kakao.png"}
        alt="kakao"
        style={{ cursor: "pointer", width: "60%" }}
      />
      <div className="NotMember" onClick={NotMemberBtn}>
        비회원으로 로그인 하기
      </div>
    </div>
  );
}

export default Login;
