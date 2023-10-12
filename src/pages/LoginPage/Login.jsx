import React from "react";
import { useNavigate } from "react-router-dom";
import { BsNewspaper } from "react-icons/bs";
import "./style/Login.css";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="Login">
      <div>하루에 한번 뉴스를 요약해서 봐요</div>
      <BsNewspaper size="100" />
      <img
        className="kakaoBtn"
        src={process.env.PUBLIC_URL + "../../assets/kakao.png"}
        alt="kakao"
      />
      <div onClick={navigate("/main")}>비회원으로 로그인 하기</div>
    </div>
  );
}

export default Login;
