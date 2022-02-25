import React, { useContext } from "react";
import UseContextCompo from "./UseContextCompo";

const GrandChild = () => {
  const user = useContext(UseContextCompo);

  return (
    <div>
      <h1>GrandChild</h1>
      {user.map((val) => (
        <div>
          Name : {val.name} & Age : {val.age}
        </div>
      ))}
      {console.log(user)}
    </div>
  );
};

export default GrandChild;
