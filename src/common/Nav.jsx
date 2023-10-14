import React, { useState } from "react";
import "./style/Nav.css";

function Nav() {
  const [click, setClick] = useState({ title: "정치", Eng: "POLITICS" });

  const menu = [
    { title: "정치", Eng: "POLITICS" },
    { title: "경제", Eng: "ECONOMY" },
    { title: "사회", Eng: "SOCIETY" },
    { title: "생활문화", Eng: "LIVING_CULTURE" },
    { title: "IT과학", Eng: "IT_SCIENCE" },
    { title: "세계", Eng: "WORLD" },
    { title: "오피니언", Eng: "OPINION" },
  ];

  const nickname = localStorage.getItem("NICKNAME");

  console.log(nickname);
  return (
    <div className="NavBar">
      {menu.map((item) => (
        <span
          onClick={() => {
            setClick({
              title: item.title,
              Eng: item.Eng,
            });
            // console.log(click);
          }}
          style={
            item.title === click.title
              ? {
                  fontWeight: "bold",
                  color: "black",
                }
              : {}
          }
          key={item.id}
        >
          {item.title}
        </span>
      ))}
    </div>
  );
}

export default Nav;
