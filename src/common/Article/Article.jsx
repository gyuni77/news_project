import React, { useState } from "react";

function Article() {
  const [article, setArticle] = useState({
    articleTitle:
      "아침은 황제처럼, 저녁은 거지처럼 과연 이런 방법이 살이 빠질까?",
    articleContents:
      "다이어트와 건강을 위해 식단을 조절할 때 흔히 사용되는 말이다. 하지만 이처럼 먹을 경우 다이어트에 도움이 된다는 주장은 사실이 아니라는 연구결과가 나왔다.미국 CNN, 영국 데일리메일 등 최근 외신에 따르면 영국 스코틀랜드 애버딘대학교 연구진은 비만 혹은 과체중인 30명(남성 16명, 여성 14명)을 상대로 실험을 진행했다.",
  });

  return <div className="article">{article.articleTitle}</div>;
}

export default Article;
