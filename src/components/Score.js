import React from "react";

export default function Score(props) {
  const { date, score } = props.score;

  return (
    <li>
      Date: {date}, Score: {score}
    </li>
  );
}