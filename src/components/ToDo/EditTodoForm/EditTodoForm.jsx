import React, { useState } from "react";
import css from "./EditTodoForm.module.css";

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);
  const handleSubmit = (event) => {
    event.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.input}
        type="text"
        placeholder="Edit Task"
        onChange={(event) => setValue(event.target.value)}
        value={value}
      />
      <button type="submit" className={css.btn}>
        Update Task
      </button>
    </form>
  );
};

export default EditTodoForm;
