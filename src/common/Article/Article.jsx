import React, { useState } from "react";
import "./style/Article.css";

function Article() {
  const [view, setView] = useState(false);
  const [article, setArticle] = useState({
    articleData: [
      {
        title: "아침은 황제처럼, 저녁은 거지처럼 과연 이런 방법이 살이 빠질까?",
        content:
          "다이어트와 건강을 위해 식단을 조절할 때 흔히 사용되는 말이다. 하지만 이처럼 먹을 경우 다이어트에 도움이 된다는 주장은 사실이 아니라는 연구결과가 나왔다.미국 CNN, 영국 데일리메일 등 최근 외신에 따르면 영국 스코틀랜드 애버딘대학교 연구진은 비만 혹은 과체중인 30명(남성 16명, 여성 14명)을 상대로 실험을 진행했다.",
      },
      {
        title: "北, 美전략자산 한반도 출격에 핵전쟁 도발 시도",
        content:
          "북한은 미 전략자산의 한반도 전개를 겨냥해 '핵전쟁 도발 책동'이라고 비난하며, 미국이 역내 정세를 악화시키고 있다고 강변했다. 북측은 평화와 안정을 수호하기 위해 자위적 국방력을 강화할 뿐이라는 적반하장식 논리를 펼친 것이다.",
      },
      {
        title:
          "북러, 2개의 전쟁 속 푸틴 방북 일정 논의…한미일은 북핵수석대표 공조",
        content:
          "러시아의 우크라이나 침공이 장기화되는 상황에서 팔레스타인 무장 정파 하마스와 이스라엘군 간 무력 충돌 상황에서 북중러의 전략적 공조까지 국제정세가 더욱 소용돌이칠 것으로 보인다.",
      },
    ],
  });

  return (
    <div className="article">
      {article.articleData.map((item, index) => (
        <div key={index}>
          <p>{item.title}</p>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Article;
