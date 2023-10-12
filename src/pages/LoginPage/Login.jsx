import React from "react";
import { BsNewspaper } from "react-icons/bs";
import "./style/Login.css";

function Login() {
  return (
    <div className="Login">
      <BsNewspaper size="100" />
      <img
        src={process.env.PUBLIC_URL + "../../assets/kakao.png"}
        alt="kakao"
      />
      <div>비회원으로 로그인 하기</div>
    </div>
  );
}

export default Login;
