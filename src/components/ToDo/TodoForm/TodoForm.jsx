import React, { useState } from "react";
import css from "./TodoForm.module.css";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(value);
    setValue("");
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.input}
        type="text"
        placeholder="What is the task today?"
        onChange={(event) => setValue(event.target.value)}
        value={value}
      />
      <button type="submit" className={css.btn}>
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
