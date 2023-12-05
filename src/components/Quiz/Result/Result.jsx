import React from "react";
import img from "../../../img/celebratee.png";
import css from "./Result.module.css";

const Result = ({ correct, incorrect, percentage }) => {
  return (
    <div className={css.container}>
      <img width={400} height={400} src={img} alt="" />
      <p>Правильно {correct}</p>
      <p>Неправильно {incorrect}</p>
      <p>{percentage}%</p>
    </div>
  );
};

export default Result;
