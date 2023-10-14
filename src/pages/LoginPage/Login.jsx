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
  return (
    <div className="Login">
      <div>하루에 한번 뉴스를 요약해서 봐요</div>
      <BsNewspaper size="100" />
      <img
        onClick={handleLogin}
        className="kakaoBtn"
        src={process.env.PUBLIC_URL + "../../assets/kakao.png"}
        alt="kakao"
        style={{ cursor: "pointer" }}
      />
      <div onClick={navigate("/main")}>비회원으로 로그인 하기</div>
    </div>
  );
}

export default Login;
