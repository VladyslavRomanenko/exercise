import React, { Suspense } from "react";
import Navigation from "../Navigation/Navigation";
import { Outlet } from "react-router-dom";
import css from "./SharedLayout.module.css";

const SharedLayout = () => {
  return (
    <>
      <Navigation />
      <div className={css.container}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default SharedLayout;
