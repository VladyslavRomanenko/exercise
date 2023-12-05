import React from "react";
import { Link } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <Link to="/" className={css.link}>
        Home
      </Link>
      <Link to="/quiz" className={css.link}>
        Quiz
      </Link>
      <Link to="/todo" className={css.link}>
        ToDo
      </Link>
    </nav>
  );
};

export default Navigation;
