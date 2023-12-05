import React, { useState } from "react";
import Progress from "../Progress/Progress";
import css from "./Game.module.css";
import Result from "../Result/Result";
import { questions } from "../../../questions";

const Game = () => {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];
  const incorrect = questions.length - correct;
  const percentage = Math.round((correct * 100) / questions.length);

  const handleClick = (index) => {
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
    setStep(step + 1);
  };

  return (
    <>
      {step !== questions.length ? (
        <div className={css.container}>
          <Progress step={step} />
          <h1 className={css.title}>{question.title}</h1>
          <ul className={css.list}>
            {question.variants.map((el, index) => (
              <li
                onClick={() => handleClick(index)}
                className={css.item}
                key={index}
              >
                {el}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <Result
          correct={correct}
          incorrect={incorrect}
          percentage={percentage}
        />
      )}
    </>
  );
};

export default Game;
