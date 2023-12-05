import React, { useState } from "react";
import css from "./Todo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ task, toggleComplete, deleteTask, editTodo }) => {
  return (
    <div className={css.todo}>
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? css.completed : ""}`}
      >
        {task.task}
      </p>
      <div className={css.icons}>
        <FontAwesomeIcon
          onClick={() => editTodo(task.id)}
          className={css.edit}
          icon={faPenToSquare}
        />
        <FontAwesomeIcon
          onClick={() => {
            deleteTask(task.id);
          }}
          className={css.delete}
          icon={faTrash}
        />
      </div>
    </div>
  );
};

export default Todo;
