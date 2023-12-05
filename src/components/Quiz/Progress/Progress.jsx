import React from "react";
import css from "./Progress.module.css";
import { questions } from "../../../questions";

const Progress = ({ step }) => {
  const percentage = Math.round((step / questions.length) * 100);
  return (
    <div className={css.container}>
      <div style={{ width: `${percentage}%` }} className={css.row}></div>
    </div>
  );
};

export default Progress;
