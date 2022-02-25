import React, { useReducer } from "react";

const UseReducerCompo = () => {
  const intialvalue = { num: 0 };
  const [state, dispatch] = useReducer(reducer, intialvalue);

  function reducer(state, action) {
    switch (action.type) {
      case "INC":
        return { num: state.num + 1 };
      case "DEC":
        return { num: state.num - 1 };
      default:
        return { num: state.num };
    }
  }

  return (
    <div>
      {state.num}
      <br />
      <button onClick={() => dispatch({ type: "DEC" })}>-</button>
      <button onClick={() => dispatch({ type: "INC" })}>+</button>
    </div>
  );
};

export default UseReducerCompo;
