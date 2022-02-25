import React from "react";
import "./App.css";
import Child from "./compo/Components/Child";
import UseReducerCompo from "./compo/Components/UseReducerCompo";

const App = () => {
  return (
    <div className="App">
      <h1>UseReducer</h1>
      <UseReducerCompo />
      <h1>UseContext</h1>
      <Child />
    </div>
  );
};

export default App;
