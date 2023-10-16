import axios from "axios";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { REDIRECT_URI, REST_API_KEY } from "./APP_KEY";

function KakaoCallback() {
  const location = useLocation();
  const navigate = useNavigate();
  const grantType = "authorization_code";

  useEffect(() => {
    const KAKAO_CODE = location.search.split("=")[1];

    axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=${grantType}&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
        {},
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
      .then((res) => {
        const ACCESS_TOKEN = res.data.access_token;
        localStorage.setItem("ACCESS_TOKEN", res.data.access_token);
        axios
          .get(`https://kapi.kakao.com/v2/user/me`, {
            headers: {
              Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
          })
          .then((res) => {
            console.log(res.data.properties);
            localStorage.setItem("NICKNAME", res.data.properties.nickname);
            localStorage.setItem(
              "PROFILE_IMG",
              res.data.properties.profile_image
            );
            console.log(res);
            navigate("/main");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return <div></div>;
}

export default KakaoCallback;
