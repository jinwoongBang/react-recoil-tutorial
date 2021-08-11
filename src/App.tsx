import React from "react";
import { RecoilRoot } from "recoil";
import TodoList from "./components/TodoList";

function App() {
  return (
    <RecoilRoot>
      <h1>test</h1>
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
