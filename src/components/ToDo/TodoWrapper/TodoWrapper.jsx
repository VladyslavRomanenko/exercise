import React, { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import css from "./TodoWrapper.module.css";
import { nanoid } from "nanoid";
import Todo from "../Todo/Todo";
import EditTodoForm from "../EditTodoForm/EditTodoForm";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: nanoid(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handledeleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) =>
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );

  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Get Things Done!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm key={index} editTodo={editTask} task={todo} />
        ) : (
          <Todo
            task={todo}
            key={index}
            editTodo={handleEditTodo}
            toggleComplete={toggleComplete}
            deleteTask={handledeleteTask}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
