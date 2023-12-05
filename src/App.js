import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import { lazy } from "react";
import Home from "./components/Home/Home";
import TodoWrapper from "./components/ToDo/TodoWrapper/TodoWrapper";
const Game = lazy(() => import("./components/Quiz/Game/Game"));

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Game />} />
          <Route path="/todo" element={<TodoWrapper />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
